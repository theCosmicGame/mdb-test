import * as React from 'react';
import React__default from 'react';

interface SmoothScrollProps extends React__default.AnchorHTMLAttributes<HTMLAnchorElement> {
    containerRef?: React__default.RefObject<any>;
    duration?: number;
    easing?: 'motionLinear' | 'motionEaseInQuad' | 'motionEaseInCubic' | 'motionEaseInQuart' | 'motionEaseInQuint' | 'motionEaseInOutQuad' | 'motionEaseInOutCubic' | 'motionEaseInOutQuart' | 'motionEaseInOutQuint' | 'motionEaseOutQuad' | 'motionEaseOutCubic' | 'motionEaseOutQuart' | 'motionEaseOutQuint';
    offset?: number;
    targetRef?: React__default.RefObject<any>;
}

declare const MDBSmoothScroll: React.FunctionComponent<SmoothScrollProps>;

export { MDBSmoothScroll as default };
