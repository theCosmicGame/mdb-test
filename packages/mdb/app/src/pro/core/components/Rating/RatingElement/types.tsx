import React from 'react';

interface RatingElementProps extends React.LiHTMLAttributes<HTMLLIElement> {
  itemId: number;
  icon?: string;
  iconClassName?: string;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  popover?: React.ReactNode;
  size?: 'sm' | 'lg';
}

export { RatingElementProps };
