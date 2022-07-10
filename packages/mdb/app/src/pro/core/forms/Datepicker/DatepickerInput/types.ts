import { SetStateAction, ReactNode, CSSProperties } from 'react';

type DatepickerInputProps = {
  labelText?: ReactNode;
  inline?: boolean;
  setReferenceElement: SetStateAction<any>;
  inputClasses?: string;
  value: string;
  style?: CSSProperties;
  inputStyle?: CSSProperties;
  setIsOpen: React.SetStateAction<any>;
  format?: string;
  icon?: string;
  input: any;
  inputToggle?: boolean;
  setDatepickerValue: SetStateAction<any>;
};

export { DatepickerInputProps };
