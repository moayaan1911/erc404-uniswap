/** @format */

// READ the disclaimer.md file located in this folder before you continue!!!

const { poolAbi } = require('./abis/uniswapabi.js');
const {
  nearestUsableTick,
  NonfungiblePositionManager,
  Position,
  Pool,
} = require('@uniswap/v3-sdk');
const { Percent, Token } = require('@uniswap/sdk-core');
const {
  contractInt,
  getSigner,
  convertToWei,
  getPoolData,
} = require('./interfaces');
const {
  chainID,
  erc404Address,
  usdtAddress,
  positionAddress,
  poolAddress,
  poolFee,
  usdtLiquidity,
  erc404Liquidity,
} = require('./config');

async function addPoolLiquidity() {
  let signer = await getSigner();
  let amount0 = await convertToWei(usdtLiquidity);
  let amount1 = await convertToWei(erc404Liquidity);
  const poolContract = await contractInt(poolAddress, poolAbi);
  let poolData = await getPoolData(poolContract);
  const Token0 = new Token(chainID, usdtAddress, 18);
  const Token1 = new Token(chainID, erc404Address, 18);

  const configuredPool = new Pool(
    Token0,
    Token1,
    poolFee,
    poolData.sqrtPriceX96.toString(),
    poolData.liquidity.toString(),
    poolData.tick
  );

  const position = Position.fromAmounts({
    pool: configuredPool,
    tickLower:
      nearestUsableTick(
        configuredPool.tickCurrent,
        configuredPool.tickSpacing
      ) -
      configuredPool.tickSpacing * 2,
    tickUpper:
      nearestUsableTick(
        configuredPool.tickCurrent,
        configuredPool.tickSpacing
      ) +
      configuredPool.tickSpacing * 2,
    amount0: amount0.toString(),
    amount1: amount1.toString(),
    useFullPrecision: false,
  });

  const mintOptions = {
    recipient: signer.address,
    deadline: Math.floor(Date.now() / 1000) + 60 * 20,
    slippageTolerance: new Percent(100, 10_000),
    createPool: false,
  };

  const { calldata, value } = NonfungiblePositionManager.addCallParameters(
    position,
    mintOptions
  );

  const transaction = {
    data: calldata,
    to: positionAddress,
    value: value,
    from: signer.address,
    gasLimit: 10000000,
  };
  console.log('Executing Liquidity...');
  const tx = await signer.sendTransaction(transaction);
  await tx.wait();
  console.log('Pool Liquidity Added!!');
}

addPoolLiquidity();
