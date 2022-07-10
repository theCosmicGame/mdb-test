import * as React from 'react';
import { ReactNode } from 'react';
import { BaseComponent } from 'src/types/baseComponent';

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
    views?: 'days' | 'months' | 'years';
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

declare const MDBDatepicker: React.FunctionComponent<DatepickerProps>;

export { MDBDatepicker as default };
