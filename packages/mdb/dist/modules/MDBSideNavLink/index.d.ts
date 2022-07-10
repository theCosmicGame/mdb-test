import * as React$1 from 'react';

interface SideNavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    iconAngle?: number;
    shouldBeExpanded?: boolean;
    active?: boolean;
    icon?: string;
    iconClasses?: string;
    ref?: React.Ref<any>;
}

declare const MDBSideNavLink: React$1.FunctionComponent<SideNavLinkProps>;

export { MDBSideNavLink as default };
