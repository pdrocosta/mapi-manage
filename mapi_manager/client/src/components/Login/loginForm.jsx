import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../../schemas/loginFormSchema";
import { useAuth } from '../../providers/AuthProvider';

const LoginForm = () => {
  const { login, loading } = useAuth(); // ✅ destructured

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginFormSchema)
  });

  return (
    <form onSubmit={handleSubmit(login)} noValidate>
      <div>
        <input {...register("email")} type="email" placeholder="Email"
          autoComplete="email" aria-invalid={!!errors.email} />
        {errors.email && <p role="alert">{errors.email.message}</p>}

        <input {...register("password")} type="password" placeholder="Senha"
          autoComplete="current-password" aria-invalid={!!errors.password} />
        {errors.password && <p role="alert">{errors.password.message}</p>}

        <input {...register("empresa")} type="text" placeholder="Empresa"
          aria-invalid={!!errors.empresa} />
        {errors.empresa && <p role="alert">{errors.empresa.message}</p>}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;