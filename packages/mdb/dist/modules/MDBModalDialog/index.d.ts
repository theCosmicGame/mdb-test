import * as React$1 from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface ModalDialogProps$1 extends BaseComponent {
    centered?: boolean;
    size?: 'sm' | 'lg' | 'xl' | 'fullscreen' | 'fullscreen-sm-down' | 'fullscreen-md-down' | 'fullscreen-lg-down' | 'fullscreen-xl-down' | 'fullscreen-xxl-down';
    scrollable?: boolean;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

interface ModalDialogProps extends ModalDialogProps$1 {
    frame?: boolean;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom';
    side?: boolean;
}

declare const MDBModalDialog: React$1.FunctionComponent<ModalDialogProps>;

export { MDBModalDialog as default };
