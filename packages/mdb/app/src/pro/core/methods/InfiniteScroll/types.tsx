import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface InfiniteScrollProps extends BaseComponent {
  infiniteDirection?: string;
  infiniteScrollRef?: React.RefObject<any>;
  onInfiniteScroll?: () => any;
  onComplete?: () => any;
  tag?: React.ComponentProps<any>;
  windowParent?: boolean;
}

export { InfiniteScrollProps };
