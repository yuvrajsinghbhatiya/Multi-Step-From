import React from 'react';

// create a step component including the form fields (address1, address2, city, state, zip)
const Step2 = ({ formData, errors, handleChange }) => (
  <div>
    <h2>Address Information</h2>
    <div className='forms'>
      <label>Address Line 1</label>
      <input
        type="text"
        name="address1"
        // set the value of the address1 field to the value in the formData state
        value={formData.address1}
        // call the handleChange function when the value of the address1 field changes
        onChange={handleChange}
        placeholder="Enter Address Line 1"
      />
      {/* display an error message if the address1 field is empty */}
      {errors.address1 && <p className="error">{errors.address1}</p>}
    </div>
    <div className='forms'>
      <label>Address Line 2</label>
      <input
        type="text"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        placeholder="Enter Address Line 2"
      />
    </div>
    <div className='forms'>
      <label>City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter City"
      />
      {errors.city && <p className="error">{errors.city}</p>}
    </div>
    <div className='forms'>
      <label>State</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="Enter State"
      />
      {errors.state && <p className="error">{errors.state}</p>}
    </div>
    <div className='forms'>
      <label>Zip Code</label>
      <input
        type="text"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        placeholder="Enter Zip Code"
      />
      {errors.zip && <p className="error">{errors.zip}</p>}
    </div>
  </div>
);

// export the Step2 component
export default Step2;
