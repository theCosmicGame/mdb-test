import * as React from 'react';
import React__default from 'react';
import { BaseComponent } from 'src/types/baseComponent';
import { backgroundColor } from 'src/types/colors';

interface LoadingManagementProps extends BaseComponent {
    backdrop?: boolean;
    backdropColor?: string;
    backdropOpacity?: number;
    color?: backgroundColor;
    loadingText?: React__default.ReactNode;
    isOpen?: boolean;
    fullScreen?: boolean;
    overflow?: boolean;
    parentRef?: React__default.RefObject<any>;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    spinnerElement?: React__default.ReactNode;
    textClassName?: string;
    textStyles?: React__default.CSSProperties;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBLoadingManagement: React.FunctionComponent<LoadingManagementProps>;

export { MDBLoadingManagement as default };
