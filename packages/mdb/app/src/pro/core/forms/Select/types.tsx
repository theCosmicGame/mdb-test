interface SelectIcon {
  src?: string;
  className?: string;
  text?: string;
}

type SelectData = {
  disabled?: boolean;
  className?: string;
  text: string;
  height?: string | number;
  selected?: boolean;
  secondaryText?: React.ReactNode;
  value?: string | number;
  style?: React.CSSProperties;
  revert?: boolean;
  icon?: SelectIcon | React.ComponentProps<any>;
  active?: boolean;
};

interface SelectProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'size' | 'data'> {
  clearBtn?: boolean;
  data: SelectData[];
  invalidFeedback?: string;
  inputClassName?: string;
  noResultLabel?: string;
  optionSelected?: string;
  optionsSelectedLabel?: string;
  searchAriaLabel?: string;
  search?: boolean;
  searchLabel?: string;
  selectAllLabel?: string;
  size?: 'default' | 'lg' | 'sm';
  ref?: React.Ref<any>;
  tag?: React.ComponentProps<any>;
  tagWrapper?: React.ComponentProps<any>;
  validation?: boolean;
  validFeedback?: string;
  visibleOptions?: number | string;
  getData?: (e: SelectData[]) => void;
  getValue?: (e: SelectData) => void;
}

export { SelectProps, SelectData };
