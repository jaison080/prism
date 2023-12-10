require("@nomiclabs/hardhat-ethers");
const { ethers } = require("hardhat");

async function main() {

    const jobVerifiedContract = await ethers.deployContract(
        "LGBTQJobMarketVerified"
    );
    await jobVerifiedContract.waitForDeployment();

    const jobVerifiedContractAddress = await jobVerifiedContract.getAddress();

    console.log("LGBTQJobMarketVerified deployed to:", jobVerifiedContractAddress);

}

main();