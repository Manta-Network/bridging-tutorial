require("dotenv").config();

const { ethers, run } = require("hardhat");
const { TOKENS } = require("../config");

async function main(token) {
  const l2CustomERC20Factory = await ethers.getContractFactory(
    "MantaMintableERC20WithBridgeFlag"
  );
  const args = [
    "0x4200000000000000000000000000000000000010",
    token.l1TokenAddress,
    token.name,
    token.symbol,
    token.decimals,
  ];
  const l2CustomERC20 = await l2CustomERC20Factory.deploy(...args);
  console.log(`${token.symbol} L2 Address: ${l2CustomERC20.address}`);

  await l2CustomERC20.deployTransaction.wait();

  await run("verify:verify", {
    address: l2CustomERC20.address,
    constructorArguments: args,
    contract: "contracts/MantaMintableERC20WithBridgeFlag.sol:MantaMintableERC20WithBridgeFlag"
  });
}

const tokenInfo = TOKENS[process.env.DEPLOY_TOKEN_NAME];
if (!tokenInfo) {
  console.error('Invalid Token: "process.env.DEPLOY_TOKEN_NAME"');
  return;
}
if (tokenInfo.l2TokenAddress) {
  console.error(`Already Deployed: ${tokenInfo.l2TokenAddress}`);
  return;
}

main(tokenInfo).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
