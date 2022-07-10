import React from 'react';
import MDBCheckbox from '../../../../../free/core/forms/Checkbox/Checkbox';
import type { SelectV2OptionsListProps } from './types';

const MDBSelectOptionsListV2: React.FC<SelectV2OptionsListProps> = ({
  selectedElements,
  optionHeight,
  data,
  multiple,
  selectAll,
  handleSelectAll,
  handleOptionClick,
  handleKeyboard,
  selectAllLabel,
  selectData,
  activeElement,
  noResults,
  search,
}) => {
  return (
    <>
      <div className='select-options-list' onKeyDown={handleKeyboard}>
        {multiple && selectAll && (
          <div
            className={`select-option ${
              selectedElements.length === data.filter((el) => !el.disabled).length ? 'selected' : ''
            } ${activeElement === -1 ? 'active' : ''}`}
            role='option'
            onClick={handleSelectAll}
            style={{ height: optionHeight }}
          >
            <span className='select-option-text'>
              <MDBCheckbox
                disableWrapper
                checked={data.filter((el) => !el.disabled).length === selectedElements.length}
                readOnly
              />
              {selectAllLabel}
            </span>
          </div>
        )}
        {selectData.map((el) => (
          <div
            className={`select-option ${selectedElements.includes(el.elementPosition) ? 'selected' : ''} ${
              el.disabled && 'disabled'
            } ${activeElement === el.elementPosition ? 'active' : ''}`}
            role='option'
            style={{ height: optionHeight }}
            key={el.elementPosition}
            onClick={() => handleOptionClick(el)}
          >
            <span className='select-option-text'>
              {multiple && (
                <MDBCheckbox
                  disabled={el.disabled}
                  disableWrapper
                  checked={selectedElements.includes(el.elementPosition)}
                  readOnly
                />
              )}
              {el.text}
              {el.secondaryText && <span className='select-option-secondary-text'>{el.secondaryText}</span>}
            </span>
            {el.icon && (
              <span className='select-option-icon-container'>
                <img className='select-option-icon rounded-circle' src={el.icon} />
              </span>
            )}
          </div>
        ))}
      </div>
      {search && selectData.length === 0 && (
        <div className='select-no-results' style={{ height: optionHeight }}>
          {noResults}
        </div>
      )}
    </>
  );
};

export default MDBSelectOptionsListV2;
