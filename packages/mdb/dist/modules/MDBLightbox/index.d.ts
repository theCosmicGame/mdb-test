import * as React from 'react';
import React__default from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface LightboxProps extends BaseComponent {
    fontAwesome?: 'pro' | 'free';
    zoomLevel?: number;
    lightboxRef?: React__default.MutableRefObject<any>;
    tag?: React__default.ComponentProps<any>;
    onOpen?: () => void;
    onClose?: () => void;
    onSlide?: () => void;
    onZoomIn?: () => void;
    onZoomOut?: () => void;
}

declare const MDBLightbox: React.FunctionComponent<LightboxProps>;

export { MDBLightbox as default };
