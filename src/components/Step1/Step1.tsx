import React from "react";

import "./Step1.scss";
import { Register } from "../../types/interface";
import { Input } from "../FormInput/FormInput";
import { useFormContext } from "react-hook-form";

const Step1 = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<Register>();

  return (
    <div className="Step1">
      <h1>User Infos </h1>
      <div className="container">
        <Input
          type="text"
          placeholder="Your userName"
          className={`formController ${errors.username && "invalid"}`}
          {...register("username", {
            required: "userName is required",
            pattern: {
              value: /^[A-Za-z0-9]{3,20}$/,
              message:
                "userName should be 3-20 characters include any character!",
            },
          })}
          onKeyUp={() => {
            trigger("username");
          }}
        />

        {errors.username && <small>{errors.username.message}</small>}

        <div>
          <Input
            type="text"
            className={`formController ${errors.number && "invalid"}`}
            placeholder="your phone Number"
            {...register("number", {
              required: "is required",
              pattern: {
                value: /^\+?[1-9][0-9]{7,14}$/,
                message: "should be a valid phone number!",
              },
            })}
            onKeyUp={() => {
              trigger("number");
            }}
          />
          {errors.number && <small>{errors.number.message}</small>}
        </div>

        <div>
          {" "}
          <Input
            type="text"
            placeholder="yout job title"
            className={`formController ${errors.job && "invalid"}`}
            {...register("job", {
              required: "job is required",
              min: "3",
              max: "20",
            })}
          />
          {errors.job && <small>{errors.job.message}</small>}
        </div>
      </div>
    </div>
  );
};

export default Step1;

/*   id: 1,
    name: "username",
    type: "text",
    placeholder: "Your username",
    label: "username",
    errorMessage: "userName should be 3-20 characters include any character!",
    pattern: "^[A-Za-z0-9]{3,20}$",
    required: true,  */
