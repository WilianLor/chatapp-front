import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
import {
  LoginPageMainContent,
  Text,
  CreateAccountContainer,
  InputContainer,
} from "./styles";

import loginSchema from "../../validations/loginSchema";

import useData from "../../hooks/useData";

import colors from "../../styles/colors";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Toast from "../../components/Toast";
import Header from "../../components/Header";
import Body from "../../components/Body";
import Footer from "../../components/Footer";

const { REACT_APP_API_BASE_URL } = process.env;

const LoginPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { logIn } = useData();
  const history = useHistory();

  const goCreateAccount = () => {
    history.push("/register");
  };

  const handleLogin = async () => {
    await loginSchema
      .validate({ email, password })
      .then(async () => {
        await axios
          .post(`${REACT_APP_API_BASE_URL}user/login`, {
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
          });
      })
      .catch((err) => {
        return Toast(err.message, false);
      });
  };

  return (
    <Body>
      <Header>
        <CreateAccountContainer>
          <Text>Novo por aqui?</Text>
          <Button
            styleType="outlined"
            text="Criar uma conta"
            onClick={goCreateAccount}
          />
        </CreateAccountContainer>
      </Header>
      <LoginPageMainContent>
        <Form title="Entrar">
          <InputContainer>
            <Label text="Endereço de email" />
            <Input
              name="email"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label
              text="Senha"
              withLink={true}
              linkText="Esqueci minha senha"
              linkUrl="/forgotpassword"
            />
            <Input
              name="password"
              placeholder="Digite sua senha"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputContainer>
          <Button
            text="Entrar"
            styleType="filled"
            color={colors.green}
            type="submit"
            onClick={handleLogin}
          />
        </Form>
      </LoginPageMainContent>
      <Footer />
    </Body>
  );
};

export default LoginPage;
