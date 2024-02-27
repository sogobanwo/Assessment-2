import React from "react";

const EachCountryDetails = ({details}) => {
  const [countryName, yearOfIndependence] = details;
  const year = yearOfIndependence.toString()
  return (
    <div className="goal">
      <h3 className="message">{countryName} gained independence in {year}</h3>
    </div>
  );
};

export default EachCountryDetails;