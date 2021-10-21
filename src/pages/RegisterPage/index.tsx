import { useHistory } from "react-router";
import { useState } from "react";
import {
  InputContainer,
  LoginContainer,
  RegisterPageMainContent,
  Text,
} from "./styles";

import colors from "../../styles/colors";

import Body from "../../components/Body";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Toast from "../../components/Toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import signupSchema from "../../validations/signupSchema";
import axios from "axios";
import useData from "../../hooks/useData";

const { REACT_APP_API_BASE_URL } = process.env;

const RegisterPage = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const history = useHistory();
  const { logIn } = useData();

  const goLogin = () => {
    history.push("/login");
  };

  const handleRegister = async () => {
    await signupSchema
      .validate({ name, email, password, confirmPassword })
      .then(
        async () =>
          await axios
            .post(`${REACT_APP_API_BASE_URL}user/create`, {
              name,
              email,
              password,
            })
            .then((response) => {
              if (response.data.status === "success") {
                logIn(response);
                history.push("/");
                return Toast(`Bem vindo ${response.data.name}!`, true);
              } else {
                return Toast(response.data.message, false);
              }
            })
      )
      .catch((err) => {
        console.log(err);
        return Toast(err.message, false);
      });
  };

  return (
    <Body>
      <Header>
        <LoginContainer>
          <Text>Já possui uma conta?</Text>
          <Button styleType="outlined" text="Entrar" onClick={goLogin} />
        </LoginContainer>
      </Header>
      <RegisterPageMainContent>
        <Form title="Registre-se">
          <InputContainer>
            <Label text="Nome de usuário" />
            <Input
              placeholder="Digite seu nome"
              onChange={(event) => setName(event.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label text="Enderesso de email" />
            <Input
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label text="Senha" />
            <Input
              placeholder="Digite sua senha"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label text="Confirmar senha" />
            <Input
              placeholder="Digite sua senha novamente"
              type="password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </InputContainer>
          <Button
            text="Registrar"
            type="submit"
            styleType="filled"
            color={colors.green}
            onClick={handleRegister}
          />
        </Form>
      </RegisterPageMainContent>
      <Footer />
    </Body>
  );
};

export default RegisterPage;
