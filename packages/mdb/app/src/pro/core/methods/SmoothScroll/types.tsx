import React from 'react';

interface SmoothScrollProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  containerRef?: React.RefObject<any>;
  duration?: number;
  easing?:
    | 'motionLinear'
    | 'motionEaseInQuad'
    | 'motionEaseInCubic'
    | 'motionEaseInQuart'
    | 'motionEaseInQuint'
    | 'motionEaseInOutQuad'
    | 'motionEaseInOutCubic'
    | 'motionEaseInOutQuart'
    | 'motionEaseInOutQuint'
    | 'motionEaseOutQuad'
    | 'motionEaseOutCubic'
    | 'motionEaseOutQuart'
    | 'motionEaseOutQuint';
  offset?: number;
  targetRef?: React.RefObject<any>;
}

export { SmoothScrollProps };
