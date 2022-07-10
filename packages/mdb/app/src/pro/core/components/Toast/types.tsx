interface ToastProps extends React.HTMLAttributes<HTMLElement> {
  appendToBody?: boolean;
  autohide?: boolean;
  bodyClasses?: string;
  bodyContent?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'info';
  containerRef?: React.MutableRefObject<any>;
  delay?: number;
  closeBtnClasses?: string;
  headerClasses?: string;
  headerContent?: React.ReactNode;
  offset?: number;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  show?: boolean;
  stacking?: boolean;
  triggerRef?: React.MutableRefObject<any>;
  toastRef?: React.MutableRefObject<any>;
  whiteCloseBtn?: boolean;
  width?: number | string;
  onShow?: () => any;
  onHide?: () => any;
}

export { ToastProps };
