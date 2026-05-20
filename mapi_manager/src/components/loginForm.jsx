import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginFormSchema";
import  { useNavigate } from "react-router";
import { useState } from "react";

const LoginForm = () => {
const navigate = useNavigate();
const [infos, setInfos] = useState(() => {
    try {
        const res = localStorage.getItem("userInfos");
        return res ? JSON.parse(res) : null;
    } catch (error) {
        console.error("Erro buscando infos do usuario:", error);
        return null;
    }
});

const saveInfos = (data) => {
    try {
        localStorage.setItem("userInfos", JSON.stringify(data));
        setInfos(data);
    } catch (error) {
        console.error("Erro salvando infos do usuario:", error);
    }
};

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginFormSchema)
  });

  const loginInput = async (data) => {
    console.log(data);
    saveInfos({ email: data.email, empresa: data.empresa });
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit(loginInput)}>
      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}
      <input {...register("empresa")} placeholder="Empresa" />
      {errors.empresa && <p>{errors.empresa.message}</p>}
      <button type="submit">Login</button>
    </form>
  );
};