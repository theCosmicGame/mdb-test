import * as React$1 from "react";
import React__default, {
  HTMLAttributes,
  RefObject,
  ComponentProps,
  ReactNode,
} from "react";
import { ScrollBarProps } from "react-perfect-scrollbar";

type BaseComponent = Pick<
  React.HTMLAttributes<HTMLElement>,
  | "className"
  | "id"
  | "style"
  | "onClick"
  | "onMouseUp"
  | "onMouseMove"
  | "onMouseDown"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onMouseOver"
  | "onMouseOut"
  | "onKeyDown"
  | "onKeyUp"
  | "onTouchStart"
  | "onTouchMove"
  | "onTouchEnd"
  | "onScroll"
  | "onDrop"
> & {
  [rest: string]: any;
};

type backgroundColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "white"
  | "transparent";

type textColor =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark"
  | "body"
  | "muted"
  | "white"
  | "black-50"
  | "white-50";

type size = "sm" | "lg";

type placement =
  | "top"
  | "auto"
  | "auto-start"
  | "auto-end"
  | "bottom"
  | "right"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "right-start"
  | "right-end"
  | "left-start"
  | "left-end";
type animation =
  | "fade-in"
  | "fade-in-down"
  | "fade-in-left"
  | "fade-in-right"
  | "fade-in-up"
  | "fade-out"
  | "fade-out-down"
  | "fade-out-left"
  | "fade-out-right"
  | "fade-out-up"
  | "slide-in-down"
  | "slide-in-left"
  | "slide-in-right"
  | "slide-in-up"
  | "slide-out-down"
  | "slide-out-left"
  | "slide-out-right"
  | "slide-out-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "slide-up"
  | "zoom-in"
  | "zoom-out"
  | "tada"
  | "pulse"
  | "drop-in"
  | "drop-out"
  | "fly-in"
  | "fly-in-up"
  | "fly-in-down"
  | "fly-in-left"
  | "fly-in-right"
  | "fly-out"
  | "fly-out-up"
  | "fly-out-down"
  | "fly-out-left"
  | "fly-out-right"
  | "browse-in"
  | "browse-out"
  | "browse-out-left"
  | "browse-out-right"
  | "jiggle"
  | "flash"
  | "shake"
  | "glow";

interface ContainerProps extends BaseComponent {
  breakpoint?: string;
  fluid?: boolean;
  tag?: React.ComponentProps<any>;
}

declare const MDBContainer: React$1.FunctionComponent<ContainerProps>;

interface ColumnProps extends BaseComponent {
  center?: boolean;
  end?: boolean;
  lg?: string | number;
  md?: string | number;
  offsetSm?: string | number;
  offsetMd?: string | number;
  offsetLg?: string | number;
  order?: string | number;
  size?: string | number;
  sm?: string | number;
  start?: boolean;
  tag?: React.ComponentProps<any>;
  xl?: string | number;
  xxl?: string | number;
  xs?: string | number;
}

declare const MDBCol: React$1.FunctionComponent<ColumnProps>;

interface BadgeProps extends BaseComponent {
  color?: backgroundColor;
  dot?: boolean;
  notification?: boolean;
  pill?: boolean;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  tag?: React__default.ComponentProps<any>;
}

declare const MDBBadge: React$1.FunctionComponent<BadgeProps>;

declare type btnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
declare type anchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare type joinedTypes = btnProps & anchorProps;
interface ButtonProps extends Omit<joinedTypes, "size" | "color"> {
  active?: boolean;
  block?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "dark"
    | "muted"
    | "white"
    | "info"
    | "none"
    | "link";
  floating?: boolean;
  noRipple?: boolean;
  outline?: boolean;
  rippleUnbound?: boolean;
  rippleColor?: string;
  rippleRadius?: number;
  rippleDuration?: number;
  rippleCentered?: boolean;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  rounded?: boolean;
  size?: "sm" | "lg";
  toggle?: boolean;
  target?: string;
  tag?: React.ComponentProps<any>;
  to?: string;
}

declare const MDBBtn: React$1.FunctionComponent<ButtonProps>;

interface ButtonGroupProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  size?: size;
  shadow?: "0" | "1" | "2" | "3" | "4" | "5";
  toolbar?: boolean;
  vertical?: boolean;
  tag?: React.ComponentProps<any>;
}

declare const MDBBtnGroup: React$1.FunctionComponent<ButtonGroupProps>;

