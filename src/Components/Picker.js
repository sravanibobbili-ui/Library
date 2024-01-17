import React,{useState} from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
// import './bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';

function CustomInput({value,onClick})
{
    return(
        <div className='input-group'>
            <input type='text' className='form-control' value={value} onClick={onClick} readOnly/>
            <div classsName ='input-group-text'>
                <span className='input-group-text' style={{height:'40px',cursor: 'pointer'}} >
                    <FaCalendarAlt/>
                </span>
            </div>
        </div>
    )
}
export default function Picker() {
    const [ selectDate,setDate] = useState(null)
  return (
    <div>
      <label><Datepicker pdisabledKeyboardNavigation
      placeholderText="This has disabled keyboard navigation" selected = {selectDate} onChange ={date=>setDate(date)} customInput={<CustomInput/>}/></label>
    </div>
  );
}
//  const Picker =() => {
//   const [ range,setRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: 'selection'
//     }
//   ]) 
//    return(
//     <div>
//       <DateRange
//         onChange={item => setRange([item.selection])}
//         //editableDateInputs={true}
//         // moveRangeOnFirstSelection={false}
//         // ranges={range}
//         // months={1}
//         direction="vertical"
//         // className="calendarElement"
//         customInput={<CustomInput/>}
//         />
//     </div>
//    )
// }
// export default Picker;