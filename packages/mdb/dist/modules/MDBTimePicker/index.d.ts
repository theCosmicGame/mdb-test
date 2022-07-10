import * as React$1 from 'react';

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
    format?: '24h' | '12h';
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

export { MDBTimepicker as default };
