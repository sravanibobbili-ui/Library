import React from 'react';
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';


const Examplecode = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <Datepicker
      selectsRange={true}
      
      startDate={startDate}
      endDate={endDate}
      disabledKeyboardNavigation
      showIcon
      toggleCalendarOnIconClick
      placeholderText="select date range"
      isClearable
      onChange={(update) => {
        setDateRange(update);
        
      }}
     
      isClearable={true}
    />
  );
};
export default Examplecode