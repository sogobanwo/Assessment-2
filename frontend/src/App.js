import { useState } from "react";
import InputForm from "./components/InputsForm";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [details, setDetails] = useState("");
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="App">
      {showForm ? (
        <InputForm setDetails={setDetails} setShowForm={setShowForm}/>
      ) : (
        <>
          <h2>Country details</h2>
          <CountryDetails details={details} />
          <button className="btn" onClick={() => setShowForm(true)}>
            Create New Details
          </button>
        </>
      )}
    </div>
  );
}

export default App;
