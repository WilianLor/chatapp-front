import * as yup from "yup";

const signupSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As SENHAS não conferem.")
    .required("O campo CONFIRMAÇÃO DE SENHA É obrigatório."),
  password: yup
    .string()
    .min(6, "Essa SENHA é muito pequena")
    .required("O campo SENHA é obrigatório!"),
  email: yup
    .string()
    .email("Este EMAIL é inválido!")
    .required("O campo EMAIL é obrigatório!"),
  name: yup
    .string()
    .min(4, "Este NOME é muito curto!")
    .required("O campo NOME é obrigatório!"),
});

export default signupSchema;
