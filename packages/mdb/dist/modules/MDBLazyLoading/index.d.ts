import * as React from 'react';
import React__default from 'react';
import { animation } from 'src/types/animation';

declare type imgProps = React__default.ImgHTMLAttributes<HTMLImageElement>;
declare type videoProps = React__default.VideoHTMLAttributes<HTMLVideoElement>;
declare type LazyLoadingProps = imgProps & videoProps & {
    animation?: animation | 'none';
    containerRef?: React__default.RefObject<any>;
    lazyRef?: React__default.RefObject<any>;
    lazyOffset?: number;
    lazySrc?: string;
    lazyError?: string;
    lazyDelay?: number;
    lazyPlaceholder?: string;
    video?: boolean;
    onLoad?: () => any;
    onError?: (error?: string) => any;
};

declare const MDBLazyLoading: React.FunctionComponent<LazyLoadingProps>;

export { MDBLazyLoading as default };
