import * as React$1 from 'react';

interface RatingProps {
    className?: string;
    defaultValue?: number;
    dynamic?: boolean;
    readonly?: boolean;
    onChange?: (value: number) => void;
    style?: React.CSSProperties;
    [rest: string]: any;
}

declare const MDBRating: React$1.FunctionComponent<RatingProps>;

export { MDBRating as default };
