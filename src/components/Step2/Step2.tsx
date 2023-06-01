import React from "react";

import "./Step2.scss";
import { inputs2 } from "./utils";
import FormInput from "../FormInput/FormInput";
import { StepProps } from "../Step1/Step1";

const Step2 = ({ formData, onChange }: StepProps) => {
  return (
    <div className="Step2">
      <h1>Account Infos</h1>
      <div className="container">
        {inputs2.map((input) => (
          <FormInput
            key={input.id}
            type={input.type}
            label={input.label}
            name={input.name}
            placeholder={input.placeholder}
            pattern={input.pattern}
            required={input.required}
            value={formData[input.name]}
            onChange={onChange}
            errorMessage={input.errorMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default Step2;
