import clsx from 'clsx';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import type { DropdownMenuProps } from './types';
import { DropdownContext } from '../context';
import './style.css';
import MDBDropdownItem from '../DropdownItem/DropdownItem';
import ReactDOM from 'react-dom';

const MDBDropdownMenu: React.FC<DropdownMenuProps> = ({
  className,
  tag: Tag,
  children,
  style,
  dark,
  responsive,
  ...props
}): JSX.Element => {
  const {
    activeIndex,
    setPopperElement,
    isOpenState,
    styles,
    animatedFadeIn,
    animatedFadeOut,
    animation,
    getCount,
    handleOpenClose,
  } = useContext(DropdownContext);

  const classes = clsx(
    'dropdown-menu',
    dark && 'dropdown-menu-dark',
    isOpenState && 'show',
    animation && 'animation',
    animatedFadeIn && 'fade-in',
    animatedFadeOut && 'fade-out',
    responsive && `dropdown-menu-${responsive}`,
    className
  );
  const [attachELements, setAttachELements] = useState(false);
  const [count, setCount] = useState(0);
  const [childrenLength, setChildrenLength] = useState<number>(-1);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (!isOpenState) {
      timer = setTimeout(() => {
        setAttachELements(false);
      }, 300);
    } else {
      const child = React.Children.count(children);

      setChildrenLength(child);
      setAttachELements(true);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [children, isOpenState]);

  const handleDown = useCallback(
    (e: any) => {
      if (attachELements) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();

          setCount(count - 1);

          if (count <= 0) {
            setCount(childrenLength - 1);
          }
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault();

          setCount(count + 1);

          if (count === childrenLength - 1) {
            setCount(0);
          }
        }
        if (e.key === 'Escape' || e.key === 'Enter') {
          setAttachELements(false);
          handleOpenClose();
        }
      }
    },
    [attachELements, childrenLength, handleOpenClose, count]
  );

  useEffect(() => {
    if (attachELements) {
      getCount(count);
    }
  }, [count, attachELements, getCount]);

  useEffect(() => {
    if (attachELements) {
      document.addEventListener('keydown', handleDown);
    }
    return () => {
      document.removeEventListener('keydown', handleDown);
    };
  }, [attachELements, handleDown]);

  return attachELements ? (
    <>
      {ReactDOM.createPortal(
        <Tag
          className={classes}
          style={{ position: 'absolute', zIndex: 1000, ...styles.popper, ...style }}
          {...props}
          ref={setPopperElement}
          tabIndex={-1}
        >
          {React.Children.map(children, (child: any, index) => {
            if (child?.type === MDBDropdownItem) {
              return React.cloneElement(child, {
                tabIndex: 0,
                'data-active': activeIndex === index && true,
                'data-index': index,
                className: activeIndex === index ? 'active' : '',
              });
            } else {
              return child;
            }
          })}
        </Tag>,
        document.body
      )}
    </>
  ) : (
    <></>
  );
};

MDBDropdownMenu.defaultProps = {
  tag: 'ul',
  responsive: '',
};

export default MDBDropdownMenu;
