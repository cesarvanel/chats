import React from "react";
import {
  type FieldValues,
  type UseFormReturn,
  type SubmitHandler,
  useForm,
} from "react-hook-form";

import "./FormInput.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
    <div className="FormInput">
      <label htmlFor="">{props.name}</label>
      <input ref={ref} {...props} />
    </div>
  )
);

type Formprops<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;

  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

export const Form = <TFormValues extends FieldValues>({
  onSubmit,
  children,
}: Formprops<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

/*     
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
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
 */
