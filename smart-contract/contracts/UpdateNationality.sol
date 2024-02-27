// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract UpdatecountryName {
    string public countryName;
    uint public yearOfIndependence;

    constructor(string memory _countryName, uint _yearOfIndepndence) {
        countryName = _countryName;
        yearOfIndependence = _yearOfIndepndence;
    }

    // Function to update Country name
    function updateCountryName(string memory _countryName) public {
        countryName = _countryName;
    }

    // Function to update year of independence
    function updateYearOfIndependence(uint _yearOfIndepndence) public {
        yearOfIndependence = _yearOfIndepndence;
    }

    // Function to retrieve the Country name and year of independence
    function getCountryDetails() public view returns (string memory _countryName, uint _yearOfIndepndence) {
        return (countryName, yearOfIndependence);
    }
}
