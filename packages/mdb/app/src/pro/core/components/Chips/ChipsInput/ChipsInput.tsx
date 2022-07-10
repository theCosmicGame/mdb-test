import clsx from 'clsx';
import React, { useState, useEffect, useRef, useCallback, MouseEvent, KeyboardEvent, FocusEvent } from 'react';
import Chip from '../Chip';
import type { ChipsInputProps } from './types';

const MDBChipsInput: React.FC<ChipsInputProps> = ({
  className,
  value,
  id,
  labelId,
  labelClass,
  label,
  onChange,
  labelRef,
  labelStyle,
  inputRef,
  onBlur,
  readonly,
  editable,
  onAdd,
  onDelete,
  initialValues,
  ...props
}) => {
  const labelEl = useRef<HTMLLabelElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const labelReference = labelRef ? labelRef : labelEl;
  const inputReference = inputRef ? inputRef : inputEl;

  const [chips, setChips] = useState(initialValues as Array<{ tag: string }>);
  const [chipToEdit, setChipToEdit] = useState<null | number>(null);
  const [oldValue, setNewValue] = useState(value);
  const [labelWidth, setLabelWidth] = useState(0);
  const [active, setActive] = useState(chips.length > 0 || (value !== undefined && value.length > 0));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const placeholderClasses = clsx('chips', 'chips-placeholder');
  const wrapperClasses = clsx(
    'form-outline',
    'chips-input-wrapper',
    chips.length > 0 && 'chips-padding chips-transition'
  );
  const inputClasses = clsx('form-control', active && 'active', className);
  const labelClasses = clsx('form-label', labelClass);

  useEffect(() => {
    if (labelReference.current) {
      if (labelReference.current?.clientWidth !== 0) setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
    }
  }, [labelReference, labelReference.current?.clientWidth]);

  useEffect(() => {
    if (value === undefined) return;
    value.length > 0 || chips.length > 0 ? setActive(true) : setActive(false);
  }, [value, chips]);

  const setWidth = () => {
    if (labelReference.current) {
      setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.currentTarget.value);
    onChange?.(e);
  };

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (
        (oldValue !== undefined && oldValue.length > 0) ||
        (value !== undefined && value.length > 0) ||
        chips.length > 0
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
      onBlur?.(e);
    },
    [oldValue, value, chips, onBlur]
  );

  const handleKeyboard = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        setActiveIndex((prevIndex) => (!prevIndex ? chips.length - 1 : prevIndex - 1));
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        setActiveIndex((prevIndex) => (prevIndex === chips.length - 1 || prevIndex === null ? 0 : prevIndex + 1));
      }
      return;
    }
    if (e.key !== 'Enter') return;
    if (e.currentTarget.value.length) {
      onAdd?.(e.currentTarget.value);
      setChips([...chips, { tag: e.currentTarget.value }]);
      e.currentTarget.value = '';
    }
  };

  const handleClose = (currentIndex: number) => {
    const deletedChip = chips.filter((chip, index) => currentIndex === index);
    onDelete?.(deletedChip[0].tag);
    const newChips = chips.filter((chip, index: number) => currentIndex !== index);
    setChips(newChips);
    setActiveIndex(null);
    newChips.length <= 0 && setActive(false);
  };

  const handleDoubleClick = (e: MouseEvent<HTMLElement>, index: number) => {
    if (!editable) return;

    setChipToEdit(index);
    setTimeout(() => {
      e.currentTarget.focus();
    }, 0);
  };

  const handleChipBlur = (e: FocusEvent<HTMLElement> | KeyboardEvent<HTMLElement>, index: number) => {
    if (!editable) return;
    setChipToEdit(null);

    const newChips = chips.map((el: { tag: string }, i) => {
      if (i === index) return { tag: e.currentTarget.textContent || '' };
      return el;
    });

    setChips(newChips);
  };

  const handleChipKeyboard = (e: KeyboardEvent<HTMLElement>, index: number) => {
    if (e.key !== 'Enter' || !editable || chipToEdit === null) return;
    handleChipBlur(e, index);
  };

  return (
    <div className={placeholderClasses}>
      <div className={wrapperClasses}>
        {chips?.map((chip, index) => (
          <Chip
            contentEditable={chipToEdit === index}
            suppressContentEditableWarning={true}
            onDoubleClick={(e) => handleDoubleClick(e, index)}
            onDelete={() => handleClose(index)}
            onBlur={(e) => handleChipBlur(e, index)}
            onKeyDown={(e) => handleChipKeyboard(e, index)}
            key={`${index}-${chip.tag}`}
            closeIcon={chipToEdit !== index}
            className={clsx('btn', index === activeIndex && 'active')}
          >
            {chip.tag}
          </Chip>
        ))}
        <input
          type='text'
          readOnly={readonly}
          className={inputClasses}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={setWidth}
          onKeyDown={handleKeyboard}
          value={value}
          id={id}
          ref={inputReference}
          {...props}
        />
        {label && (
          <label className={labelClasses} style={labelStyle} id={labelId} htmlFor={id} ref={labelReference}>
            {label}
          </label>
        )}
        <div className='form-notch'>
          <div className='form-notch-leading'></div>
          <div className='form-notch-middle' style={{ width: labelWidth }}></div>
          <div className='form-notch-trailing'></div>
        </div>
      </div>
    </div>
  );
};

MDBChipsInput.defaultProps = { initialValues: [] };

export default MDBChipsInput;