interface SpinnerProps extends BaseComponent {
  color?: textColor;
  grow?: boolean;
  size?: size;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBSpinner: React$1.FunctionComponent<SpinnerProps>;

interface CardProps extends BaseComponent {
  alignment?: string;
  border?: string;
  background?: backgroundColor;
  shadow?: "0" | "1" | "2" | "3" | "4" | "5";
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBCard: React$1.FunctionComponent<CardProps>;

interface CardHeaderProps extends BaseComponent {
  border?: string;
  background?: backgroundColor;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBCardHeader: React$1.FunctionComponent<CardHeaderProps>;

interface CardSubTitleProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardSubTitle: React$1.FunctionComponent<CardSubTitleProps>;

interface CardTitleProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardTitle: React$1.FunctionComponent<CardTitleProps>;

interface CardTextProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardText: React$1.FunctionComponent<CardTextProps>;

interface CardBodyProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardBody: React$1.FunctionComponent<CardBodyProps>;

interface CardFooterProps extends BaseComponent {
  border?: string;
  background?: backgroundColor;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBCardFooter: React$1.FunctionComponent<CardFooterProps>;

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  position?: string;
  overlay?: boolean;
  fluid?: boolean;
}

declare const MDBCardImage: React$1.FunctionComponent<CardImageProps>;

interface CardOverlayProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardOverlay: React$1.FunctionComponent<CardOverlayProps>;

declare type CardLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

declare const MDBCardLink: React$1.FunctionComponent<CardLinkProps>;

interface CardGroupProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardGroup: React$1.FunctionComponent<CardGroupProps>;

interface ListGroupProps extends BaseComponent {
  horizontal?: boolean;
  horizontalSize?: string;
  flush?: boolean;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  tag?: React__default.ComponentProps<any>;
}

declare const MDBListGroup: React$1.FunctionComponent<ListGroupProps>;

interface ListGroupItemProps extends BaseComponent {
  action?: boolean;
  color?: backgroundColor;
  disabled?: boolean;
  tag?: React__default.ComponentProps<any>;
}

declare const MDBListGroupItem: React$1.FunctionComponent<ListGroupItemProps>;

interface TooltipProps extends BaseComponent {
  disableMouseDown?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  tag?: React.ComponentProps<any>;
  tooltipTag?: React.ComponentProps<any>;
  title?: React.ReactNode;
  wrapperProps?: Record<string, unknown>;
  wrapperClass?: string;
  onShow?: () => any;
  onHide?: () => any;
}

declare const MDBTooltip: React$1.FunctionComponent<TooltipProps>;

interface RowProps extends BaseComponent {
  around?: boolean;
  between?: boolean;
  bottom?: boolean;
  center?: boolean;
  end?: boolean;
  evenly?: boolean;
  middle?: boolean;
  start?: boolean;
  tag?: React.ComponentProps<any>;
  top?: boolean;
}

declare const MDBRow: React$1.FunctionComponent<RowProps>;

declare type IconProps = {
  animate?:
    | "beat"
    | "fade"
    | "beat-fade"
    | "bounce"
    | "shake"
    | "flip"
    | "spin"
    | "pulse";
  className?: string;
  iconType?: string;
  fab?: boolean;
  far?: boolean;
  fas?: boolean;
  fal?: boolean;
  flag?: string;
  size?:
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x"
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl";
  color?: textColor;
  icon?: string;
  border?: boolean;
  rotate?: "90" | "180" | "270" | "by";
  pull?: "left" | "right";
  spin?: boolean;
  list?: boolean;
  fixed?: boolean;
  pulse?: boolean;
  flip?: "horizontal" | "vertical" | "both";
  inverse?: boolean;
  stack?: "1x" | "2x";
  style?: React.CSSProperties;
  [rest: string]: any;
};

declare const MDBIcon: React$1.FunctionComponent<IconProps>;

declare type TypographyProps = BaseComponent & {
  blockquote?: boolean;
  color?: textColor;
  listUnStyled?: boolean;
  listInLine?: boolean;
  note?: boolean;
  noteColor?: backgroundColor;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

declare const MDBTypography: React$1.FunctionComponent<TypographyProps>;

interface BreadcrumbProps extends BaseComponent {
  bold?: boolean;
  tag?: React.ComponentProps<any>;
  color?: textColor;
  uppercase?: boolean;
  ref?: React.Ref<HTMLOListElement>;
}

declare const MDBBreadcrumb: React$1.FunctionComponent<BreadcrumbProps>;

interface BreadcrumbItemProp extends BaseComponent {
  active?: boolean;
  current?: "page" | "step" | "location";
  ref?: React.Ref<HTMLLIElement>;
}

declare const MDBBreadcrumbItem: React$1.FunctionComponent<BreadcrumbItemProp>;

interface NavbarProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "scrolling"> {
  tag?: React.ComponentProps<any>;
  light?: boolean;
  dark?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | "body"
    | "muted"
    | "white"
    | "black-50"
    | "white-50";
  expand?: string | boolean;
  bgColor?:
    | "white"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "light"
    | "dark";
  fixed?: string;
  sticky?: boolean;
  transparent?: boolean;
  scrollingNavbarOffset?: number;
  scrolling?: boolean;
  ref?: React.Ref<any>;
}

declare const MDBNavbar: React$1.FunctionComponent<NavbarProps>;

interface NavbarLinkProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  active?: boolean;
  disabled?: boolean;
  ref?: React.Ref<any>;
}

declare const MDBNavbarLink: React$1.FunctionComponent<NavbarLinkProps>;

interface NavbarBrandProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

declare const MDBNavbarBrand: React$1.FunctionComponent<NavbarBrandProps>;

interface NavbarItemProps extends React.AllHTMLAttributes<HTMLElement> {
  active?: boolean;
  text?: boolean;
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

declare const MDBNavbarItem: React$1.FunctionComponent<NavbarItemProps>;

interface NavbarNavProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  right?: boolean;
  fullWidth?: boolean;
  left?: boolean;
  ref?: React.Ref<any>;
}

declare const MDBNavbarNav: React$1.FunctionComponent<NavbarNavProps>;

interface NavbarTogglerProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

declare const MDBNavbarToggler: React$1.FunctionComponent<NavbarTogglerProps>;

interface FooterProps extends BaseComponent {
  color?: textColor;
  tag?: React.ComponentProps<any>;
  bgColor?: backgroundColor;
  ref?: React.Ref<HTMLDivElement>;
}

declare const MDBFooter: React$1.FunctionComponent<FooterProps>;

interface PaginationProps extends BaseComponent {
  center?: boolean;
  end?: boolean;
  start?: boolean;
  size?: size;
  circle?: boolean;
  ref?: React.Ref<HTMLUListElement>;
}

declare const MDBPagination: React$1.FunctionComponent<PaginationProps>;

interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
  tag?: React.ComponentProps<any>;
}

declare const MDBPaginationLink: React$1.FunctionComponent<PaginationLinkProps>;

interface PaginationItemProps extends BaseComponent {
  active?: boolean;
  disabled?: boolean;
  ref?: React.Ref<HTMLLIElement>;
}

declare const MDBPaginationItem: React$1.FunctionComponent<PaginationItemProps>;

interface TableProps
  extends Omit<React.TableHTMLAttributes<HTMLTableElement>, "align"> {
  align?: "top" | "middle" | "bottom";
  borderColor?: textColor;
  color?: backgroundColor;
  bordered?: boolean;
  borderless?: boolean;
  small?: boolean;
  hover?: boolean;
  classNameResponsive?: string;
  striped?: boolean;
  responsive?: string | boolean;
}

declare const MDBTable: React$1.FunctionComponent<TableProps>;

interface TableHeadProps extends React.HTMLAttributes<HTMLElement> {
  dark?: boolean;
  light?: boolean;
}

declare const MDBTableHead: React$1.FunctionComponent<TableHeadProps>;

declare type TableBodyProps = React.HTMLAttributes<HTMLElement>;

declare const MDBTableBody: React$1.FunctionComponent<TableBodyProps>;

interface ProgressProps extends BaseComponent {
  height?: number | string;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBProgress: React$1.FunctionComponent<ProgressProps>;

interface ProgressBarProps extends BaseComponent {
  animated?: boolean;
  bgColor?: backgroundColor;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  striped?: boolean;
  tag?: React.ComponentProps<any>;
  valuemax?: string | number;
  valuemin?: string | number;
  valuenow?: string | number;
  width?: string | number;
  [rest: string]: any;
}

declare const MDBProgressBar: React$1.FunctionComponent<ProgressBarProps>;

declare type InputELement = Omit<
  React__default.InputHTMLAttributes<HTMLInputElement>,
  "size"
>;
declare type InputProps = InputELement & {
  contrast?: boolean;
  label?: React__default.ReactNode;
  labelStyle?: React__default.CSSProperties;
  labelClass?: string;
  labelRef?: React__default.RefObject<HTMLLabelElement>;
  inputRef?: React__default.RefObject<HTMLInputElement>;
  readonly?: boolean;
  size?: string;
  wrapperTag?: React__default.ComponentProps<any>;
  wrapperClass?: string;
  wrapperStyle?: React__default.CSSProperties;
};

declare const MDBInput: React$1.FunctionComponent<InputProps>;

interface InputTemplateProps
  extends React__default.InputHTMLAttributes<HTMLInputElement> {
  btn?: boolean;
  btnColor?: string;
  disableWrapper?: boolean;
  inputRef?: React__default.MutableRefObject<any>;
  label?: React__default.ReactNode;
  labelClass?: string;
  labelStyle?: React__default.CSSProperties;
  inline?: boolean;
  toggleSwitch?: boolean;
  wrapperTag?: React__default.ComponentProps<any>;
  wrapperClass?: string;
  wrapperStyle?: React__default.CSSProperties;
}

declare type CheckboxProps = Omit<InputTemplateProps, "toggleSwitch">;

declare const MDBCheckbox: React$1.FunctionComponent<CheckboxProps>;

declare type RadioProps = Omit<InputTemplateProps, "toggleSwitch">;

declare const MDBRadio: React.FunctionComponent<RadioProps>;

interface CollapseProps extends HTMLAttributes<HTMLElement> {
  collapseRef?: RefObject<HTMLElement>;
  show?: boolean;
  tag?: ComponentProps<any>;
  navbar?: boolean;
  direction?: "vertical" | "horizontal";
  onShow?: () => any;
  onHide?: () => any;
}

declare const MDBCollapse: React$1.FunctionComponent<CollapseProps>;

interface DropdownProps extends BaseComponent {
  animation?: boolean;
  group?: boolean;
  isOpen?: boolean;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  tag?: React.ComponentProps<any>;
}

declare const MDBDropdown: React__default.FC<DropdownProps>;

interface DropdownItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  tag?: React.ComponentProps<any>;
}

declare const MDBDropdownItem: React$1.FunctionComponent<DropdownItemProps>;

interface DropdownMenuProps extends BaseComponent {
  dark?: boolean;
  responsive?:
    | ""
    | "start"
    | "end"
    | "sm-start"
    | "md-start"
    | "lg-start"
    | "xl-start"
    | "xxl-start"
    | "sm-end"
    | "md-end"
    | "lg-end"
    | "xl-end"
    | "xxl-end";
  tag?: React.ComponentProps<any>;
}

declare const MDBDropdownMenu: React$1.FunctionComponent<DropdownMenuProps>;

interface DropdownToggleProps extends ButtonProps {
  split?: boolean;
  tag?: React.ComponentProps<any>;
}

declare const MDBDropdownToggle: React$1.FunctionComponent<DropdownToggleProps>;

interface DropdownLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disableClass?: boolean;
  tag?: React.ComponentProps<any>;
}

declare const MDBDropdownLink: React$1.FunctionComponent<DropdownLinkProps>;

interface DropdownDividerProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
}

