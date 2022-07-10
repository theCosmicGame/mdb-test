import clsx from 'clsx';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { LoadingManagementProps } from './types';
import MDBSpinner from '../../../../free/core/components/Spinner/Spinner';

const MDBLoadingManagement: React.FC<LoadingManagementProps> = React.forwardRef<
  HTMLAllCollection,
  LoadingManagementProps
>(
  (
    {
      backdrop,
      backdropColor,
      backdropOpacity,
      color,
      className,
      loadingText,
      isOpen,
      fullScreen,
      overflow,
      parentRef,
      spinnerElement,
      textClassName,
      textStyles,
      tag: Tag,
      ...props
    },
    ref
  ) => {
    const textClasses = clsx('loading-text', textClassName);
    const classes = clsx(
      fullScreen ? 'loading-full' : 'loading',
      'loading-spinner',
      fullScreen ? 'position-fixed' : 'position-absolute',
      color && `text-${color}`,
      className
    );
    const backdropClasses = clsx('loading-backdrop', !fullScreen && 'position-absolute');

    useEffect(() => {
      const parentElement = parentRef?.current;
      if (parentElement) {
        parentElement.classList.add('position-relative');

        return () => {
          parentElement.classList.remove('position-relative');
        };
      }
    }, [parentRef]);

    useEffect(() => {
      if (fullScreen && overflow) {
        isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');

        return () => {
          document.body.style.overflow = '';
        };
      }
    }, [fullScreen, isOpen, overflow]);

    const loadingElement = (
      <Tag className={classes} ref={ref} {...props}>
        {spinnerElement}
        <span className={textClasses} style={textStyles}>
          {loadingText}
        </span>
      </Tag>
    );

    const backdropElement = (
      <div className={backdropClasses} style={{ opacity: backdropOpacity, backgroundColor: backdropColor }}></div>
    );

    return (
      <>
        {isOpen !== false && (
          <>
            {fullScreen ? (
              ReactDOM.createPortal(
                <>
                  {loadingElement}
                  {backdropElement}
                </>,
                document.body
              )
            ) : (
              <>
                {loadingElement}
                {backdrop && backdropElement}
              </>
            )}
          </>
        )}
      </>
    );
  }
);

MDBLoadingManagement.defaultProps = {
  tag: 'div',
  backdrop: true,
  loadingText: 'Loading...',
  backdropColor: 'black',
  backdropOpacity: 0.4,
  spinnerElement: <MDBSpinner className='loading-icon' role='status' />,
  overflow: true,
};

export default MDBLoadingManagement;
