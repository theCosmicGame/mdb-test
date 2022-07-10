import * as React from 'react';
import { HTMLAttributes, RefObject, ComponentProps } from 'react';

interface CollapseProps extends HTMLAttributes<HTMLElement> {
    collapseRef?: RefObject<HTMLElement>;
    show?: boolean;
    tag?: ComponentProps<any>;
    navbar?: boolean;
    direction?: 'vertical' | 'horizontal';
    onShow?: () => any;
    onHide?: () => any;
}

declare const MDBCollapse: React.FunctionComponent<CollapseProps>;

declare const MDBSideNavCollapse: typeof MDBCollapse;

export { MDBSideNavCollapse as default };
