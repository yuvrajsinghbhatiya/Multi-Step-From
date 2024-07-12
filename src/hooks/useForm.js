import { useState, useEffect } from 'react';

// create a custom hook to manage form state
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  // save form data to local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setValues(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // return the form values and handleChange function
  return [values, handleChange];
};

export default useForm;
