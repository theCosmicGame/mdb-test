import * as React from 'react';
import React__default from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface TouchProps extends BaseComponent {
    allDirections?: boolean;
    duration?: number;
    interval?: number;
    onSwipe?: (e: any, params: {
        direction: string;
    }) => void;
    onSwipeLeft?: (e: any) => void;
    onSwipeRight?: (e: any) => void;
    onSwipeUp?: (e: any) => void;
    onSwipeDown?: (e: any) => void;
    onPan?: (e: any) => void;
    onPanLeft?: (e: any) => void;
    onPanRight?: (e: any) => void;
    onPanUp?: (e: any) => void;
    onPanDown?: (e: any) => void;
    onPinch?: (e: any, params: {
        ratio: number | null;
        origin: {
            x: number;
            y: number;
        } | Record<string, any>;
    }) => void;
    onRotate?: (e: any, result: {
        currentAngle: number;
        distance: number;
        change: number;
    }) => void;
    onTap?: (data: any) => void;
    onPress?: (e: any, time?: number) => void;
    pointers?: number;
    taps?: number;
    tag?: React__default.ComponentProps<any>;
    touchRef?: React__default.RefObject<any>;
    threshold?: number;
    type?: 'swipe' | 'tap' | 'press' | 'pinch' | 'rotate' | 'pan';
}

declare const MDBTouch: React.FunctionComponent<TouchProps>;

export { MDBTouch as default };
