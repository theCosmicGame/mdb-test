import * as React from 'react';
import React__default from 'react';
import { ScrollBarProps } from 'react-perfect-scrollbar';

interface ScrollbarProps extends Omit<ScrollBarProps, 'options'> {
    tag?: React__default.ComponentProps<any>;
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

declare const MDBScrollbar: React.FunctionComponent<ScrollbarProps>;

export { MDBScrollbar as default };
