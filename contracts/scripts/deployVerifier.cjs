require("@nomiclabs/hardhat-ethers");
const { ethers } = require("hardhat");
const app_id = "42281018756433746339595088905176389306657275904"

async function main() {

    const verifier = await ethers.deployContract("Verifier");
    await verifier.waitForDeployment();

    const _verifierAddress = await verifier.getAddress();

    const anonAadhaarVerifier = await ethers.deployContract(
        "AnonAadhaarVerifier",
        [_verifierAddress, app_id]
    );
    await anonAadhaarVerifier.waitForDeployment();

    const _anonAadhaarVerifierAddress = await anonAadhaarVerifier.getAddress();
    
    console.log("AnonAadhaarVerifier deployed to:", _anonAadhaarVerifierAddress);

}

main();