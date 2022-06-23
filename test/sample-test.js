const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const DepWith = await hre.ethers.getContractFactory("DepositeWithdraw");
    const depwith = await DepWith.deploy();
    await depwith.deployed();
    console.log("Contract deployed to:", depwith.address);

    expect(await depwith.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
