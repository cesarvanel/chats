import "./RegisterPage.scss";
import useMultiStepForm from "../../hooks/useMultisetpform";
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import { Register } from "../../types/interface";
import { REGISTER } from "../../utils/constant/constant";
import { AxiosInstance } from "../../api/axios-config";

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

const RegisterPage = () => {
  const methods = useForm<Register>();

  const { step, steps, currentStepIndex, next, back, isLastStep, isFirtStep } =
    useMultiStepForm([<Step1 />, <Step2 />, <Step3 />]);

  const onSubmit: SubmitHandler<Register> = async (data) => {
    if (!isLastStep) return next();

    try {
      console.log(REGISTER)
      const response = await AxiosInstance.post(REGISTER, data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="RegisterPage">
      <div className="wrapper">
        <div className="index">
          {currentStepIndex + 1} / {steps.length}
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <>
              {step}

              <div className="btn-contains">
                {!isFirtStep && (
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => back()}
                  >
                    cancel
                  </button>
                )}
                <button type="submit" className="btn-submit">
                  {!isLastStep ? "next" : "submit"}
                </button>
              </div>
            </>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegisterPage;
