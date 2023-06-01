import React, { useState } from "react";

import "./RegisterPage.scss";
import useMultiStepForm from "../../hooks/useMultisetpform";
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import { Register } from "../../types/interface";

const RegisterPage = () => {



  const [formData, setFormData] = useState<Register>({
    username: "",
    email: "",
    number: "",
    avatar: "",
    password: "",
    job: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => [
    setFormData({ ...formData, [e.target.name]: e.target.value }),
  ];

  const { step, steps, currentStepIndex, next, back, isLastStep, isFirtStep } =
    useMultiStepForm([
      <Step1 formData={formData} onChange={onChange} setFormData={setFormData} />,
      <Step2 formData={formData} onChange={onChange} setFormData={setFormData} />,
      <Step3 formData={formData} onChange={onChange} setFormData={setFormData} />,
    ]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(formData);

    if (!isLastStep) return next();

    console.log('it is a last step')
  };

  return (
    <div className="RegisterPage">
      <div className="wrapper">
        <div className="index">
          {currentStepIndex + 1} / {steps.length}
        </div>

        <form onSubmit={handleSubmit} autoComplete="none">
          {step}

          <div className="btn-contains">
            {!isFirtStep && (
              <button type="button" className="btn-cancel" onClick={() => back()}>
                cancel
              </button>
            )}
            <button type="submit" className="btn-submit">{!isLastStep ? "next" : "submit"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

/* ;  */
