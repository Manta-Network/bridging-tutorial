require("dotenv").config();

const { ethers, run } = require("hardhat");
const { TOKENS } = require("../config");

async function main(token) {
  const l2CustomERC20Factory = await ethers.getContractFactory(
    "MantaMintableERC20"
  );
  // l1StandardBridge (goerli): 0x4638aC6b5727a8b9586D3eba5B44Be4b74ED41Fc
  // l1StandardBridge (ethereum mainnet): 0x3B95bC951EE0f553ba487327278cAc44f29715E5
  const args = [
    "0x3B95bC951EE0f553ba487327278cAc44f29715E5",
    token.l2TokenAddress,
    token.name,
    token.symbol,
    token.decimals,
  ];
  const l2CustomERC20 = await l2CustomERC20Factory.deploy(...args);
  console.log(`${token.symbol} L1 Address: ${l2CustomERC20.address}`);

  await l2CustomERC20.deployTransaction.wait();

  await run("verify:verify", {
    address: l2CustomERC20.address,
    constructorArguments: args,
    contract: "contracts/MantaMintableERC20.sol:MantaMintableERC20"
  });
}

const tokenInfo = TOKENS[process.env.DEPLOY_TOKEN_NAME];
if (!tokenInfo) {
  console.error('Invalid Token: "process.env.DEPLOY_TOKEN_NAME"');
  return;
}
if (tokenInfo.l1TokenAddress) {
  console.error(`Already Deployed: ${tokenInfo.l1TokenAddress}`);
  return;
}

main(tokenInfo).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
