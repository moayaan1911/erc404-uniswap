// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

/*
* @title ERC404 Ownable Contract
* @dev Provides basic ownership management functionalities.
* @author moayaan.eth
*/
abstract contract ERC404_Ownable {
    event OwnershipTransferred(address indexed user, address indexed newOwner);
    error ERC404_Ownable__Unauthorized();
    error ERC404_Ownable__InvalidOwner();

    address public owner;

    modifier onlyOwner() virtual {
        if (msg.sender != owner) revert ERC404_Ownable__Unauthorized();
        _;
    }

    constructor(address _owner) {
        if (_owner == address(0)) revert ERC404_Ownable__InvalidOwner();
        owner = _owner;
        emit OwnershipTransferred(address(0), _owner);
    }

    function transferOwnership(address _owner) public virtual onlyOwner {
        if (_owner == address(0)) revert ERC404_Ownable__InvalidOwner();
        owner = _owner;
        emit OwnershipTransferred(msg.sender, _owner);
    }

    function revokeOwnership() public virtual onlyOwner {
        owner = address(0);
        emit OwnershipTransferred(msg.sender, address(0));
    }
}
