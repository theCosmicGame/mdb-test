import * as React$1 from 'react';
import { BaseComponent } from 'src/types/baseComponent';
import { backgroundColor } from 'src/types/colors';

interface AlertProps extends BaseComponent {
    appendToBody?: boolean;
    alertRef?: React.MutableRefObject<any>;
    autohide?: boolean;
    color?: backgroundColor;
    containerRef?: React.MutableRefObject<any>;
    delay?: number;
    onClose?: () => void;
    onClosed?: () => void;
    offset?: number;
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    show?: boolean;
    stacking?: boolean;
    triggerRef?: React.MutableRefObject<any>;
    width?: number | string;
}

declare const MDBAlert: React$1.FunctionComponent<AlertProps>;

export { MDBAlert as default };
