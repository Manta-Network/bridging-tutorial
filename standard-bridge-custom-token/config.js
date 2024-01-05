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
  wUSDM: {
    name: "Wrapped Mountain Protocol USD",
    symbol: "wUSDM",
    decimals: 18,
    l1TokenAddress: "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812",
    l2TokenAddress: "0x0917459e8CA2C01E49b1A83Ae8ACC6bd6f627442",
  },
  QUICK: {
    name: "QuickSwap",
    symbol: "QUICK",
    decimals: 18,
    l1TokenAddress: "0xd2ba23de8a19316a638dc1e7a9adda1d74233368",
    l2TokenAddress: "0xE22E3D44Ea9Fb0A87Ea3F7a8f41D869C677f0020",
  },
  MaticX: {
    name: "Liquid Staking Matic",
    symbol: "MaticX",
    decimals: 18,
    l1TokenAddress: "0xf03A7Eb46d01d9EcAA104558C732Cf82f6B6B645",
    l2TokenAddress: "0x01D27580C464d5B3B26F78Bee12E684901dbC02a",
  },
  PYTH: {
    name: "Pyth Network",
    symbol: "PYTH",
    decimals: 6,
    l1TokenAddress: "0xeFc0CED4B3D536103e76a1c4c74F0385C8F4Bdd3",
    l2TokenAddress: "0x90E95735378A31BfAD2Dcd87128Fbb80FFeB6917",
  },
  BEL: {
    name: "Bella",
    symbol: "BEL",
    decimals: 18,
    l1TokenAddress: "0xa91ac63d040deb1b7a5e4d4134ad23eb0ba07e14",
    l2TokenAddress: "0xB385E52903C802B3bDca7C4D0C78460A8988E1ce",
  },
  rsETH: {
    name: "rsETH",
    symbol: "rsETH",
    decimals: 18,
    l1TokenAddress: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
    l2TokenAddress: "0x9758962A46ffbE3Ae02Dc5a850b0e5A3A985EAdD",
  },
  ISP: {
    name: "Ispolink Token",
    symbol: "ISP",
    decimals: 18,
    l1TokenAddress: "0xC8807f0f5BA3fa45FfBdc66928d71c5289249014",
    l2TokenAddress: "0xBAb1c57ec0bB0aE81d948503E51d90166459D154",
  },
};

module.exports = {
  TOKENS
};
