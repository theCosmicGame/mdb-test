import * as React from 'react';
import React__default from 'react';
import { BaseComponent } from 'src/types/baseComponent';

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

declare const MDBStepperStep: React.FunctionComponent<StepperStepProps>;

export { MDBStepperStep as default };
