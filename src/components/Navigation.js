import React from "react";
import "../styles/style.css";

// create a navigation component to navigate through the form
const Navigation = ({ step, handleNext, handleBack, handleFormSubmit }) => {
  return (
    <div className="navigation-container">
      {step > 1 && (
        <button
          type="button"
          className="navigation-button backButton"
          // call the handleBack function when the back button is clicked
          onClick={handleBack}
        >
          Back
        </button>
      )}
      {step < 3 && (
        <button
          type="button"
          className="navigation-button nextButton"
          // call the handleNext function when the next button is clicked
          onClick={handleNext}
        >
          Next
        </button>
      )}
      {step === 3 && (
        <button
          type="button"
          className="navigation-button submitButton"
          // call the handleFormSubmit function when the submit button is clicked
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

// export the Navigation component
export default Navigation;
