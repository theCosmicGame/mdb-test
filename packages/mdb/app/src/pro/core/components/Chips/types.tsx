import React from 'react';

interface ChipProps extends React.HTMLAttributes<HTMLElement> {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'info';
  chipRef?: React.RefObject<any>;
  closeIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  tag?: React.ComponentProps<any>;
  onDelete?: (name?: React.ReactNode) => any;
}

export { ChipProps };
