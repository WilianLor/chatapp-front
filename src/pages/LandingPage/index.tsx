import {
  LandingPageMainContent,
  Subtitle,
  TextContent,
  Title,
  ButtonsContainer,
  Text,
} from "./styles";

import { useHistory } from "react-router";

import Lottie from "react-lottie";
import animationData from "../../source/chatLottie.json";

import Body from "../../components/Body";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LandingPage = () => {
  const history = useHistory();

  const goLogin = () => {
    history.push("/login");
  };

  const goRegister = () => {
    history.push("/register");
  };

  return (
    <Body>
      <Header>
        <ButtonsContainer>
          <Text>Não possui uma conta?</Text>
          <Button text="Criar uma conta" styleType="outlined" onClick={goRegister} />
        </ButtonsContainer>
        <ButtonsContainer>
          <Text>ou</Text>
          <Button text="Entrar" styleType="outlined" onClick={goLogin} />
        </ButtonsContainer>
      </Header>
      <LandingPageMainContent>
        <Lottie
          options={defaultOptions}
          style={{
            width: "23rem",
            height: "23rem",
            marginLeft: "-5rem",
            margin: 0,
          }}
        />
        <TextContent>
          <Title>ChatApp</Title>
          <Subtitle>
            Converse o quanto quiser, com qualquer pessoa, de qualquer país.
          </Subtitle>
        </TextContent>
      </LandingPageMainContent>
      <Footer />
    </Body>
  );
};

export default LandingPage;
