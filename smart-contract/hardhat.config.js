require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
const key = process.env.PRIVATE_KEY
const sepholiaUrl = process.env.URL
module.exports = {
  solidity: "0.8.19",
  // networks:{
  //   sepolia:{
  //     url:`${sepholiaUrl}`,
  //     accounts:[`${key}`]
  //   
   
};
