import React, { useContext } from 'react';
import type { DropdownItemProps } from './types';
import { DropdownContext } from '../context';
import './style.css';

const MDBDropdownItem: React.FC<DropdownItemProps> = ({
  onClick,
  tag: Tag,
  children,
  style,
  ...props
}): JSX.Element => {
  const { activeIndex, handleClose } = useContext(DropdownContext);

  const handleClickItem = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    handleClose();
    onClick && onClick(e);
  };

  return (
    <Tag {...props} style={{ ...style, cursor: 'pointer' }} onClick={handleClickItem}>
      {React.Children.map(children, (child: any, index) => {
        return React.cloneElement(child, { 'data-active': activeIndex === index, 'data-index': index });
      })}
    </Tag>
  );
};

MDBDropdownItem.defaultProps = {
  tag: 'li',
};

export default MDBDropdownItem;
