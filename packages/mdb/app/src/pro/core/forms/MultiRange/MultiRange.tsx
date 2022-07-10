import clsx from 'clsx';
import React, { useState, ChangeEvent, useEffect } from 'react';
import type { MultiRangeProps } from './types';
import MDBRange from '../../../../free/core/forms/Range/Range';

const MDBMultiRange: React.FC<MultiRangeProps> = ({
  className,
  defaultValues,
  getValues,
  min,
  max,
  step,
  tooltips,
  ...props
}) => {
  const [values, setValues] = useState({ first: defaultValues?.first, second: defaultValues?.second });

  const classes = clsx('multi-range', className);

  const { first, second } = values;

  const handleChangeFirst = (e: ChangeEvent<HTMLInputElement>) => {
    const eventValue = Number(e.target.value);
    const inputValue = Number(second);

    if (eventValue > inputValue) return;

    setValues({ ...values, first: eventValue });
  };

  const handleChangeSecond = (e: ChangeEvent<HTMLInputElement>) => {
    const eventValue = Number(e.target.value);
    const inputValue = Number(first);

    if (eventValue < inputValue) return;

    setValues({ ...values, second: eventValue });
  };

  useEffect(() => {
    getValues && getValues(values);
  }, [values, getValues]);

  return (
    <div className={classes} {...props}>
      <MDBRange value={first} onChange={handleChangeFirst} min={min} max={max} step={step} disableTooltip={!tooltips} />
      <MDBRange
        value={second}
        onChange={handleChangeSecond}
        min={min}
        max={max}
        step={step}
        className='multi-range-slider-second'
        disableTooltip={!tooltips}
      />
    </div>
  );
};

MDBMultiRange.defaultProps = {
  defaultValues: { first: 0, second: 100 },
  min: 0,
  max: 100,
  step: '1',
};

export default MDBMultiRange;