declare const MDBDropdownDivider: React$1.FunctionComponent<DropdownDividerProps>;

interface DropdownHeaderProps
  extends React.AllHTMLAttributes<HTMLHeadingElement> {
  tag?: React.ComponentProps<any>;
}

declare const MDBDropdownHeader: React$1.FunctionComponent<DropdownHeaderProps>;

interface PopoverProps extends ButtonProps {
  btnChildren?: React.ReactNode;
  btnClassName?: string;
  dismiss?: boolean;
  isOpen?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  poperStyle?: React.CSSProperties;
  popperTag?: React.ComponentProps<any>;
  tag?: React.ComponentProps<any>;
  onShow?: () => any;
  onHide?: () => any;
}

declare const MDBPopover: React$1.FunctionComponent<PopoverProps>;

interface PopoverBodyProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
}

declare const MDBPopoverBody: React$1.FunctionComponent<PopoverBodyProps>;

interface PopoverHeaderProps extends React.AllHTMLAttributes<HTMLHeadElement> {
  tag?: React.ComponentProps<any>;
}

declare const MDBPopoverHeader: React$1.FunctionComponent<PopoverHeaderProps>;

interface ModalProps extends BaseComponent {
  animationDirection?: "top" | "bottom" | "right" | "left";
  appendToBody?: boolean;
  backdrop?: boolean;
  closeOnEsc?: boolean;
  leaveHiddenModal?: boolean;
  modalRef?: React.RefObject<HTMLElement>;
  onHide?: () => void;
  onHidePrevented?: () => any;
  onShow?: () => void;
  show?: boolean;
  setShow?: React.SetStateAction<any>;
  staticBackdrop?: boolean;
  tag?: React.ComponentProps<any>;
}

declare const MDBModal: React$1.FunctionComponent<ModalProps>;

interface ModalContentProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBModalContent: React$1.FunctionComponent<ModalContentProps>;

interface ModalHeaderProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBModalHeader: React$1.FunctionComponent<ModalHeaderProps>;

interface ModalTitleProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBModalTitle: React$1.FunctionComponent<ModalTitleProps>;

interface ModalBodyProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBModalBody: React$1.FunctionComponent<ModalBodyProps>;

interface ModalFooterProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

declare const MDBModalFooter: React$1.FunctionComponent<ModalFooterProps>;

interface ScrollspyProps extends BaseComponent {
  container?: Window | React__default.MutableRefObject<any>;
  offset?: number;
}

declare const MDBScrollspy: React$1.FunctionComponent<ScrollspyProps>;

