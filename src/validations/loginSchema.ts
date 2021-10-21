import * as yup from "yup";

const loginSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Essa SENHA é muito pequena")
    .required("O campo SENHA é obrigatório!"),
  email: yup
    .string()
    .email("Este EMAIL é inválido!")
    .required("O campo EMAIL é obrigatório!"),
});

export default loginSchema;
