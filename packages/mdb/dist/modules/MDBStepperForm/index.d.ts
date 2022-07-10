import * as React from 'react';
import React__default from 'react';

declare type ValidationProps = React__default.FormHTMLAttributes<HTMLFormElement> & {
    isValidated?: boolean;
    ref?: React__default.Ref<any>;
};

declare type StepperFormProps = ValidationProps;

declare const MDBStepperForm: React.FunctionComponent<StepperFormProps>;

export { MDBStepperForm as default };
