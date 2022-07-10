type MultiRangeProps = {
  className?: string;
  defaultValues?: { first?: number; second?: number };
  getValues?: (values: { first?: number; second?: number }) => void;
  min?: string | number;
  max?: string | number;
  step?: string;
  tooltips?: boolean;
};

export { MultiRangeProps };
