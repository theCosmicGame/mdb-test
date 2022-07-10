import * as React from 'react';
import React__default from 'react';

interface RatingElementProps extends React__default.LiHTMLAttributes<HTMLLIElement> {
    itemId: number;
    icon?: string;
    iconClassName?: string;
    insertAfter?: React__default.ReactNode;
    insertBefore?: React__default.ReactNode;
    popover?: React__default.ReactNode;
    size?: 'sm' | 'lg';
}

declare const MDBRatingElement: React.FunctionComponent<RatingElementProps>;

export { MDBRatingElement as default };
