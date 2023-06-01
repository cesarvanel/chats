import React from "react";

import "./Step1.scss";
import FormInput from "../FormInput/FormInput";
import { inputs1 } from "./utils";
import { Register } from "../../types/interface";


export type StepProps = {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormData: (formData: Register) => void;
};



const Step1 = ({ formData, onChange }: StepProps) => {
  

  return (
    <div className="Step1">
      <h1>User Infos </h1>
      <div className="container">
        {inputs1.map((input) => (
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

export default Step1;
