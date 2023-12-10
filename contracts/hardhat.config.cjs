/** @type import('hardhat/config').HardhatUserConfig */

// import { HardhatUserConfig } from "hardhat/config";
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-dependency-compiler");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  dependencyCompiler: {
    paths: ["anon-aadhaar-contracts/contracts/Verifier.sol"],
  },

  networks: {
    arbSepolia: {
      url: process.env.ARB_SEPOLIA_RPC_URI,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URI,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
