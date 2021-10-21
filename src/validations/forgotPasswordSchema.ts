import * as yup from "yup";

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Este EMAIL é inválido!")
    .required("O campo EMAIL é obrigatório!"),
});

export const validateTokenSchema = yup.object().shape({
  token: yup
    .string()
    .min(5, "Este TOKEN é muito curto!")
    .max(5, "Este TOKEN é muito grande!")
    .required("O campo TOKEN é obrigatório!"),
});

export const resetPasswordSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As SENHAS não conferem.")
    .required("O campo CONFIRMAÇÃO DE SENHA É obrigatório."),
  password: yup
    .string()
    .min(6, "Essa SENHA é muito pequena")
    .required("O campo SENHA é obrigatório!"),
});
