import React from 'react';

type SelectData = {
  disabled?: boolean;
  text?: string;
  defaultSelected?: boolean;
  secondaryText?: React.ReactNode;
  value?: string | number;
  icon?: string;
  active?: boolean;
};

interface ExtendedSelectData extends SelectData {
  elementPosition: number;
}

interface SelectV2Props extends Omit<React.AllHTMLAttributes<HTMLElement>, 'size' | 'data'> {
  clearBtn?: boolean;
  disabled?: boolean;
  label?: string;
  optionHeight?: number;
  data: SelectData[];
  inputClassName?: string;
  ref?: React.Ref<any>;
  visibleOptions?: number;
  multiple?: boolean;
  optionsSelectedLabel?: string;
  displayedLabels?: number;
  selectAll?: boolean;
  selectAllLabel?: string;
  size?: 'sm' | 'lg';
  contrast?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onValueChange?: (data: SelectData[] | SelectData) => void;
  search?: boolean;
  searchLabel?: string;
  autoSelect?: boolean;
  noResultsText?: string;
  toggleElement?: React.MutableRefObject<any>;
  validation?: boolean;
  validFeedback?: string;
  invalidFeedback?: string;
}

export { SelectV2Props, SelectData, ExtendedSelectData };
