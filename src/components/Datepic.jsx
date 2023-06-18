import React,{useEffect} from 'react';
import DatePicker from'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CustomDatePicker = ({ field, form:{setFieldValue}, ...rest }) => {
  const { name, value } = field;
 
  
  
 
  
const handleChange = (date) => {
   
      setFieldValue(name, date);
     
    
  };

  return (
    <div>
    <DatePicker
      {...rest}
      name={name}
      selected={value}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
    />
     <input type="hidden" name={name} value={value} />
    </div>
    
  );
};

export default CustomDatePicker;
 