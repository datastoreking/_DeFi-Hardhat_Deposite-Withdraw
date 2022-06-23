const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Deposite Test", function () {
  this.timeout(100000);
  it("Should return the balance number after deposite function is called", async function () {
    const DepWith = await ethers.getContractFactory("DepositeWithdraw");
    const depwith = await DepWith.deploy();
    //const decimals = 18;
    //const input = "0.01"; // Note: this is a string, e.g. user input
    //const amount = ethers.utils.parseUnits(input, decimals)
    await depwith.deposite({value: "10000000000000000"})
    expect(await depwith.getBalance()).to.equal(10000000000000000);
  });
});
