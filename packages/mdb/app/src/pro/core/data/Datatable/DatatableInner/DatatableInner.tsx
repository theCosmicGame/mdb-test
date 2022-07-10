import clsx from 'clsx';
import React from 'react';
import type { DatatableInnerProps } from './types';
import MDBScrollbar from '../../../methods/PerfectScrollbar/PerfectScrollbar';

const MDBDatatableInner: React.FC<DatatableInnerProps> = ({ className, maxWidth, maxHeight, children, ...props }) => {
  const classes = clsx('datatable-inner', 'table-responsive', 'ps', className);

  return (
    <MDBScrollbar
      style={{ overflow: 'auto', position: 'relative', width: maxWidth, height: maxHeight }}
      className={classes}
      {...props}
    >
      {children}
    </MDBScrollbar>
  );
};

MDBDatatableInner.defaultProps = {};

export default MDBDatatableInner;
