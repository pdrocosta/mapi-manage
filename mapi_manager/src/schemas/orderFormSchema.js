import *  as Yup from 'yup';

export const orderFormSchema = Yup.object().shape({
  product: Yup.string()
    .min(3, "Produto deve ter pelo menos 3 caracteres")
    .required("Produto obrigatorio"),

    company: Yup.string()
    .min(3, "Empresa deve ter pelo menos 3 caracteres")
    .required("Empresa obrigatoria"),
  date: Yup.date()
    .typeError("Data invalida")
    .min(new Date(), "Data não pode ser no passado")
    .required("Data obrigatoria"),

  clients: Yup.array()
    .of(
      Yup.object().shape({
        client: Yup.string()
          .required("Cliente obrigatorio"),

        quantity: Yup.number()
          .typeError("Quantidade deve ser um numero")
          .min(1, "Quantidade minima e 1")
          .required("Quantidade obrigatoria"),

        value: Yup.number()
          .typeError("Valor deve ser um numero")
          .min(0.01, "Valor deve ser maior que zero")
          .required("Valor obrigatorio"),
      })
    )
    .min(1, "Adicione pelo menos um cliente")
    .required("Clientes obrigatorios"),
});