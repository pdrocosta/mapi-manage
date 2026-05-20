import *  as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Email necessario"),
  password: Yup.string().min(6, "senha deve ter pelo menos 6 caracteres").required("Senha obrigatoria"),
  empresa: Yup.string().required("Empresa necessaria")
});
