import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface TouchProps extends BaseComponent {
  allDirections?: boolean;
  duration?: number;
  interval?: number;
  onSwipe?: (e: any, params: { direction: string }) => void;
  onSwipeLeft?: (e: any) => void;
  onSwipeRight?: (e: any) => void;
  onSwipeUp?: (e: any) => void;
  onSwipeDown?: (e: any) => void;
  onPan?: (e: any) => void;
  onPanLeft?: (e: any) => void;
  onPanRight?: (e: any) => void;
  onPanUp?: (e: any) => void;
  onPanDown?: (e: any) => void;
  onPinch?: (
    e: any,
    params: {
      ratio: number | null;
      origin:
        | {
            x: number;
            y: number;
          }
        | Record<string, any>;
    }
  ) => void;
  onRotate?: (
    e: any,
    result: {
      currentAngle: number;
      distance: number;
      change: number;
    }
  ) => void;
  onTap?: (data: any) => void;
  onPress?: (e: any, time?: number) => void;
  pointers?: number;
  taps?: number;
  tag?: React.ComponentProps<any>;
  touchRef?: React.RefObject<any>;
  threshold?: number;
  type?: 'swipe' | 'tap' | 'press' | 'pinch' | 'rotate' | 'pan';
}

export { TouchProps };
