// npx hardhat run scripts/deploy.js --network manta-testnet

const TOKENS = {
  TEST: {
    name: "Test2 Token",
    symbol: "TEST2",
    decimals: 18,
    l1TokenAddress: "0x32B3b2281717dA83463414af4E8CfB1970E56287",
    l2TokenAddress: "0xA2B0b1DF7FbD966560A302E9E2cFB9d0f115FfD6",
    isTestnet: true,
  },
  MATIC: {
    name: "Matic Token",
    symbol: "MATIC",
    decimals: 18,
    l1TokenAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    l2TokenAddress: "0x0f52A51287f9b3894d73Df05164D0Ee2533ccBB4",
  },
  iZi: {
    name: "iZUMi Token",
    symbol: "iZi",
    decimals: 18,
    l1TokenAddress: "0x9ad37205d608b8b219e6a2573f922094cec5c200",
    l2TokenAddress: "0x91647632245caBf3d66121F86C387aE0ad295F9A",
  },
  iUSD: {
    name: "iZUMi Bond USD",
    symbol: "iUSD",
    decimals: 18,
    l1TokenAddress: "0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D",
    l2TokenAddress: "0x078f712f038A95BeEA94F036cADB49188a90604b",
  },
  TRB: {
    name: "Tellor Tributes",
    symbol: "TRB",
    decimals: 18,
    l1TokenAddress: "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0",
    l2TokenAddress: "0x8D7090DdDa057f48FdBbb2ABCeA22D1113AB566a",
  },
};

module.exports = {
  TOKENS
};
