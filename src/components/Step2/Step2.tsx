import React from "react";

import "./Step2.scss";
import { Input } from "../FormInput/FormInput";
import { useFormContext } from "react-hook-form";
import { Register } from "../../types/interface";

const Step2 = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<Register>();
  return (
    <div className="Step2">
      <h1>Account Infos</h1>
      <div className="container">
        <Input
          type="email"
          placeholder="Your email"
          className={`formController ${errors.email && "invalid"}`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Enter a valid Email Address",
            },
          })}
          onKeyUp={() => {
            trigger("email");
          }}
        />
        {errors.email && <small>{errors.email.message}</small>}

        <Input
          type="password"
          placeholder="Your Password"
          className={`formController ${errors.password && "invalid"}`}
          {...register("password", {
            required: "password is required",
            pattern: {
              value: /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message:
                "password should be 8-20 characters include # to last character !",
            },
          })}
          onKeyUp={() => {
            trigger("password");
          }}
        />

        {errors.password && <small>{errors.password.message}</small>}

        <Input
          type="password"
          placeholder="Confirm Password"
          className={`formController ${errors.confPassword && "invalid"}`}
          {...register("confPassword", {
            required: "Confirmpassword is required",
            pattern: {
              value: /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: "match password !",
            },
          })}
          onKeyUp={() => {
            trigger("confPassword");
          }}
        />
        {errors.confPassword && <small>{errors.confPassword.message}</small>}
      </div>
    </div>
  );
};

export default Step2;
