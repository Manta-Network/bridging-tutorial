// npx hardhat run scripts/deploy.js --network manta-testnet

const TOKENS = {
  TEST: {
    name: "Test2 Token",
    symbol: "TEST2",
    decimals: 18,
    l1TokenAddress: "0x32B3b2281717dA83463414af4E8CfB1970E56287",
  },
  MATIC: {
    name: "Matic Token",
    symbol: "MATIC",
    decimals: 18,
    l1TokenAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
  },
  iZi: {
    name: "iZUMi Token",
    symbol: "iZi",
    decimals: 18,
    l1TokenAddress: "0x9ad37205d608b8b219e6a2573f922094cec5c200",
  },
  iUSD: {
    name: "iZUMi Bond USD",
    symbol: "iUSD",
    decimals: 18,
    l1TokenAddress: "0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D",
  },
};

module.exports = {
  TOKENS
};
