import *  as Yup from 'yup';

export const clientFormSchema = Yup.object().shape({
name: Yup.string().required("Nome necessario"),
  email: Yup.string().email("Email invalido").required("Email necessario"),
  empresa: Yup.string().required("Empresa necessaria"),
  phone: Yup.string().required("Telefone necessario"),
  city: Yup.string().required("Cidade necessaria")
});
