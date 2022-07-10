import * as React from 'react';
import React__default from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface InfiniteScrollProps extends BaseComponent {
    infiniteDirection?: string;
    infiniteScrollRef?: React__default.RefObject<any>;
    onInfiniteScroll?: () => any;
    onComplete?: () => any;
    tag?: React__default.ComponentProps<any>;
    windowParent?: boolean;
}

declare const MDBInfiniteScroll: React.FunctionComponent<InfiniteScrollProps>;

export { MDBInfiniteScroll as default };
