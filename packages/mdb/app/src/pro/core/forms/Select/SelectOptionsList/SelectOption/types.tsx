interface SelectOptionProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  height?: number | string;
  disabled?: boolean;
  active?: boolean;
  secondaryText?: React.ComponentProps<any>;
  text?: string;
  revert?: boolean;
  ref?: React.Ref<any>;
}

export { SelectOptionProps };
