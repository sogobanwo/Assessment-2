import contractABI from "../abi.json";
const { ethers} = require("ethers");

export async function requestAccount() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

export async function getCountryDetails() {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    console.log("clicked");
    const contract = new ethers.Contract(
      "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
      contractABI,
      signer
    );
    console.log("clicked")
    try {
      console.log("clicked")
      const data = await contract.getCountryDetails();
      console.log("clicked");
      const [countryName, yearOfIndependence] = data;
      console.log("details gotten");
      // console.log(transaction.wait)
      console.log(countryName, yearOfIndependence)
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export async function updateYearOfIndependence(_yearOfIndepndence) {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
      contractABI,
      signer
    );
    try {
      const transaction = await contract.updateYearOfIndependence(_yearOfIndepndence);
      transaction.wait();
      console.log("Year of independence Updated");
      return transaction;
    } catch (err) {
      console.log(err);
    }
  }
}

export async function updateCountryName(_countryName) {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
      contractABI,
      signer
    );
    try {
      const transaction = await contract.updateCountryName(_countryName);
      transaction.wait();
      console.log("Name Updated");
      console.log(transaction.wait)
      return transaction;
    } catch (err) {
      console.log(err);
    }
  }
}
