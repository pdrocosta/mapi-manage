import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginFormSchema";
import  { useNavigate } from "react-router";
import { useState } from "react";

const LoginForm = () => {
const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(false);
const [loginError, setLoginError] = useState(null);

const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginFormSchema)
});

const saveInfos = (data) => {
    try {
        localStorage.setItem("userInfos", JSON.stringify(data));
    } catch (error) {
        console.error("Erro salvando infos do usuario:", error);
    }
};


  const loginInput = async (data) => {
    setIsLoading(true);
    setLoginError(null);
    console.log(data);
      try {
        saveInfos({ email: data.email, empresa: data.empresa });
        navigate("/dashboard");
    } catch (err) {
        setLoginError("Falha ao realizar login. Tente novamente.");
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(loginInput)} noValidate>
        <div>
            <div>
                <input {...register("email")} placeholder="Email" type="email"/>
              {errors.email && <p role="alert">{errors.email.message}</p>}
            <input {...register("password")} type="password" placeholder="Password" />
              {errors.password && <p role="alert" >{errors.password.message}</p>}
            <input {...register("empresa")} placeholder="Empresa" />
              {errors.empresa && <p role="alert"> {errors.empresa.message}</p>}
            </div>
            <div>
                  <button type="submit" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Login"}
            </div>
        </button>
        </div>
    </form>
  );
};

export default LoginForm;
