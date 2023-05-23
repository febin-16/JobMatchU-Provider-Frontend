import React from 'react';
import DatePicker from'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CustomDatePicker = ({ field, form, ...rest }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  const handleChange = (date) => {
    setFieldValue(name, date);
  };

  return (
    <DatePicker
      {...rest}
      name={name}
      selected={value}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default CustomDatePicker;
 