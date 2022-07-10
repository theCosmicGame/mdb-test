import * as React from 'react';
import React__default from 'react';
import { BaseComponent } from 'src/types/baseComponent';

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
    type?: 'horizontal' | 'vertical' | 'mobile';
    onValid?: (id: number) => void;
    onInvalid?: (id: number) => void;
    onChange?: (id: number) => void;
}

declare const MDBStepper: React.FunctionComponent<StepperProps>;

export { MDBStepper as default };
