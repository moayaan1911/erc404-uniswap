// SPDX-License-Identifier: UNLICENSED
/*
                                                    | | | |    
 _ __ ___   ___   __ _ _   _  __ _  __ _ _ __    ___| |_| |__  
| '_ ` _ \ / _ \ / _` | | | |/ _` |/ _` | '_ \  / _ \ __| '_ \ 
| | | | | | (_) | (_| | |_| | (_| | (_| | | | ||  __/ |_| | | |
|_| |_| |_|\___/ \__,_|\__, |\__,_|\__,_|_| |_(_)___|\__|_| |_|
                        __/ |                                  
                       |___/                                                                                                                                                                               
*/
pragma solidity ^0.8.0;

/*
 * @title ERC721 Token Receiver Interface
 * @dev Interface for any contract that wants to support safeTransfers from ERC721 asset contracts.
 * @author The Ethereum Community
 */
abstract contract ERC721Receiver {
    /*
     * @dev The ERC721 smart contract calls this function on the recipient after a `safeTransfer`. This function MAY throw to revert and reject the transfer. Return of other than the magic value MUST result in the transaction being reverted.
     */
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external virtual returns (bytes4) {
        return ERC721Receiver.onERC721Received.selector;
    }
}
