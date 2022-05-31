
const hre = require("hardhat");

async function main() {
 
  const YourNFT = await hre.ethers.getContractFactory("YourNextNFT");
  const nft = await YourNFT.deploy();

  await nft.deployed();

  console.log("YourNextNFT deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
