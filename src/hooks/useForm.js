import { useState, useEffect } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

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

  return [values, handleChange];
};

export default useForm;
