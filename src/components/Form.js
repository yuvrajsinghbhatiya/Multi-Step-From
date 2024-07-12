import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Navigation from './Navigation';
import '../styles/style.css';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [showFillDetailsAlert, setShowFillDetailsAlert] = useState(false);

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (step === 1) {
      if (touchedFields.name && !formData.name.trim()) {
        tempErrors.name = 'Name is required';
      } else if (touchedFields.name && !/^[a-zA-Z ]+$/.test(formData.name)) {
        tempErrors.name = 'Name should only contain alphabetical characters';
      }

      if (touchedFields.email && !formData.email.trim()) {
        tempErrors.email = 'Email is required';
      } else if (touchedFields.email && !emailRegex.test(formData.email)) {
        tempErrors.email = 'Email is not in proper format';
      }

      if (touchedFields.phone && !formData.phone.trim()) {
        tempErrors.phone = 'Phone is required';
      } else if (touchedFields.phone && !/^\d+$/.test(formData.phone)) {
        tempErrors.phone = 'Phone should only contain numerical digits';
      }
    } else if (step === 2) {
      if (touchedFields.address1 && !formData.address1.trim()) {
        tempErrors.address1 = 'Address Line 1 is required';
      }
      if (touchedFields.city && !formData.city.trim()) {
        tempErrors.city = 'City is required';
      }
      if (touchedFields.state && !formData.state.trim()) {
        tempErrors.state = 'State is required';
      }
      if (touchedFields.zip && !formData.zip.trim()) {
        tempErrors.zip = 'Zip Code is required';
      }
    }

    setErrors(tempErrors);

    // Only check for required fields of the current step
    const requiredFields = step === 1
      ? ['name', 'email', 'phone']
      : ['address1', 'city', 'state', 'zip'];

    const allRequiredFieldsFilled = requiredFields.every(key => formData[key].trim() !== '');

    return Object.keys(tempErrors).length === 0 && allRequiredFieldsFilled;
  };

  useEffect(() => {
    validate(); // Initial validation on component mount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, step]); // Re-run validation whenever formData or step changes

  useEffect(() => {
    let timeoutId;

    if (showFillDetailsAlert) {
      timeoutId = setTimeout(() => {
        setShowFillDetailsAlert(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showFillDetailsAlert]);

  const handleNext = () => {
    if (validate()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      setStep(step + 1);
      setShowFillDetailsAlert(false);
    } else {
      setShowFillDetailsAlert(true);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Mark the field as touched
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
  };

  const handleFormSubmit = () => {
    if (validate()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      console.log('Form submitted', formData);
      setShowPopup(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        country: '',
        state: '',
        city: '',
        zip: '',
      });
      setStep(1);
      setTimeout(() => {
        localStorage.removeItem('formData');
      }, 1500);
      setTimeout(() => {
        setShowPopup(false);
      }, 1500);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <Step1 formData={formData} errors={errors} handleChange={handleChange} />
        )}
        {step === 2 && (
          <Step2 formData={formData} errors={errors} handleChange={handleChange} />
        )}
        {step === 3 && <Step3 formData={formData} />}
        <Navigation
          step={step}
          handleNext={handleNext}
          handleBack={handleBack}
          handleFormSubmit={handleFormSubmit}
        />
        {showFillDetailsAlert && (
          <div className="popup-container">
            <div className="popup">
              <p>🚨 Please fill out all required fields!</p>
            </div>
          </div>
        )}
      </form>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <p>👏 Congratulations! Details Submitted.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
