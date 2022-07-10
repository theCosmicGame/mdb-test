import * as React from 'react';
import React__default from 'react';

declare type InputELement = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'size'>;
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

declare type AutocompleteProps = Omit<InputProps, 'onSelect' | 'value'> & {
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

declare const MDBAutocomplete: React.FunctionComponent<AutocompleteProps>;

export { MDBAutocomplete as default };
