import React from "react";

// create a step component to review the form details
const Step3 = ({ formData }) => {
  return (
    <div>
      <h2>Review Your Details</h2>
      <div className="review">
      {/* display the form details for review */}
        <p>
          {/* formData is the object that contains all the form data */}
          <strong>Name :- </strong> {formData.name} 
        </p>
        <p>
          <strong>Email :- </strong> {formData.email}
        </p>
        <p>
          <strong>Phone :- </strong> {formData.phone}
        </p>
        <p>
          <strong>Address Line 1 :- </strong> {formData.address1}
        </p>
        <p>
          <strong>Address Line 2 :- </strong> {formData.address2}
        </p>
        <p>
          <strong>Country :- </strong> {formData.country}
        </p>
        <p>
          <strong>State :- </strong> {formData.state}
        </p>
        <p>
          <strong>City :- </strong> {formData.city}
        </p>
        <p>
          <strong>Zip Code :- </strong> {formData.zip}
        </p>
      </div>
    </div>
  );
};

export default Step3;
