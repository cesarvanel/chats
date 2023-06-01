import React, { useState } from "react";

import "./FormInput.scss";

type InputProps = {
  label?: string;
  value: any;
  placeholder?: string;
  type: string;
  name: string;
  errorMessage?: string;
  required?: boolean;
  pattern?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  label,
  value,
  placeholder,
  name,
  type,
  required,
  pattern,
  errorMessage,
  onChange,
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  return (
    <div className="FormInput">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        onChange={onChange}
        onBlur={handleFocus}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
