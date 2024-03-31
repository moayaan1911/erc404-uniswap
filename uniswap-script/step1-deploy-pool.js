/** @format */

// READ the disclaimer.md file located in this folder before you continue!!!

const { factoryAbi, poolAbi } = require('./abis/uniswapabi.js');
const erc20Abi = require('./abis/erc20abi.json');
const erc404Abi = require('./abis/erc404abi.json');
const {
  approveTransfer,
  contractInt,
  getSigner,
  encodePriceSqrt,
  initializePool,
  createPool,
} = require('./interfaces');
const {
  erc404Address,
  usdtAddress,
  positionAddress,
  factoryAddress,
  poolFee,
  erc404price,
} = require('./config');

async function deployPool() {
  try {
    let signer = await getSigner();
    console.log('Approved');
    try {
      const tx = await approveTransfer(
        usdtAddress,
        erc404Address,
        positionAddress,
        erc20Abi,
        erc404Abi
      );
    } catch (error) {
      console.log(error);
    }
    // Assuming approveTransfer returns a transaction or receipt
    if (tx && tx.hash) {
      console.log(`Approval transaction hash: ${tx.hash}`);
      // Wait for the transaction to be mined
      await tx.wait();
      console.log('Approval transaction mined');
    }

    console.log('Factory');
    let factory = await contractInt(factoryAddress, factoryAbi);
    console.log('Pool address');
    let poolAddress = await factory.getPool(
      usdtAddress,
      erc404Address,
      poolFee
    );
    console.log('Price');
    let price = encodePriceSqrt(1, erc404price);

    if (poolAddress === '0x0000000000000000000000000000000000000000') {
      console.log('Creating Pool...');
      poolAddress = await createPool(
        factory,
        usdtAddress,
        erc404Address,
        poolFee
      );
      await initializePool(poolAddress, price, signer, poolAbi);
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

deployPool();
