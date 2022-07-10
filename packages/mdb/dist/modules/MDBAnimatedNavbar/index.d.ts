import * as React$1 from 'react';

interface NavbarProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'scrolling'> {
    tag?: React.ComponentProps<any>;
    light?: boolean;
    dark?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'body' | 'muted' | 'white' | 'black-50' | 'white-50';
    expand?: string | boolean;
    bgColor?: 'white' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
    fixed?: string;
    sticky?: boolean;
    transparent?: boolean;
    scrollingNavbarOffset?: number;
    scrolling?: boolean;
    ref?: React.Ref<any>;
}

declare const MDBNavbar: React$1.FunctionComponent<NavbarProps>;

declare const MDBAnimatedNavbar: typeof MDBNavbar;

export { MDBAnimatedNavbar as default };
