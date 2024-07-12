import React from 'react';

const Step1 = ({ formData, errors, handleChange }) => (
  <div>
    <h2>Personal Information</h2>
    <div className='forms'>
      <label>Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., John Doe"/>
      {errors.name && <p className="error">{errors.name}</p>}
    </div>
    <div className='forms'>
      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g., johndoe@example.com" />
      {errors.email && <p className="error">{errors.email}</p>}
    </div>
    <div className='forms'>
      <label>Phone</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g., 1234567890"/>
      {errors.phone && <p className="error">{errors.phone}</p>}
    </div>
  </div>
);

export default Step1;
