import React from 'react';
import { animation } from 'src/types/animation';

type imgProps = React.ImgHTMLAttributes<HTMLImageElement>;
type videoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

type LazyLoadingProps = imgProps &
  videoProps & {
    animation?: animation | 'none';
    containerRef?: React.RefObject<any>;
    lazyRef?: React.RefObject<any>;
    lazyOffset?: number;
    lazySrc?: string;
    lazyError?: string;
    lazyDelay?: number;
    lazyPlaceholder?: string;
    video?: boolean;
    onLoad?: () => any;
    onError?: (error?: string) => any;
  };

export { LazyLoadingProps };
