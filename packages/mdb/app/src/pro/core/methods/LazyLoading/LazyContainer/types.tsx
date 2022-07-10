import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';

type imgProps = React.ImgHTMLAttributes<HTMLImageElement>;
type videoProps = React.VideoHTMLAttributes<HTMLVideoElement>;
interface LazyContainerProps extends BaseComponent {
  lazyContainerRef?: React.MutableRefObject<any>;
  lazyItems: Array<React.ImgHTMLAttributes<imgProps & videoProps>>;
  lazyPlaceholder?: string;
  lazyError?: string;
}

export { LazyContainerProps };
