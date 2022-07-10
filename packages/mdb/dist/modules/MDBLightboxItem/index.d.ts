import * as React from 'react';
import React__default from 'react';

interface LightboxItemProps extends React__default.ImgHTMLAttributes<HTMLImageElement> {
    fullscreenSrc?: string;
    disabled?: boolean;
    caption?: string;
    ref?: React__default.Ref<any>;
}

declare const MDBLightboxItem: React.FunctionComponent<LightboxItemProps>;

export { MDBLightboxItem as default };
