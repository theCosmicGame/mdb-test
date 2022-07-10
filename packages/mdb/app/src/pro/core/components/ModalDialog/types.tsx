import { ModalDialogProps as ModalDialogFree } from '../../../../free/core/components/Modal/ModalDialog/types';

interface ModalDialogProps extends ModalDialogFree {
  frame?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom';
  side?: boolean;
}

export { ModalDialogProps };
