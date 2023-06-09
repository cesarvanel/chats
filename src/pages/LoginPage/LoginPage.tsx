import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "./LoginPage.scss";
import { Login, SocketEvent } from "../../types/interface";
import { EnvelopeSimple, EyeSlash, LockKey } from "@phosphor-icons/react";
import { useState } from "react";
import { AxiosInstance } from "../../api/axios-config";
import { LOGIN } from "../../utils/constant/constant";
import { useNavigate } from "react-router-dom";
import { LocalStorageManager } from "../../utils/localStorage/localStorage";
import { useSocket } from "../../context/socket.context";
import { toast } from "react-toastify";

export interface LoginPageProps {
  onCreateAccount: () => void;
}

const LoginPage = ({ onCreateAccount }: LoginPageProps) => {
  const navigate = useNavigate();
  const { socket } = useSocket();

  const [invisible, setInvisible] = useState(true);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Login>();

  const toggle = () => {
    setInvisible((prev: boolean) => (prev = !invisible));
  };

  const onSubmit: SubmitHandler<Login> = async (data: Login) => {
    try {
      const response = await AxiosInstance.post(LOGIN, data);
      if (response.status === 200) {
        const { data } = response;

        LocalStorageManager.saveUserAccessToken(data.accessToken);
        LocalStorageManager.saveUserRefreshToken(data.refreshToken);

        socket.emit(SocketEvent.ADD_USER, data.accessToken);

        navigate("/");
      }
    } catch (error) {
      toast.error("email ou mot de passe incorrect reessayer svp ");
    }
  };

  return (
    <div className="LoginPage">
      <div className="wrapper">
        <h1>Welcome Back!!</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text">Enter your login details below</p>
          <div className="formController">
            <label htmlFor="">Email*</label>
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

            <span className={`icone ${errors.email && "error"}`}>
              {" "}
              <EnvelopeSimple weight="bold" />
            </span>

            {errors.email && <small>{errors.email.message}</small>}
          </div>

          <div className="formController">
            <label htmlFor="">password*</label>

            <input
              type={invisible ? "password" : "text"}
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

            <span className={`icone ${errors.password && "error"}`}>
              <LockKey weight="bold" />
            </span>

            <span className="cash-eye" role="button" onClick={() => toggle()}>
              <EyeSlash weight="fill" />
            </span>
            {errors.password && <small>{errors.password.message}</small>}
          </div>

          <div className="forgot">
            <Link to={"/forgotpassword"}>
              <span>forgot password?</span>
            </Link>
          </div>
          <div className="btn-container">
            <button className={`${isValid && "submit"}`} type="submit">
              {isSubmitting ? "loading..." : "sign in"}
            </button>
          </div>

          <p>
            Don't have account yet?{" "}
            <strong onClick={() => onCreateAccount()}>Sign Up</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
