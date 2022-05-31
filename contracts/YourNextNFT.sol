//SPDX-License-Identifier: MIT  

pragma solidity >=0.7.0 < 0.9.0;  

import './ERC721A.sol';
  
contract YourNextNFT is ERC721A {  
    constructor() ERC721A("Your Next NFT", "NFTNEXT") {}  
  
    function mint(uint256 quantity) external payable {  
        // _safeMint's second argument now takes in a quantity, not a tokenId.  
  _safeMint(msg.sender, quantity);  
  }  
}