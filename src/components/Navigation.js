import React from 'react';
import '../styles/style.css';

const Navigation = ({ step, handleNext, handleBack, handleFormSubmit }) => {
  return (
    <div className="navigation-container">
      {step > 1 && (
        <button type="button" className="navigation-button backButton" onClick={handleBack}>
          Back
        </button>
      )}
      {step < 3 && (
        <button type="button" className="navigation-button nextButton" onClick={handleNext}>
          Next
        </button>
      )}
      {step === 3 && (
        <button type="button" className="navigation-button submitButton" onClick={handleFormSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
