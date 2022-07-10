type DatepickerModalContainerProps = {
  dropdown?: boolean;
  isOpen?: boolean;
  pickerRef?: HTMLDivElement;
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
  styles: {
    [key: string]: React.CSSProperties;
  };
  attributes: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | undefined;
  };
  setPopperElement: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
};

export { DatepickerModalContainerProps };
