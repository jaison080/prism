import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { app_id } from "../../utils/networks";

async function main() {

    const verifier = await ethers.deployContract("Verifier");
    await verifier.waitForDeployment();

    const _verifierAddress = verifier.getAddress();

    const anonAadhaarVerifier = await ethers.deployContract(
        "AnonAadhaarVerifier",
        [_verifierAddress, app_id]
    );
    await anonAadhaarVerifier.waitForDeployment();

    const _anonAadhaarVerifierAddress = anonAadhaarVerifier.getAddress();
    
    console.log("AnonAadhaarVerifier deployed to:", _anonAadhaarVerifierAddress);

}