import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface StepperProps extends BaseComponent {
  disableHeadSteps?: boolean;
  defaultStep?: number;
  externalNext?: React.MutableRefObject<any> | null;
  externalPrev?: React.MutableRefObject<any> | null;
  linear?: boolean;
  mobileOfLabel?: React.ReactNode;
  mobileStepLabel?: React.ReactNode;
  mobileBackLabel?: React.ReactNode;
  mobileNextLabel?: React.ReactNode;
  mobileProgress?: boolean;
  noEditable?: boolean;
  type?: 'horizontal' | 'vertical' | 'mobile';
  onValid?: (id: number) => void;
  onInvalid?: (id: number) => void;
  onChange?: (id: number) => void;
}

export { StepperProps };
