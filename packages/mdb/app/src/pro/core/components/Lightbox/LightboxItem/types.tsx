import React from 'react';

interface LightboxItemProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fullscreenSrc?: string;
  disabled?: boolean;
  caption?: string;
  ref?: React.Ref<any>;
}

export { LightboxItemProps };
