import React from 'react';
import { useMounted } from 'hooks/useMounted';
import { findNextIndexForGivenChar } from 'utils/utility';
import classes from './Select.module.scss';
import SelectOptions from './SelectOptions';
import { SelectOption } from '@/types/select-option.type';

type Props = {
  options: SelectOption[];
  selected: SelectOption[];
  onChange: (selected: SelectOption[]) => void;
};

const MultiSelect = ({ selected, onChange, options }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [optionsMounted, setOptionsMounted] = useMounted(false);
  const [hoveredIndex, setHoveredIndex] = React.useState(0);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const hoveredRef = React.useRef<HTMLLIElement>(null);
  
  const selectOption = (option: SelectOption) => {
    selected.includes(option) 
      ? onChange(selected.filter(opt => opt !== option))
      : onChange([...selected, option]);
      
    setTimeout(() => hoveredRef.current?.scrollIntoView({ block: 'nearest' }), 0);
  };
  
  const clearOptions = () => {
    onChange([]);
    setTimeout(() => rootRef.current?.focus());
  }

  const removeOption = (option: SelectOption) => {
    selectOption(option);
    setTimeout(() => rootRef.current?.focus());
  };

  React.useEffect(() => {
    if(open) {
      setOptionsMounted(true);
      setHoveredIndex(Math.max(options.indexOf(selected[0]), 0));
    } 
    else setOptionsMounted(false, 200);
  }, [open, setOptionsMounted, options]);
  
  const keyHandler: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    switch (e.code) {
      case 'Enter':
      case 'Space': {
        if(!open) setOpen(true);
        if (open) selectOption(options[hoveredIndex]);
        break;
      }

      case 'ArrowUp':
      case 'ArrowDown': {
        e.preventDefault();
        if (!open) {
          setOpen(true);
          break;
        }

        const nextHoveredIndex = hoveredIndex + (e.code === 'ArrowDown' ? 1 : -1);
        if (nextHoveredIndex >= 0 && nextHoveredIndex < options.length) {
          setHoveredIndex(nextHoveredIndex);
          setTimeout(() => hoveredRef.current?.scrollIntoView({ block: 'nearest' }), 0);
        }
        break;
      }

      case 'Delete': {
        onChange([]);
        break;
      }

      case 'Escape': {
        setOpen(false);
        break;
      }

      default: {
        const nextHoveredIndex = findNextIndexForGivenChar(hoveredIndex, e.key, options)
        if(nextHoveredIndex >= 0) {
          setHoveredIndex(nextHoveredIndex);
          setTimeout(() => hoveredRef.current?.scrollIntoView({ block: 'nearest' }), 0);
        }
        break;
      }
    }
  };
  
  return (
    <div
      ref={rootRef}
      onKeyDown={keyHandler}
      className={classes.root}
      tabIndex={0}
      onClick={() => setOpen((prev) => !prev)}
      onBlur={() => setOpen(false)}
    >
      <span className={classes.values}>
        {selected?.length 
          ? selected.map(opt => (
            <span
              key={opt.value}
              onClick={(e) => {
                e.stopPropagation();
                removeOption(opt);
              }}
              onKeyDown={e => e.stopPropagation()}
              className={`${classes['option-badge']} blur-in`}
            >
              <span className={classes['badge-label']}>{opt.label}</span>
              <span className={classes['remove-span']}>&times;</span>
            </span> 
          ))
          : <span className='blur-in'>Select options</span>}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        onKeyDown={e => e.stopPropagation()}
        disabled={!selected.length}
        className={`${classes['clear-btn']} ${!!selected.length ? 'blur-in' : 'blur-out'}`}
      >
        &times;
      </button>

      <div className={classes.divider} />
      
      <div className={`${classes.caret} ${open ? classes['caret--open'] : ''}`} />
      
      {optionsMounted ? (
        <SelectOptions
          options={options}
          open={open}
          selectedMulti={selected}
          selectOption={selectOption}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          rootEl={rootRef.current!}
          ref={hoveredRef}
        />
      ) : null}
    </div>
  );
};

export default React.memo(MultiSelect);