interface ScrollspyNavLinkProps extends BaseComponent {
  collapsible?: boolean;
  onActivate?: (id?: string) => void;
  subsections?: Array<React__default.MutableRefObject<any>>;
  targetRef: React__default.MutableRefObject<any>;
}

declare const MDBScrollspyNavLink: React$1.FunctionComponent<ScrollspyNavLinkProps>;

interface ScrollspySubListProps extends BaseComponent {
  collapsible?: Array<React__default.MutableRefObject<any>>;
}

declare const MDBScrollspySubList: React$1.FunctionComponent<ScrollspySubListProps>;

declare type SwitchProps = Omit<InputTemplateProps, "toggleSwitch">;

declare const MDBSwitch: React.FunctionComponent<SwitchProps>;

interface RangeProps
  extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "type"> {
  disableTooltip?: boolean;
  label?: string;
  labelId?: string;
  labelClass?: string;
  step?: string;
  inputRef?: React__default.MutableRefObject<any>;
}

declare const MDBRange: React__default.FunctionComponent<RangeProps>;

interface FileProps
  extends Omit<
    React__default.InputHTMLAttributes<HTMLInputElement>,
    "type" | "size"
  > {
  label?: React__default.ReactNode;
  labelClass?: string;
  labelStyle?: React__default.CSSProperties;
  inputRef?: React__default.MutableRefObject<any>;
  size?: string;
}

declare const MDBFile: React$1.FunctionComponent<FileProps>;

declare type InputGroupProps = Omit<
  React__default.DetailedHTMLProps<
    React__default.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
  "ref"
> & {
  noWrap?: boolean;
  noBorder?: boolean;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  size?: string;
  tag?: React__default.ComponentProps<any>;
  textTag?: React__default.ComponentProps<any>;
  textClass?: string;
  textBefore?: React__default.ReactNode | Array<React__default.ReactNode>;
  textAfter?: React__default.ReactNode | Array<React__default.ReactNode>;
  textProps?: Record<string, unknown>;
};

declare const MDBInputGroup: React$1.FunctionComponent<InputGroupProps>;

interface RippleProps extends React__default.AllHTMLAttributes<HTMLElement> {
  rippleUnbound?: boolean;
  rippleColor?: string;
  rippleRadius?: number;
  rippleDuration?: number;
  rippleCentered?: boolean;
  ref?: React__default.ForwardedRef<any>;
  rippleTag?: React__default.ComponentProps<any>;
}

declare const MDBRipple: React$1.FunctionComponent<RippleProps>;

declare type ValidationProps =
  React__default.FormHTMLAttributes<HTMLFormElement> & {
    isValidated?: boolean;
    ref?: React__default.Ref<any>;
  };

declare const MDBValidation: React$1.FunctionComponent<ValidationProps>;

interface TabsProps extends BaseComponent {
  fill?: boolean;
  justify?: boolean;
  pills?: boolean;
  ref?: React.Ref<any>;
}

declare const MDBTabs: React$1.FunctionComponent<TabsProps>;

interface TabsItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<any>;
}

declare const MDBTabsItem: React$1.FunctionComponent<TabsItemProps>;

interface TabsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark";
  ref?: React.Ref<any>;
  onShow?: () => any;
  onHide?: () => any;
}

declare const MDBTabsLink: React$1.FunctionComponent<TabsLinkProps>;

interface TabsContentProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

declare const MDBTabsContent: React$1.FunctionComponent<TabsContentProps>;

