import { InputProps } from '../../../../../free/core/forms/Input/types';

interface ChipsInputProps extends Omit<Omit<InputProps, 'value'>, 'size'> {
  labelId?: string;
  value?: string;
  editable?: boolean;
  initialValues?: Array<{ tag: string }>;
  onAdd?: (name?: string) => any;
  onDelete?: (name?: string) => any;
}

export { ChipsInputProps };
