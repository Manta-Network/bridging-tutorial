require("dotenv").config();

const { ethers, run } = require("hardhat");


async function main() {
  const factory = await ethers.getContractFactory("TestToken");
  const args = [ethers.BigNumber.from("10000000000000000000000")];
  const l1CustomERC20 = await factory.deploy(...args);
  console.log(`L2 Address: ${l1CustomERC20.address}`);

  await l1CustomERC20.deployTransaction.wait();

  await run("verify:verify", {
    address: l1CustomERC20.address,
    constructorArguments: args,
    contract: "contracts/TestToken.sol:TestToken",
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
