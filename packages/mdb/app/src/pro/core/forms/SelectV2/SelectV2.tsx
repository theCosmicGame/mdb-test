import clsx from 'clsx';
import React, { useState, useEffect, useCallback, useRef, MutableRefObject } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import MDBInput from '../../../../free/core/forms/Input/Input';
import SelectV2OptionsList from './SelectV2OptionsList/SelectV2OptionsList';
import type { SelectV2Props, ExtendedSelectData } from './types';
import { UP_ARROW, DOWN_ARROW, ENTER, TAB, ESCAPE } from './keycodes';

const MDBSelectV2: React.FC<SelectV2Props> = ({
  data,
  className,
  inputClassName,
  optionHeight = 38,
  visibleOptions = 5,
  disabled,
  placeholder,
  label,
  clearBtn,
  children,
  multiple,
  displayedLabels = 5,
  optionsSelectedLabel = 'options selected',
  selectAll = true,
  selectAllLabel = 'Select all',
  size,
  contrast = false,
  onOpen,
  onClose,
  onValueChange,
  search = false,
  searchLabel = 'Search...',
  autoSelect = false,
  noResultsText = 'No results',
  validation = false,
  validFeedback = 'Valid',
  invalidFeedback = 'Invalid',
  ...props
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFaded, setIsFaded] = useState(false);

  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement>();

  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const [activeElement, setActiveElement] = useState(() => data.findIndex((el) => !el.disabled));
  const [selectedElements, setSelectedElements] = useState<number[]>([]);

  const [selectData, setSelectData] = useState<ExtendedSelectData[]>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  const [inputWidth, setInputWidth] = useState('');
  const [maxDropdownHeight, setMaxDropdownHeight] = useState(0);

  const [isRendered, setIsRendered] = useState(false);

  const classes = clsx('select-wrapper', className);
  const inputClasses = clsx('select-input', placeholder && 'placeholder-active', isOpen && 'focused', inputClassName);
  const selectDropdownClasses = clsx('select-dropdown', isOpen && isFaded && 'open');

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
  });

  const searchRef = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const dropdownWrapperRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    const query = e.target.value.toLowerCase();

    if (query.length <= 0) return setFilteredData(selectData);

    const queriedData = selectData?.filter((el: any) => el.text?.toLowerCase().includes(query));

    return setFilteredData(queriedData);
  };

  // validation

  useEffect(() => {
    if (!validation) return;

    const hasSelectedAnOption = selectedElements.every((index) => selectData[index].value);
    const isEverySelectedNotDisabled = selectedElements.every((index) => !selectData[index].disabled);
    const areOptionsSelected = selectedElements.length > 0;

    const combinedBasicStatements =
      !multiple && (!areOptionsSelected || !hasSelectedAnOption || !isEverySelectedNotDisabled);
    const combinedMultipleStatements = multiple && (!areOptionsSelected || !isEverySelectedNotDisabled);

    if (combinedBasicStatements) {
      (referenceElement as HTMLInputElement)?.setCustomValidity(invalidFeedback);
    } else if (combinedMultipleStatements) {
      (referenceElement as HTMLInputElement)?.setCustomValidity(invalidFeedback);
    } else {
      (referenceElement as HTMLInputElement)?.setCustomValidity('');
    }
  }, [validation, invalidFeedback, selectedElements, referenceElement, selectData, inputValue, multiple]);

  const scrollOptions = (index: number) => {
    const list = dropdownWrapperRef.current as HTMLElement;
    const listHeight = list.offsetHeight;
    const scrollTop = list.scrollTop;

    const indexCount = multiple && selectAll ? index + 1 : index;
    const firstIndex = multiple && selectAll ? -2 : -1;

    if (index > firstIndex) {
      const optionOffset = indexCount * optionHeight;
      const isBelow = optionOffset + optionHeight > scrollTop + listHeight;
      const isAbove = optionOffset < scrollTop;

      if (isAbove) {
        list.scrollTop = optionOffset;
      } else if (isBelow) {
        list.scrollTop = optionOffset - listHeight + optionHeight;
      } else {
        list.scrollTop = scrollTop;
      }
    }
  };

  const setNextOptionActive = (): number => {
    let index = activeElement + 1;

    if (!selectData[index]) {
      return activeElement;
    }

    while (selectData[index].disabled) {
      index += 1;

      if (!selectData[index]) {
        return index - 1;
      }
    }

    return index;
  };

  const setPreviousOptionActive = (): number => {
    let index = activeElement - 1;

    if (!selectData[index]) {
      return multiple && selectAll && activeElement > -1 ? activeElement - 1 : activeElement;
    }

    while (selectData[index].disabled) {
      index -= 1;

      if (!selectData[index]) {
        return multiple && selectAll ? index : index + 2;
      }
    }

    return index;
  };

  const handleFocusedInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (![UP_ARROW, DOWN_ARROW, ENTER].includes(key)) return;

    e.preventDefault();

    if (key === ENTER) {
      return !isOpen && !isFaded && setIsOpen(true);
    }

    if (key === DOWN_ARROW) {
      if (multiple) return !isOpen && !isFaded && setIsOpen(true);

      const newIndex = setNextOptionActive();
      setActiveElement(newIndex);

      return handleOptionClick(selectData[newIndex]);
    }

    if (key === UP_ARROW) {
      if (multiple) return !isOpen && !isFaded && setIsOpen(true);

      const newIndex = setPreviousOptionActive();
      setActiveElement(newIndex);

      return handleOptionClick(selectData[newIndex]);
    }
  };

  const handleKeyboard = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;

    if (![UP_ARROW, DOWN_ARROW, ENTER, TAB, ESCAPE].includes(key)) return;

    if (key === TAB) {
      autoSelect && handleOptionClick(selectData[activeElement]);

      return setIsOpen(false);
    }

    e.preventDefault();

    if (key === DOWN_ARROW) {
      const newIndex = setNextOptionActive();

      scrollOptions(newIndex);
      return setActiveElement(newIndex);
    }

    if (key === UP_ARROW) {
      const newIndex = setPreviousOptionActive();

      scrollOptions(newIndex);
      return setActiveElement(newIndex);
    }

    if (key === ENTER) {
      return multiple && selectAll && activeElement === -1
        ? handleSelectAll()
        : handleOptionClick(selectData[activeElement]);
    }

    if (key === ESCAPE) {
      setIsOpen(false);

      return referenceElement?.focus();
    }
  };

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const popperExist = popperElement && popperElement !== null;
      const referenceExist = referenceElement && referenceElement !== null;
      const isOutsideSelect =
        !popperElement?.contains(e.target as Node) && !referenceElement?.contains(e.target as Node);

      if (popperExist && isOpen && referenceExist) {
        if (isOutsideSelect) {
          setIsOpen(false);
        }
      }
    },
    [popperElement, referenceElement, isOpen]
  );

  useEffect(() => {
    const preparedData = data.map((el, index) => {
      return { ...el, elementPosition: index };
    });

    setSelectData(preparedData);
    setFilteredData(preparedData);
  }, [data]);

  const handleResize = useCallback(() => {
    setInputWidth(`${referenceElement?.offsetWidth}px`);
  }, [referenceElement]);

  const handleSelectAll = () => {
    if (selectedElements.length === data.filter((el) => !el.disabled).length) {
      setSelectedElements([]);
      onValueChange?.([]);

      return updateMultipleInput([]);
    }

    const dataIndexes = selectData?.filter((el) => !el.disabled).map((el) => el.elementPosition);
    setSelectedElements(dataIndexes);
    onValueChange?.(data.filter((el) => !el.disabled));

    return updateMultipleInput(dataIndexes);
  };

  const updateMultipleInput = useCallback(
    (newData: number[]) => {
      const isTextExtended = displayedLabels === -1 || newData.length > displayedLabels;

      if (newData.length <= 0) return setInputValue('');

      if (isTextExtended) {
        return setInputValue(`${newData.length} ${optionsSelectedLabel}`);
      }

      const newVal = newData
        .map((itemIndex: number) => selectData[itemIndex].text || '')
        .filter((value: any) => value.trim() !== '');

      const isEveryEmpty = newVal.every((val: string) => val === '');

      if (isEveryEmpty) {
        return setInputValue(' ');
      }

      setActiveElement(newData[newData.length - 1]);
      return setInputValue(newVal.join(', '));
    },
    [displayedLabels, optionsSelectedLabel, selectData]
  );

  const handleOptionClick = (el: ExtendedSelectData) => {
    const { text, disabled, elementPosition } = el;

    if (disabled) return;

    if (multiple) {
      const isSelected = selectedElements.includes(elementPosition);

      const newData = isSelected
        ? selectedElements.filter((itemIndex: number) => itemIndex !== elementPosition)
        : [...selectedElements, elementPosition];

      setSelectedElements(newData);
      onValueChange?.(newData.map((itemIndex) => data[itemIndex]));

      return updateMultipleInput(newData);
    }

    setSelectedElements([elementPosition]);
    setInputValue(text || ' ');

    onValueChange?.(data[elementPosition]);
    setIsOpen(false);
    setActiveElement(elementPosition);

    return referenceElement?.focus();
  };

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (multiple) {
      const selectedItems = selectData.filter((el) => el.defaultSelected).map((el) => el.elementPosition);

      updateMultipleInput(selectedItems);

      selectedItems.length > 0 && setActiveElement(selectedItems[selectedItems.length - 1]);

      return setSelectedElements(selectedItems);
    }

    let selectedIndex = selectData.findIndex((el) => el.defaultSelected);

    // if there's no default selected item - get first not disabled one
    if (selectedIndex === -1) {
      selectedIndex = selectData.findIndex((el) => !el.disabled);
    }

    // additional check if all elements are disabled
    // and there's no default selected element
    if (selectedIndex !== -1) {
      setInputValue(selectData[selectedIndex].text || ' ');
      setSelectedElements([selectedIndex]);
    }

    return setActiveElement(selectedIndex);
  }, [selectData, updateMultipleInput, multiple]);

  useEffect(() => {
    const itemsAmount = selectData.length;
    const maxAmount = itemsAmount < visibleOptions ? itemsAmount : visibleOptions;

    setMaxDropdownHeight(maxAmount * optionHeight);
  }, [selectData, visibleOptions, optionHeight]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleClickOutside, handleResize, isOpen]);

  useEffect(() => {
    if (isFaded) {
      isRendered && onOpen?.();
      search && searchRef.current.focus();
    } else {
      isRendered && onClose?.();
      search && setSearchValue('');
      search && setFilteredData(selectData);
    }
  }, [isFaded, onOpen, onClose, search, selectData, isRendered]);

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setIsFaded(isOpen);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <div className={classes} {...props}>
      <>
        <MDBInput
          inputRef={setReferenceElement as any}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleFocusedInput}
          className={inputClasses}
          value={inputValue}
          readonly={!validation}
          required={validation}
          disabled={disabled}
          placeholder={placeholder}
          label={label}
          size={size}
          contrast={contrast}
        >
          {validation && (
            <>
              <div className='invalid-feedback'>{invalidFeedback}</div>
              <div className='valid-feedback'>{validFeedback}</div>
            </>
          )}
          {clearBtn && inputValue.length > 0 && (
            <span
              tabIndex={0}
              className='select-clear-btn d-block'
              role='button'
              onClick={() => {
                setInputValue('');
                setSelectedElements([]);
              }}
            >
              ✕
            </span>
          )}
          <span className='select-arrow'></span>
        </MDBInput>

        {data?.length > 0 &&
          (isOpen || isFaded) &&
          createPortal(
            <div
              style={{ ...styles.popper, width: inputWidth, zIndex: 1070 }}
              {...attributes.popper}
              ref={setPopperElement as any}
              className='select-dropdown-container'
            >
              <div tabIndex={0} onKeyDown={handleKeyboard} className={selectDropdownClasses}>
                {search && (
                  <div className='input-group'>
                    <input
                      onChange={handleSearch}
                      value={searchValue}
                      ref={searchRef}
                      type='text'
                      className='form-control select-filter-input'
                      role='searchbox'
                      placeholder={searchLabel}
                    />
                  </div>
                )}
                <div
                  className='select-options-wrapper'
                  ref={dropdownWrapperRef}
                  style={{ maxHeight: `${maxDropdownHeight}px` }}
                >
                  <SelectV2OptionsList
                    data={data}
                    selectData={filteredData}
                    selectedElements={selectedElements}
                    optionHeight={optionHeight}
                    visibleOptions={visibleOptions}
                    handleOptionClick={handleOptionClick}
                    handleSelectAll={handleSelectAll}
                    handleKeyboard={handleKeyboard}
                    selectAll={selectAll}
                    selectAllLabel={selectAllLabel}
                    multiple={multiple}
                    activeElement={activeElement}
                    noResults={noResultsText}
                    search={search}
                  />
                </div>
                {children && <div className='select-custom-content'>{children}</div>}
              </div>
            </div>,
            document.body
          )}
      </>
    </div>
  );
};

MDBSelectV2.defaultProps = {
  optionHeight: 38,
  visibleOptions: 5,
  optionsSelectedLabel: 'options selected',
  displayedLabels: 5,
};

export default MDBSelectV2;