interface TabsPaneProps extends BaseComponent {
  show?: boolean;
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

declare const MDBTabsPane: React$1.FunctionComponent<TabsPaneProps>;

declare const MDBCarousel: React$1.FunctionComponent<{
  asyncData?: any;
  activeItem?: number;
  className?: string;
  fade?: boolean;
  keyboard?: boolean;
  onSlide?: () => any;
  pause?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  touch?: boolean;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCarouselInner: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCarouselElement: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCarouselCaption: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCarouselItem: React$1.FunctionComponent<{
  className?: string;
  interval?: number;
  itemId?: number;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

interface AccordionProps extends BaseComponent {
  alwaysOpen?: boolean;
  flush?: boolean;
  initialActive?: number;
  onChange?: (id: number) => void;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  tag?: React__default.ComponentProps<any>;
}

declare const MDBAccordion: React$1.FunctionComponent<AccordionProps>;

interface AccordionItemProps extends BaseComponent {
  bodyClassName?: string;
  bodyStyle?: React__default.CSSProperties;
  collapseId: number;
  headerClassName?: string;
  headerStyle?: React__default.CSSProperties;
  headerTitle?: React__default.ReactNode;
  ref?: React__default.ForwardedRef<HTMLAllCollection>;
  tag?: React__default.ComponentProps<any>;
}

declare const MDBAccordionItem: React$1.FunctionComponent<AccordionItemProps>;

declare type TextAreaElement = Omit<
  React__default.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size" | "value" | "defaultValue"
>;
declare type TextAreaProps = TextAreaElement & {
  contrast?: boolean;
  defaultValue?: string;
  label?: React__default.ReactNode;
  labelStyle?: React__default.CSSProperties;
  labelClass?: string;
  labelRef?: React__default.MutableRefObject<any>;
  inputRef?: React__default.MutableRefObject<any>;
  readonly?: boolean;
  size?: string;
  textarea?: boolean;
  value?: string;
  wrapperTag?: React__default.ComponentProps<any>;
  wrapperClass?: string;
  wrapperStyle?: Record<string, unknown>;
};

declare const MDBTextArea: React$1.FunctionComponent<TextAreaProps>;

interface ValidationItemProps extends BaseComponent {
  tag?: React__default.ComponentProps<any>;
  invalid?: boolean;
  feedback?: React__default.ReactNode;
  tooltip?: boolean;
}

declare const MDBValidationItem: React$1.FunctionComponent<ValidationItemProps>;

interface SelectIcon {
  src?: string;
  className?: string;
  text?: string;
}
declare type SelectData$1 = {
  disabled?: boolean;
  className?: string;
  text: string;
  height?: string | number;
  selected?: boolean;
  secondaryText?: React.ReactNode;
  value?: string | number;
  style?: React.CSSProperties;
  revert?: boolean;
  icon?: SelectIcon | React.ComponentProps<any>;
  active?: boolean;
};
interface SelectProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "size" | "data"> {
  clearBtn?: boolean;
  data: SelectData$1[];
  invalidFeedback?: string;
  inputClassName?: string;
  noResultLabel?: string;
  optionSelected?: string;
  optionsSelectedLabel?: string;
  searchAriaLabel?: string;
  search?: boolean;
  searchLabel?: string;
  selectAllLabel?: string;
  size?: "default" | "lg" | "sm";
  ref?: React.Ref<any>;
  tag?: React.ComponentProps<any>;
  tagWrapper?: React.ComponentProps<any>;
  validation?: boolean;
  validFeedback?: string;
  visibleOptions?: number | string;
  getData?: (e: SelectData$1[]) => void;
  getValue?: (e: SelectData$1) => void;
}

declare const MDBSelect: React$1.FunctionComponent<SelectProps>;

interface ScrollbarProps extends Omit<ScrollBarProps, "options"> {
  tag?: React__default.ComponentProps<any>;
  sidenav?: boolean;
  handlers?: string[];
  wheelSpeed?: number;
  wheelPropagation?: boolean;
  swipeEasing?: boolean;
  minScrollbarLength?: number;
  maxScrollbarLength?: number;
  scrollingThreshold?: number;
  useBothWheelAxes?: boolean;
  suppressScrollX?: boolean;
  suppressScrollY?: boolean;
  scrollXMarginOffset?: number;
  scrollYMarginOffset?: number;
  scrollBarRef?: any;
}

declare const MDBScrollbar: React$1.FunctionComponent<ScrollbarProps>;

interface SideNavProps extends BaseComponent {
  color?: backgroundColor;
  bgColor?: string;
  isOpen?: boolean;
  light?: boolean;
  relative?: boolean;
  absolute?: boolean;
  right?: boolean;
  slim?: boolean;
  slimCollapsed?: boolean;
  backdrop?: boolean;
  mode?: "over" | "side" | "push" | string;
  accordion?: boolean;
  closeOnEsc?: boolean;
  constant?: boolean;
  contentRef?: HTMLElement;
  getOpenState?: React.Dispatch<React.SetStateAction<any>>;
  onShow?: () => void;
  onHide?: () => void;
  onExpand?: () => void;
  onCollapse?: () => void;
}

declare const MDBSideNav: React$1.FunctionComponent<SideNavProps>;

interface SideNavMenuProps extends BaseComponent {
  ref?: React.Ref<any>;
}

declare const MDBSideNavMenu: React$1.FunctionComponent<SideNavMenuProps>;

interface SideNavItemProps extends BaseComponent {
  ref?: React.Ref<any>;
}

declare const MDBSideNavItem: React$1.FunctionComponent<SideNavItemProps>;

interface SideNavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  iconAngle?: number;
  shouldBeExpanded?: boolean;
  active?: boolean;
  icon?: string;
  iconClasses?: string;
  ref?: React.Ref<any>;
}

declare const MDBSideNavLink: React$1.FunctionComponent<SideNavLinkProps>;

declare const MDBSideNavCollapse: typeof MDBCollapse;

interface ModalDialogProps$1 extends BaseComponent {
  centered?: boolean;
  size?:
    | "sm"
    | "lg"
    | "xl"
    | "fullscreen"
    | "fullscreen-sm-down"
    | "fullscreen-md-down"
    | "fullscreen-lg-down"
    | "fullscreen-xl-down"
    | "fullscreen-xxl-down";
  scrollable?: boolean;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

interface ModalDialogProps extends ModalDialogProps$1 {
  frame?: boolean;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top"
    | "bottom";
  side?: boolean;
}

declare const MDBModalDialog: React$1.FunctionComponent<ModalDialogProps>;

declare const AnimationProps: React$1.FunctionComponent<AnimationProps>;

declare type TimepickerProps = {
  btnIcon?: boolean;
  customValue?: string;
  className?: string;
  clearLabel?: string;
  customIconSize?: string;
  customIcon?: string;
  cancelLabel?: string;
  defaultValue?: string;
  inputLabel?: string;
  inputClasses?: string;
  invalidLabel?: string;
  inline?: boolean;
  increment?: boolean;
  format?: "24h" | "12h";
  justInput?: boolean;
  noIcon?: boolean;
  minHour?: number;
  maxHour?: number;
  maxTime?: string;
  minTime?: string;
  onChange?: (value: string) => void;
  showRef?: React.RefObject<any>;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  submitLabel?: string;
  ref?: React.ForwardedRef<HTMLDivElement>;
  timePickerClasses?: string;
  inlinePickerTag?: React.ComponentProps<any>;
  onOpen?: () => void;
  onClose?: () => void;
  [rest: string]: any;
};

declare const MDBTimepicker: React$1.FunctionComponent<TimepickerProps>;

interface DatepickerProps extends BaseComponent {
  cancelBtnText?: string;
  clearBtnText?: ReactNode;
  customIcon?: string;
  defaultValue?: string;
  icon?: string;
  inputLabel?: ReactNode;
  inputToggle?: boolean;
  inline?: boolean;
  format?: string;
  filter?: (date: Date) => boolean;
  min?: Date;
  max?: Date;
  monthsShort?: Array<string>;
  monthsFull?: Array<string>;
  okBtnText?: ReactNode;
  startDay?: number;
  title?: string;
  views?: "days" | "months" | "years";
  weekdaysShort?: Array<string>;
  weekdaysNarrow?: Array<string>;
  weekdaysFull?: Array<string>;
  onChange?: (value: string, date: Date) => void;
  onClose?: () => void;
  onOpen?: () => void;
  value?: string;
  wrapperClass?: string;
  [rest: string]: any;
}

declare const MDBDatepicker: React$1.FunctionComponent<DatepickerProps>;

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
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  show?: boolean;
  stacking?: boolean;
  triggerRef?: React.MutableRefObject<any>;
  width?: number | string;
}

declare const MDBAlert: React$1.FunctionComponent<AlertProps>;

interface ToastProps extends React.HTMLAttributes<HTMLElement> {
  appendToBody?: boolean;
  autohide?: boolean;
  bodyClasses?: string;
  bodyContent?: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "dark"
    | "info";
  containerRef?: React.MutableRefObject<any>;
  delay?: number;
  closeBtnClasses?: string;
  headerClasses?: string;
  headerContent?: React.ReactNode;
  offset?: number;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  show?: boolean;
  stacking?: boolean;
  triggerRef?: React.MutableRefObject<any>;
  toastRef?: React.MutableRefObject<any>;
  whiteCloseBtn?: boolean;
  width?: number | string;
  onShow?: () => any;
  onHide?: () => any;
}

declare const MDBToast: React$1.FunctionComponent<ToastProps>;

interface DatatableProps extends BaseComponent {
  advancedSearch?: (value: string) => {
    phrase: string;
    columns: string | Array<string>;
  };
  advancedData?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  borderColor?: string;
  clickableRows?: (row: any) => any;
  color?: string;
  data: any;
  datatableRef?: React.RefObject<any>;
  dark?: boolean;
  entries?: number;
  entriesOptions?: Array<number>;
  fixedHeader?: boolean;
  fullPagination?: boolean;
  hover?: boolean;
  format?: (field: string | number | symbol, value: number) => any;
  loaderClass?: string;
  loading?: boolean;
  loadingMessage?: React.ReactNode;
  maxWidth?: string;
  maxHeight?: string;
  multi?: boolean;
  noFoundMessage?: React.ReactNode;
  pagination?: boolean;
  selectable?: boolean;
  selectedRows?: Array<any>;
  setSelectedRows?: React.SetStateAction<any>;
  sm?: boolean;
  rowsText?: string;
  searchInputProps?: Record<string, unknown>;
  striped?: boolean;
  sortField?: string;
  sortOrder?: string;
  search?: boolean;
  tag?: React.ComponentProps<any>;
  onSelectRows?: (selectedRows?: Array<any>) => void;
  onRowClick?: (row: any) => void;
}

declare const MDBDatatable: React$1.FunctionComponent<DatatableProps>;

interface ChartProps extends BaseComponent {
  type:
    | "bar"
    | "line"
    | "pie"
    | "doughnut"
    | "polarArea"
    | "radar"
    | "bubble"
    | "scatter";
  options?: Record<string, unknown>;
  chartRef?: React.Ref<any>;
  datalabels?: boolean;
  data?: any;
}

declare const MDBChart: React$1.FunctionComponent<ChartProps>;

interface StepperProps extends BaseComponent {
  disableHeadSteps?: boolean;
  defaultStep?: number;
  externalNext?: React__default.MutableRefObject<any> | null;
  externalPrev?: React__default.MutableRefObject<any> | null;
  linear?: boolean;
  mobileOfLabel?: React__default.ReactNode;
  mobileStepLabel?: React__default.ReactNode;
  mobileBackLabel?: React__default.ReactNode;
  mobileNextLabel?: React__default.ReactNode;
  mobileProgress?: boolean;
  noEditable?: boolean;
  type?: "horizontal" | "vertical" | "mobile";
  onValid?: (id: number) => void;
  onInvalid?: (id: number) => void;
  onChange?: (id: number) => void;
}

declare const MDBStepper: React$1.FunctionComponent<StepperProps>;

interface StepperStepProps extends BaseComponent {
  customValidation?: (input: HTMLInputElement) => boolean;
  headClassName?: string;
  contentClassName?: string;
  headStyle?: React__default.CSSProperties;
  contentStyle?: React__default.CSSProperties;
  itemId: number;
  headIcon?: React__default.ReactNode;
  headText?: React__default.ReactNode;
}

declare const MDBStepperStep: React$1.FunctionComponent<StepperStepProps>;

declare type StepperFormProps = ValidationProps;

declare const MDBStepperForm: React$1.FunctionComponent<StepperFormProps>;

interface RatingProps {
  className?: string;
  defaultValue?: number;
  dynamic?: boolean;
  readonly?: boolean;
  onChange?: (value: number) => void;
  style?: React.CSSProperties;
  [rest: string]: any;
}

declare const MDBRating: React$1.FunctionComponent<RatingProps>;

interface RatingElementProps
  extends React__default.LiHTMLAttributes<HTMLLIElement> {
  itemId: number;
  icon?: string;
  iconClassName?: string;
  insertAfter?: React__default.ReactNode;
  insertBefore?: React__default.ReactNode;
  popover?: React__default.ReactNode;
  size?: "sm" | "lg";
}

declare const MDBRatingElement: React$1.FunctionComponent<RatingElementProps>;

interface TouchProps extends BaseComponent {
  allDirections?: boolean;
  duration?: number;
  interval?: number;
  onSwipe?: (
    e: any,
    params: {
      direction: string;
    }
  ) => void;
  onSwipeLeft?: (e: any) => void;
  onSwipeRight?: (e: any) => void;
  onSwipeUp?: (e: any) => void;
  onSwipeDown?: (e: any) => void;
  onPan?: (e: any) => void;
  onPanLeft?: (e: any) => void;
  onPanRight?: (e: any) => void;
  onPanUp?: (e: any) => void;
  onPanDown?: (e: any) => void;
  onPinch?: (
    e: any,
    params: {
      ratio: number | null;
      origin:
        | {
            x: number;
            y: number;
          }
        | Record<string, any>;
    }
  ) => void;
  onRotate?: (
    e: any,
    result: {
      currentAngle: number;
      distance: number;
      change: number;
    }
  ) => void;
  onTap?: (data: any) => void;
  onPress?: (e: any, time?: number) => void;
  pointers?: number;
  taps?: number;
  tag?: React__default.ComponentProps<any>;
  touchRef?: React__default.RefObject<any>;
  threshold?: number;
  type?: "swipe" | "tap" | "press" | "pinch" | "rotate" | "pan";
}

declare const MDBTouch: React$1.FunctionComponent<TouchProps>;

declare type imgProps$1 = React__default.ImgHTMLAttributes<HTMLImageElement>;
declare type videoProps$1 =
  React__default.VideoHTMLAttributes<HTMLVideoElement>;
declare type LazyLoadingProps = imgProps$1 &
  videoProps$1 & {
    animation?: animation | "none";
    containerRef?: React__default.RefObject<any>;
    lazyRef?: React__default.RefObject<any>;
    lazyOffset?: number;
    lazySrc?: string;
    lazyError?: string;
    lazyDelay?: number;
    lazyPlaceholder?: string;
    video?: boolean;
    onLoad?: () => any;
    onError?: (error?: string) => any;
  };

declare const MDBLazyLoading: React$1.FunctionComponent<LazyLoadingProps>;

declare type imgProps = React__default.ImgHTMLAttributes<HTMLImageElement>;
declare type videoProps = React__default.VideoHTMLAttributes<HTMLVideoElement>;
interface LazyContainerProps extends BaseComponent {
  lazyContainerRef?: React__default.MutableRefObject<any>;
  lazyItems: Array<React__default.ImgHTMLAttributes<imgProps & videoProps>>;
  lazyPlaceholder?: string;
  lazyError?: string;
}

declare const MDBLazyContainer: React$1.FunctionComponent<LazyContainerProps>;

interface InfiniteScrollProps extends BaseComponent {
  infiniteDirection?: string;
  infiniteScrollRef?: React__default.RefObject<any>;
  onInfiniteScroll?: () => any;
  onComplete?: () => any;
  tag?: React__default.ComponentProps<any>;
  windowParent?: boolean;
}

declare const MDBInfiniteScroll: React$1.FunctionComponent<InfiniteScrollProps>;

declare type animationList$1 =
  | "fade-in"
  | "fade-in-down"
  | "fade-in-left"
  | "fade-in-right"
  | "fade-in-up"
  | "fade-out"
  | "fade-out-down"
  | "fade-out-left"
  | "fade-out-right"
  | "fade-out-up"
  | "slide-in-down"
  | "slide-in-left"
  | "slide-in-right"
  | "slide-in-up"
  | "slide-out-down"
  | "slide-out-left"
  | "slide-out-right"
  | "slide-out-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "slide-up"
  | "zoom-in"
  | "zoom-out"
  | "tada"
  | "pulse"
  | "drop-in"
  | "drop-out"
  | "fly-in"
  | "fly-in-up"
  | "fly-in-down"
  | "fly-in-left"
  | "fly-in-right"
  | "fly-out"
  | "fly-out-up"
  | "fly-out-down"
  | "fly-out-left"
  | "fly-out-right"
  | "browse-in"
  | "browse-out"
  | "browse-out-left"
  | "browse-out-right"
  | "jiggle"
  | "flash"
  | "shake"
  | "glow";
interface StickyProps extends BaseComponent {
  animationSticky?: animationList$1;
  animationUnsticky?: animationList$1;
  boundary?: React__default.RefObject<null> | boolean;
  delay?: number;
  direction?: "up" | "down" | "both";
  offset?: number;
  position?: "top" | "bottom";
  stickyRef?: React__default.RefObject<any>;
  onInactive?: () => any;
  onActive?: () => any;
  tag?: React__default.ComponentProps<any>;
}

declare const MDBSticky: React$1.FunctionComponent<StickyProps>;

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

declare const MDBLoadingManagement: React$1.FunctionComponent<LoadingManagementProps>;

declare type AutocompleteProps = Omit<InputProps, "onSelect" | "value"> & {
  customContent?: React__default.ReactNode;
  dataFilter: (value: string) => any;
  displayValue?: (value: any) => any;
  itemContent?: (value: any) => React__default.ReactNode;
  getFilteredData?: (data: Array<any>) => any;
  listHeight?: number;
  noResults?: string;
  onSelect?: (value: any) => any;
  onUpdate?: (data: any) => any;
  onClose?: () => any;
  onOpen?: () => any;
  threshold?: number;
  tag?: React__default.ComponentProps<any>;
};

declare const MDBAutocomplete: React$1.FunctionComponent<AutocompleteProps>;

declare const MDBPopconfirm: React$1.FunctionComponent<{
  className?: string;
  btnClassName?: string;
  btnChildren?: any;
  confirmBtnText?: string;
  cancelBtnText?: string;
  isOpen?: boolean;
  modal?: boolean;
  onClick?: any;
  placement?: string;
  popperTag?: React$1.ComponentProps<any>;
  setIsOpen?: React$1.SetStateAction<any>;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBPopconfirmMessage: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

interface SmoothScrollProps
  extends React__default.AnchorHTMLAttributes<HTMLAnchorElement> {
  containerRef?: React__default.RefObject<any>;
  duration?: number;
  easing?:
    | "motionLinear"
    | "motionEaseInQuad"
    | "motionEaseInCubic"
    | "motionEaseInQuart"
    | "motionEaseInQuint"
    | "motionEaseInOutQuad"
    | "motionEaseInOutCubic"
    | "motionEaseInOutQuart"
    | "motionEaseInOutQuint"
    | "motionEaseOutQuad"
    | "motionEaseOutCubic"
    | "motionEaseOutQuart"
    | "motionEaseOutQuint";
  offset?: number;
  targetRef?: React__default.RefObject<any>;
}

declare const MDBSmoothScroll: React$1.FunctionComponent<SmoothScrollProps>;

interface LightboxProps extends BaseComponent {
  fontAwesome?: "pro" | "free";
  zoomLevel?: number;
  lightboxRef?: React__default.MutableRefObject<any>;
  tag?: React__default.ComponentProps<any>;
  onOpen?: () => void;
  onClose?: () => void;
  onSlide?: () => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
}

declare const MDBLightbox: React$1.FunctionComponent<LightboxProps>;

interface LightboxItemProps
  extends React__default.ImgHTMLAttributes<HTMLImageElement> {
  fullscreenSrc?: string;
  disabled?: boolean;
  caption?: string;
  ref?: React__default.Ref<any>;
}

declare const MDBLightboxItem: React$1.FunctionComponent<LightboxItemProps>;

declare const MDBAnimatedNavbar: typeof MDBNavbar;

interface ChipProps extends React__default.HTMLAttributes<HTMLElement> {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "dark"
    | "info";
  chipRef?: React__default.RefObject<any>;
  closeIcon?: boolean;
  size?: "sm" | "md" | "lg";
  tag?: React__default.ComponentProps<any>;
  onDelete?: (name?: React__default.ReactNode) => any;
}

declare const MDBChip: React$1.FunctionComponent<ChipProps>;

declare const MDBChipsInput: React$1.FunctionComponent<{
  className?: string;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  wrapperClass?: string;
  [rest: string]: any;
}>;

declare type MultiRangeProps = {
  className?: string;
  defaultValues?: {
    first?: number;
    second?: number;
  };
  getValues?: (values: { first?: number; second?: number }) => void;
  min?: string | number;
  max?: string | number;
  step?: string;
  tooltips?: boolean;
};

declare const MDBMultiRange: React__default.FunctionComponent<MultiRangeProps>;

declare type SelectData = {
  disabled?: boolean;
  text?: string;
  defaultSelected?: boolean;
  secondaryText?: React__default.ReactNode;
  value?: string | number;
  icon?: string;
  active?: boolean;
};
interface SelectV2Props
  extends Omit<React__default.AllHTMLAttributes<HTMLElement>, "size" | "data"> {
  clearBtn?: boolean;
  disabled?: boolean;
  label?: string;
  optionHeight?: number;
  data: SelectData[];
  inputClassName?: string;
  ref?: React__default.Ref<any>;
  visibleOptions?: number;
  multiple?: boolean;
  optionsSelectedLabel?: string;
  displayedLabels?: number;
  selectAll?: boolean;
  selectAllLabel?: string;
  size?: "sm" | "lg";
  contrast?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onValueChange?: (data: SelectData[] | SelectData) => void;
  search?: boolean;
  searchLabel?: string;
  autoSelect?: boolean;
  noResultsText?: string;
  toggleElement?: React__default.MutableRefObject<any>;
  validation?: boolean;
  validFeedback?: string;
  invalidFeedback?: string;
}

declare const MDBSelectV2: React$1.FunctionComponent<SelectV2Props>;

declare type animationList =
  | "fade-in"
  | "fade-in-down"
  | "fade-in-left"
  | "fade-in-right"
  | "fade-in-up"
  | "fade-out"
  | "fade-out-down"
  | "fade-out-left"
  | "fade-out-right"
  | "fade-out-up"
  | "slide-in-down"
  | "slide-in-left"
  | "slide-in-right"
  | "slide-in-up"
  | "slide-out-down"
  | "slide-out-left"
  | "slide-out-right"
  | "slide-out-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "slide-up"
  | "zoom-in"
  | "zoom-out"
  | "tada"
  | "pulse"
  | "drop-in"
  | "drop-out"
  | "fly-in"
  | "fly-in-up"
  | "fly-in-down"
  | "fly-in-left"
  | "fly-in-right"
  | "fly-out"
  | "fly-out-up"
  | "fly-out-down"
  | "fly-out-left"
  | "fly-out-right"
  | "browse-in"
  | "browse-out"
  | "browse-out-left"
  | "browse-out-right"
  | "jiggle"
  | "flash"
  | "shake"
  | "glow";
interface useStickyRefProps {
  animationSticky?: animationList;
  animationUnsticky?: animationList;
  boundary?: React__default.RefObject<null> | boolean;
  delay?: number;
  direction?: "up" | "down" | "both";
  offset?: number;
  position?: "top" | "bottom";
  stickyRef?: React__default.RefObject<any>;
}

declare const useStickyRef: (props: useStickyRefProps) => any;

interface useAnimatedRefProps {
  animation?:
    | "fade-in"
    | "fade-in-down"
    | "fade-in-left"
    | "fade-in-right"
    | "fade-in-up"
    | "fade-out"
    | "fade-out-down"
    | "fade-out-left"
    | "fade-out-right"
    | "fade-out-up"
    | "slide-in-down"
    | "slide-in-left"
    | "slide-in-right"
    | "slide-in-up"
    | "slide-out-down"
    | "slide-out-left"
    | "slide-out-right"
    | "slide-out-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "slide-up"
    | "zoom-in"
    | "zoom-out"
    | "tada"
    | "pulse"
    | "drop-in"
    | "drop-out"
    | "fly-in"
    | "fly-in-up"
    | "fly-in-down"
    | "fly-in-left"
    | "fly-in-right"
    | "fly-out"
    | "fly-out-up"
    | "fly-out-down"
    | "fly-out-left"
    | "fly-out-right"
    | "browse-in"
    | "browse-out"
    | "browse-out-left"
    | "browse-out-right"
    | "jiggle"
    | "flash"
    | "shake"
    | "glow";
  delay?: number;
  duration?: number;
  infinite?: boolean;
  reset?: boolean;
  repeatOnScroll?: boolean;
  start?: StartType;
  externalElement?: RefObject<any>;
}
declare type StartType = "onLoad" | "onHover" | "onClick" | "onScroll";

declare const useAnimatedRef: (props: useAnimatedRefProps) => any;

export {
  MDBAccordion,
  MDBAccordionItem,
  MDBAlert,
  MDBAnimatedNavbar,
  AnimationProps as MDBAnimation,
  MDBAutocomplete,
  MDBBadge,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardGroup,
  MDBCardHeader,
  MDBCardImage,
  MDBCardLink,
  MDBCardOverlay,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselElement,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBChart,
  MDBCheckbox,
  MDBChip,
  MDBChipsInput,
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBDatatable,
  MDBDatepicker,
  MDBDropdown,
  MDBDropdownDivider,
  MDBDropdownHeader,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBFile,
  MDBFooter,
  MDBIcon,
  MDBInfiniteScroll,
  MDBInput,
  MDBInputGroup,
  MDBLazyContainer,
  MDBLazyLoading,
  MDBLightbox,
  MDBLightboxItem,
  MDBListGroup,
  MDBListGroupItem,
  MDBLoadingManagement,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBMultiRange,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBPopconfirm,
  MDBPopconfirmMessage,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBProgress,
  MDBProgressBar,
  MDBRadio,
  MDBRange,
  MDBRating,
  MDBRatingElement,
  MDBRipple,
  MDBRow,
  MDBScrollbar,
  MDBScrollspy,
  MDBScrollspyNavLink as MDBScrollspyLink,
  MDBScrollspySubList,
  MDBSelectV2 as MDBSelect,
  MDBSelect as MDBSelectDeprecated,
  MDBSideNav,
  MDBSideNavCollapse,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavMenu,
  MDBSmoothScroll,
  MDBSpinner,
  MDBStepper,
  MDBStepperForm,
  MDBStepperStep,
  MDBSticky,
  MDBSwitch,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBTextArea,
  MDBTimepicker,
  MDBToast,
  MDBTooltip,
  MDBTouch,
  MDBTypography,
  MDBValidation,
  MDBValidationItem,
  useAnimatedRef,
  useStickyRef,
};
