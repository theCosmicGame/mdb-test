import React from 'react';
import { ScrollBarProps } from 'react-perfect-scrollbar';

interface ScrollbarProps extends Omit<ScrollBarProps, 'options'> {
  tag?: React.ComponentProps<any>;
  sidenav?: boolean;
  handlers?: string[];
  wheelSpeed?: number;
  wheelPropagation?: boolean;
  swipeEasing?: boolean;
  minScrollbarLength?: number;
  maxScrollbarLength?: number;
  scrollingThreshold?: number;
  useBothWheelAxes?: boolean;
  suppressScrollX?: boolean;
  suppressScrollY?: boolean;
  scrollXMarginOffset?: number;
  scrollYMarginOffset?: number;
  scrollBarRef?: any;
}

export { ScrollbarProps };
