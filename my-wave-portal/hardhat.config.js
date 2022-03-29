require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/2i-8uUCZxTWtJVZ1iFFKLRi41gHMxQ3D",
      accounts: ["..."],
  }
  },
  solidity: {
    version: "0.8.1",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
}