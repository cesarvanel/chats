import React, { useState, useEffect, useRef } from "react";

import "./Select.scss";

export type SelectOptions = {
  client: string;
  number: string ;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOptions[];
  onChange: (value: SelectOptions[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
};

type SelectProps = {
  options: SelectOptions[];
} & (SingleSelectProps | MultipleSelectProps);

const Select = ({ multiple, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hightLightIndex, setHightLightIndex] = useState(0);
  const selectRef = useRef<HTMLDivElement>(null);

  const clearOptions = () => {
    multiple ? onChange([]) : onChange(undefined);
  };

  const selectOption = (option: SelectOptions) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((val) => val !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(value);
    }
  };

  const isOptionSelected = (option: SelectOptions) => {
    return multiple ? value.includes(option) : option === value;
  };

  useEffect(() => {
    if (isOpen) setHightLightIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const ref = selectRef.current;
    const handler = (e: KeyboardEvent) => {
      if (e.target !== selectRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          if (isOpen) selectOption(options[hightLightIndex]);
          setIsOpen((prev) => !prev);
          break;
        case "ArrowUp":
        case "ArrowDown":
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = hightLightIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue > 0 && newValue < options.length) {
            setHightLightIndex(newValue);
          }
          break;

        case "Escape":
          setIsOpen(false);
          break;
      }
    };

    ref?.addEventListener("keydown", handler);

    return () => {
      ref?.removeEventListener("keydown", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hightLightIndex, isOpen, options]);

  return (
    <div
      ref={selectRef}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      className="Select"
    >
      <span className="value">
        {multiple
          ? value.map((v) => {
              return (
                <button
                  key={v.number}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(v);
                  }}
                  className="badge"
                >
                  {v.client} <span className="remove-btn">&times;</span>
                </button>
              );
            })
          : value?.client}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        type="button"
        className="clear-btn"
      >
        &times;
      </button>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul className={`options ${isOpen && "show"}`}>
        {options.map((option, index) => {
          return (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHightLightIndex(index)}
              key={option.client}
              className={`option ${isOptionSelected(option) && "selected"} ${
                index === hightLightIndex && "highlighted"
              }  `}
            >
              {option.client}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
