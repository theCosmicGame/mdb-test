import React from 'react';

import { InputProps } from '../../../../free/core/forms/Input/types';

type AutocompleteProps = Omit<InputProps, 'onSelect' | 'value'> & {
  customContent?: React.ReactNode;
  dataFilter: (value: string) => any;
  displayValue?: (value: any) => any;
  itemContent?: (value: any) => React.ReactNode;
  getFilteredData?: (data: Array<any>) => any;
  listHeight?: number;
  noResults?: string;
  onSelect?: (value: any) => any;
  onUpdate?: (data: any) => any;
  onClose?: () => any;
  onOpen?: () => any;
  threshold?: number;
  tag?: React.ComponentProps<any>;
};

export { AutocompleteProps };
