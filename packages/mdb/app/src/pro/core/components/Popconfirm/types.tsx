import { ButtonProps } from '../../../../free/core/components/Button/types';

interface PopconfirmProps extends ButtonProps {
  btnClassName?: string;
  btnChildren?: React.ReactNode;
  confirmBtnText?: React.ReactNode;
  cancelBtnText?: React.ReactNode;
  cancelBtnClasses?: string;
  confirmBtnClasses?: string;
  modal?: boolean;
  options?: Record<string, unknown>;
  onConfirm?: (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => void;
  placement?:
    | 'top'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
  popperTag?: React.ComponentProps<any>;
}

export { PopconfirmProps };
