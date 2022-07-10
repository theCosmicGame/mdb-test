import clsx from 'clsx';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { TextAreaProps } from './types';

const MDBTextArea: React.FC<TextAreaProps> = ({
  className,
  size,
  contrast,
  value,
  defaultValue,
  id,
  labelClass,
  wrapperClass,
  wrapperStyle,
  wrapperTag: WrapperTag,
  label,
  onChange,
  children,
  labelRef,
  labelStyle,
  inputRef,
  onBlur,
  readonly,
  ...props
}) => {
  const labelEl = useRef<HTMLLabelElement>(null);
  const textareaEl = useRef<HTMLTextAreaElement>(null);

  const labelReference = labelRef ? labelRef : labelEl;
  const inputReference = inputRef ? inputRef : textareaEl;

  const [oldValue, setNewValue] = useState(value || defaultValue);
  const [labelWidth, setLabelWidth] = useState(0);
  const [active, setActive] = useState(
    (value !== undefined && value.length > 0) || (defaultValue !== undefined && defaultValue.length) > 0 ? true : false
  );

  const wrapperClasses = clsx('form-outline', contrast && 'form-white', wrapperClass);
  const inputClasses = clsx('form-control', active && 'active', size && `form-control-${size}`, className);
  const labelClasses = clsx('form-label', labelClass);

  useEffect(() => {
    if (labelReference.current) {
      if (labelReference.current?.clientWidth !== 0) setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
    }
  }, [labelReference, labelReference.current?.clientWidth]);

  const setWidth = () => {
    if (labelReference.current) {
      setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
    }
  };

  useEffect(() => {
    if (value === undefined) return;
    value.length > 0 ? setActive(true) : setActive(false);
  }, [value]);

  useEffect(() => {
    if (defaultValue === undefined) return;
    defaultValue.length > 0 ? setActive(true) : setActive(false);
  }, [defaultValue]);

  const handleChange = (e: any) => {
    setNewValue(e.currentTarget.value);
    onChange && onChange(e);
  };

  const handleBlur = useCallback(
    (e: any) => {
      if ((oldValue !== undefined && oldValue.length > 0) || (value !== undefined && value.length > 0)) {
        setActive(true);
      } else {
        setActive(false);
      }
      onBlur && onBlur(e);
    },
    [oldValue, value, onBlur]
  );

  return (
    <WrapperTag className={wrapperClasses} style={{ ...wrapperStyle }}>
      <textarea
        readOnly={readonly}
        className={inputClasses}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={setWidth}
        defaultValue={defaultValue}
        value={value}
        id={id}
        ref={inputReference}
        {...props}
      />
      {label && (
        <label className={labelClasses} style={labelStyle} htmlFor={id} ref={labelReference}>
          {label}
        </label>
      )}
      <div className='form-notch'>
        <div className='form-notch-leading'></div>
        <div className='form-notch-middle' style={{ width: labelWidth }}></div>
        <div className='form-notch-trailing'></div>
      </div>
      {children}
    </WrapperTag>
  );
};

MDBTextArea.defaultProps = { wrapperTag: 'div', readonly: false };

export default MDBTextArea;
