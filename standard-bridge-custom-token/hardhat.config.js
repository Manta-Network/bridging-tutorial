// Plugins
require('@nomiclabs/hardhat-ethers')

// Load environment variables from .env
require('dotenv').config();


module.exports = {
  networks: {
    'optimism-goerli': {
      chainId: 420,
      url: `https://opt-goerli.g.alchemy.com/v2/${process.env.L2_ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    'optimism-mainnet': {
      chainId: 10,
      url: `https://opt-mainnet.g.alchemy.com/v2/${process.env.L2_ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    'manta-mainet': {
      chainId: 169,
      url: 'https://manta-pacific.calderachain.xyz/http',
      accounts: [process.env.PRIVATE_KEY]

    },
    'manta-testnet': {
      chainId: 3441005,
      url: 'https://manta-testnet.calderachain.xyz/http',
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: '0.8.13',
}
