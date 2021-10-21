import { useState } from "react";
import { useHistory } from "react-router";
import axios, { AxiosResponse } from "axios";
import {
  ForgotPasswordPageMainContent,
  InputContainer,
  Text,
  OptionContainer,
} from "./styles";

import colors from "../../styles/colors";
import {
  forgotPasswordSchema,
  resetPasswordSchema,
  validateTokenSchema,
} from "../../validations/forgotPasswordSchema";

import Body from "../../components/Body";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Toast from "../../components/Toast";

const { REACT_APP_API_BASE_URL } = process.env;

const ForgotPasswordPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phase, updatePhase] = useState<
    "sendEmail" | "validateToken" | "resetPassword"
  >("sendEmail");

  const goToLogin = () => {
    history.push("/login");
  };

  const handleForgotPassword = async () => {
    await forgotPasswordSchema
      .validate({ email })
      .then(() => {
        axios
          .post(`${REACT_APP_API_BASE_URL}forgotpassword`, { email })
          .then((response: AxiosResponse) => {
            if (response.data.status === "success") {
              updatePhase("validateToken");
              return Toast(response.data.message, true);
            } else {
              return Toast(response.data.message, false);
            }
          })
          .catch(() => {
            return Toast("Erro interno!", false);
          });
      })
      .catch((err) => {
        return Toast(err.message, false);
      });
  };

  const handleValidateToken = async () => {
    await validateTokenSchema
      .validate({ token })
      .then(() => {
        axios
          .get(`${REACT_APP_API_BASE_URL}validatetoken`, {
            params: {
              token,
              email,
            },
          })
          .then((response: AxiosResponse) => {
            if (response.data.status === "success") {
              updatePhase("resetPassword");
              return Toast(response.data.message, true);
            } else {
              return Toast(response.data.message, false);
            }
          })
          .catch(() => {
            return Toast("Erro interno!", false);
          });
      })
      .catch((err) => {
        return Toast(err.message, false);
      });
  };

  const handleResetPassword = async () => {
    await resetPasswordSchema
      .validate({ password, confirmPassword })
      .then(() => {
        axios
          .put(`${REACT_APP_API_BASE_URL}resetpassword`, {
            email,
            password,
            token,
          })
          .then((response: AxiosResponse) => {
            if (response.data.status === "success") {
              history.push("/login");
              return Toast(response.data.message, true);
            } else {
              return Toast(response.data.message, false);
            }
          })
          .catch(() => {
            return Toast("Erro interno!", false);
          });
      })
      .catch((err) => {
        return Toast(err.message, false);
      });
  };

  return (
    <Body>
      <Header>
        <OptionContainer>
          <Text>Lembrou sua senha?</Text>
          <Button styleType="outlined" text="Entrar" onClick={goToLogin} />
        </OptionContainer>
      </Header>
      <ForgotPasswordPageMainContent>
        {phase === "sendEmail" ? (
          <Form title="Recuperar senha">
            <InputContainer>
              <Label text="Digite o email da sua conta." />
              <Input
                name="email"
                value={email}
                placeholder="Digite seu email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </InputContainer>
            <Button
              text="Enviar"
              styleType="filled"
              color={colors.green}
              type="submit"
              onClick={handleForgotPassword}
            />
          </Form>
        ) : phase === "validateToken" ? (
          <Form title="Validar token de recuperação">
            <InputContainer>
              <Label
                text={`Digite o token de recuperação que você recebeu no email ${email}, seja rápido, você só tem 5 minutos!`}
              />
              <Input
                name="token"
                value={token}
                placeholder="Digite o token de recuperação"
                onChange={(event) => setToken(event.target.value)}
              />
            </InputContainer>
            <Button
              text="Validar"
              styleType="filled"
              color={colors.green}
              type="submit"
              onClick={handleValidateToken}
            />
          </Form>
        ) : (
          <Form title="Recuperar senha">
            <InputContainer>
              <Label text="Digite sua nova senha." />
              <Input
                name="password"
                value={password}
                type="password"
                placeholder="Digite sua nova senha"
                onChange={(event) => setPassword(event.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Label text="Digite novamente sua senha." />
              <Input
                name="confirmPassword"
                value={confirmPassword}
                type="password"
                placeholder="Digite novamente sua senha"
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </InputContainer>
            <Button
              text="Confirmar"
              styleType="filled"
              color={colors.green}
              type="submit"
              onClick={handleResetPassword}
            />
          </Form>
        )}
      </ForgotPasswordPageMainContent>
      <Footer />
    </Body>
  );
};

export default ForgotPasswordPage;
