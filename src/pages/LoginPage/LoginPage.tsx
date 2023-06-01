import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "./LoginPage.scss";
import { Login } from "../../types/interface";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = (data: Login) => {
    console.log(data);
  };

  return (
    <div className="LoginPage">
      <div className="wrapper">
        <h1>login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text">
            Vous n'avez pas de compte ?{" "}
            <span>
              <Link to={"/register"}>créez votre compte?</Link>
            </span>{" "}
            , cela prend moins d'une minute
          </p>
          <div className="formController">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className={`${errors.email && "invalid"}`}
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
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="formController">
            <label htmlFor="">password</label>
            <input
              type="password"
              placeholder="Your password"
              {...register("password", {
                required: "password is required",
                pattern: {
                  value: /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "password should be 8-20 characters include # to last character !",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
              className={`${errors.password && "invalid"}`}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className="forgot">
            <Link to={"/forgotpassword"}>
              <span>forgot password</span>
            </Link>
          </div>

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
