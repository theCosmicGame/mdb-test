import { BaseComponent } from 'src/types/baseComponent';

interface DatatableProps extends BaseComponent {
  advancedSearch?: (value: string) => { phrase: string; columns: string | Array<string> };
  advancedData?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  borderColor?: string;
  clickableRows?: (row: any) => any;
  color?: string;
  data: any;
  datatableRef?: React.RefObject<any>;
  dark?: boolean;
  entries?: number;
  entriesOptions?: Array<number>;
  fixedHeader?: boolean;
  fullPagination?: boolean;
  hover?: boolean;
  format?: (field: string | number | symbol, value: number) => any;
  loaderClass?: string;
  loading?: boolean;
  loadingMessage?: React.ReactNode;
  maxWidth?: string;
  maxHeight?: string;
  multi?: boolean;
  noFoundMessage?: React.ReactNode;
  pagination?: boolean;
  selectable?: boolean;
  selectedRows?: Array<any>;
  setSelectedRows?: React.SetStateAction<any>;
  sm?: boolean;
  rowsText?: string;
  searchInputProps?: Record<string, unknown>;
  striped?: boolean;
  sortField?: string;
  sortOrder?: string;
  search?: boolean;
  tag?: React.ComponentProps<any>;
  onSelectRows?: (selectedRows?: Array<any>) => void;
  onRowClick?: (row: any) => void;
}

export { DatatableProps };
