import React from "react";
import { Formik } from "formik";
import {
  updateCountryName,
  updateYearOfIndependence,
  getCountryDetails
} from "../services/functions";

const InputForm = ({ setDetails, setShowForm }) => {
  return (
    <section className="form">
      <Formik
        initialValues={{ yearOfIndependence: "", countryName: "" }}
        onSubmit={async (values, { setSubmitting }) => {
            try {
                setSubmitting(true);
                const newYear = await updateYearOfIndependence(values.yearOfIndependence);
                await newYear.wait();
                const newName = await updateCountryName(values.countryName);
                await newName.wait();
                const details = await getCountryDetails();
                await setDetails(details);
                setShowForm(false);
              } catch (error) {
                console.error("Error updating details:", error);
              } finally {
                setSubmitting(false);
              }
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            {isSubmitting ? (
              <div width="100%" style={{ alignSelf: "center" }}>
             <h1>Creating Details...</h1>
              </div>
            ) : (
              <>
                <h2>Update Your Details</h2>
                <div className="form-group">
                  <input
                    type="number"
                    name="yearOfIndependence"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.yearOfIndependence}
                    placeholder="Input your yearOfIndependence"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="countryName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.countryName}
                    placeholder="Input your countryName"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-block"
                  >
                    {isSubmitting ? "Creating Details" : "Create Details"}
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </Formik>
    </section>
  );
};

export default InputForm;
