import React, { useContext } from 'react';
import { DatepickerContext } from '../utils/DatepickerContext';
import { DatepickerFooterProps } from './types';

const DatepickerFooter: React.FC<DatepickerFooterProps> = ({
  clearBtnText,
  cancelBtnText,
  okBtnText,
  setValue,
  selectDate,
}) => {
  const { setActiveDate, setSelectedDate, setIsClosing, selectedDate } = useContext(DatepickerContext);

  const clearDate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    setActiveDate(new Date());
    setSelectedDate(undefined);
    setValue('');
  };

  return (
    <div className='datepicker-footer' style={{ position: 'static' }}>
      <button tabIndex={0} onClick={(e) => clearDate(e)} className='datepicker-footer-btn datepicker-clear-btn'>
        {clearBtnText}
      </button>
      <button tabIndex={0} onClick={() => setIsClosing(true)} className='datepicker-footer-btn datepicker-cancel-btn'>
        {cancelBtnText}
      </button>
      <button
        tabIndex={0}
        onClick={() => selectDate(selectedDate as Date)}
        className='datepicker-footer-btn datepicker-ok-btn'
      >
        {okBtnText}
      </button>
    </div>
  );
};

DatepickerFooter.defaultProps = { okBtnText: 'Ok', clearBtnText: 'Clear', cancelBtnText: 'Cancel' };

export default DatepickerFooter;
