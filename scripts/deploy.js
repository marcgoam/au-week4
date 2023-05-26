const hre = require("hardhat");
const fs = require("fs");

const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
  const Caller = await hre.ethers.getContractFactory("Caller");
  const contract = await Caller.deploy(contractAddress);

  await contract.deployed();

  console.log(`Contract was deployed to ${contract.address}`);

  const tx = await contract.callContract();

  await tx.wait();

  console.log(`Event emmited to ${tx}`);

  fs.writeFileSync(
    __dirname + "/../constants/contractAddress.json",
    JSON.stringify(contract.address)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
