// Plugins
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// Load environment variables from .env
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
  networks: {
    goerli: {
      // Ankr's Public RPC URL
      url: "https://rpc.ankr.com/eth_goerli",
      // PRIVATE_KEY loaded from .env file
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      // Ankr's Public RPC URL
      url: "https://eth.drpc.org",
      // PRIVATE_KEY loaded from .env file
      accounts: [process.env.PRIVATE_KEY],
    },
    "optimism-goerli": {
      chainId: 420,
      url: `https://opt-goerli.g.alchemy.com/v2/${process.env.L2_ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    "optimism-mainnet": {
      chainId: 10,
      url: `https://opt-mainnet.g.alchemy.com/v2/${process.env.L2_ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    "manta-mainnet": {
      chainId: 169,
      url: "https://manta-pacific.calderachain.xyz/http",
      accounts: [process.env.PRIVATE_KEY],
    },
    "manta-testnet": {
      chainId: 3441005,
      url: "https://manta-testnet.calderachain.xyz/http",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      "manta-testnet": "test",
      "manta-mainnet": "test",
      goerli: process.env.ETHER_SCAN_API_KEY,
      mainnet: process.env.ETHER_SCAN_API_KEY,
    },
    customChains: [
      {
        network: "manta-testnet",
        chainId: 3441005,
        urls: {
          apiURL: "https://manta-testnet.calderaexplorer.xyz/api",
          browserURL: "https://manta-testnet.calderaexplorer.xyz",
        },
      },
      {
        network: "manta-mainnet",
        chainId: 169,
        urls: {
          apiURL: "https://manta-pacific.calderaexplorer.xyz/api",
          browserURL: "https://manta-pacific.calderaexplorer.xyz",
        },
      },
      {
        network: "mainnet",
        chainId: 1,
        urls: {
          apiURL: "https://api.etherscan.io/api",
          browserURL: "https://etherscan.io",
        },
      },
    ],
  },
};
