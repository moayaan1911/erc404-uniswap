//SPDX-License-Identifier: MIT

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

import {ERC404} from "./ERC404.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


/** 
 * @title Cat404 Contract
 * @notice This contract is an extension of the ERC404 contract, designed to demonstrate a unique blend of ERC-20 and ERC-721 token standards with added functionalities for handling token metadata and attributes.
 * @dev The contract introduces mechanisms for setting data URIs, token URIs, and name symbols, alongside a unique method for associating NFT-like attributes to tokens based on their IDs.
 * @author moayaan.eth
 */
contract Cat404 is ERC404 {
    string public dataURI;
    string public baseTokenURI;
    string public metaDescription;

    constructor(address _owner)
        ERC404("CAT404 SemiFungibles Rewards", "CATR", 18, 10000, _owner)
    {
        balanceOf[_owner] = 10000 * 10**18;
        whitelist[_owner] = true;
    }

    function setDataURI(string memory _dataURI) public onlyOwner {
        dataURI = _dataURI;
    }

    function setTokenURI(string memory _tokenURI) public onlyOwner {
        baseTokenURI = _tokenURI;
    }

    function setNameSymbol(string memory _name, string memory _symbol)
        public
        onlyOwner
    {
        _setNameSymbol(_name, _symbol);
    }

    function getNftImg(uint256 id) internal pure returns (string[2] memory) {
    uint8 idSeed = uint8(bytes1(keccak256(abi.encodePacked(id))));
    string memory image;
    string memory color; // In this context, 'color' will represent the cat's name.

    if (idSeed <= 23) {
        image = "1.png";
        color = "Whiskers";
    } else if (idSeed <= 46) {
        image = "2.png";
        color = "Shadow";
    } else if (idSeed <= 69) {
        image = "3.png";
        color = "Mittens";
    } else if (idSeed <= 92) {
        image = "4.png";
        color = "Socks";
    } else if (idSeed <= 115) {
        image = "5.png";
        color = "Gizmo";
    } else if (idSeed <= 138) {
        image = "6.png";
        color = "Simba";
    } else if (idSeed <= 161) {
        image = "7.png";
        color = "Luna";
    } else if (idSeed <= 184) {
        image = "8.png";
        color = "Felix";
    } else if (idSeed <= 207) {
        image = "9.png";
        color = "Bella";
    } else if (idSeed <= 230) {
        image = "10.png";
        color = "Oliver";
    } else if (idSeed <= 255) {
        image = "11.png";
        color = "Leo";
    }

    return [image, color];
}


    function setMetaDescription(string memory _metaDesc) public onlyOwner {
        metaDescription = _metaDesc;
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        if (bytes(baseTokenURI).length > 0) {
            return string.concat(baseTokenURI, Strings.toString(id));
        } else {
            string memory image = getNftImg(id)[0];
            string memory color = getNftImg(id)[1];
            string memory nftMetaOpen = string.concat(
                string.concat(string.concat('{"name":''"', name, ' #',
                Strings.toString(id)),
                '","description":''"', metaDescription, '","external_url":"https://cat404.vercel.app","image":"'),
                string.concat(dataURI, image));

            string memory nftMetaProperty = string.concat('","attributes":[{"trait_type":"Color","value":"',
                color
            );
            string memory nftMetaClose = '"}]}';
            return string.concat( "data:application/json;utf8,", string.concat(string.concat(nftMetaOpen, nftMetaProperty), nftMetaClose));
        }
    }
}