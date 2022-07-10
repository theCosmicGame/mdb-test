import React, { useContext } from 'react';
import { DatepickerContext } from '../utils/DatepickerContext';
import { DatepickerHeaderProps } from './types';

const DatepickerHeader: React.FC<DatepickerHeaderProps> = ({ title }) => {
  const { weekdaysShort, monthsShort, selectedDate } = useContext(DatepickerContext);

  return (
    <div className='datepicker-header'>
      <div className='datepicker-title'>
        <span className='datepicker-title-text'>{title}</span>
      </div>
      <div className='datepicker-date'>
        <span className='datepicker-date-text'>
          {weekdaysShort[selectedDate ? selectedDate.getDay() : new Date().getDay()]},{' '}
          {monthsShort[selectedDate ? selectedDate.getMonth() : new Date().getMonth()]}{' '}
          {selectedDate ? selectedDate.getDate() : new Date().getDate()}
        </span>
      </div>
    </div>
  );
};

export default DatepickerHeader;
