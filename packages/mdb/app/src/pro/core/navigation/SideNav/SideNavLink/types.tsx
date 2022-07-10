interface SideNavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  iconAngle?: number;
  shouldBeExpanded?: boolean;
  active?: boolean;
  icon?: string;
  iconClasses?: string;
  ref?: React.Ref<any>;
}

export { SideNavLinkProps };
