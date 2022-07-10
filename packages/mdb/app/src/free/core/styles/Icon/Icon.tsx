import clsx from 'clsx';
import React from 'react';
import type { IconProps } from './types';

const MDBIcon: React.FC<IconProps> = ({
  animate,
  className,
  icon,
  fab,
  fas,
  fal,
  far,
  flag,
  spin,
  fixed,
  flip,
  list,
  size,
  pull,
  pulse,
  color,
  border,
  rotate,
  inverse,
  stack,
  iconType,
  children,
  ...props
}) => {
  let type;

  if (flag) {
    type = 'flag';
  } else if (fab) {
    type = 'fab';
  } else if (fas) {
    type = 'fas';
  } else if (far) {
    type = 'far';
  } else if (fal) {
    type = 'fal';
  } else {
    type = 'fa';
  }
  const classes = clsx(
    iconType ? `fa-${iconType}` : type,
    animate && `fa-${animate}`,
    flag ? `flag-${flag}` : icon && `fa-${icon}`,
    size && `fa-${size}`,
    color && `text-${color}`,
    border && 'fa-border',
    rotate && `fa-rotate-${rotate}`,
    pull && `fa-pull-${pull}`,
    spin && !animate && 'fa-spin',
    list && 'fa-li',
    fixed && 'fa-fw',
    pulse && !animate && 'fa-pulse',
    inverse && 'fa-inverse',
    flip && `fa-flip-${flip}`,
    stack && `fa-stack-${stack}`,
    className
  );

  return (
    <i className={classes} {...props}>
      {children}
    </i>
  );
};

export default MDBIcon;
