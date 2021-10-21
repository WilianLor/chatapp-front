import styled from "styled-components";
import colors from "../../styles/colors";

export const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.h2`
  color: ${colors.text};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const LoginPageMainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .25rem;
  margin-bottom: .8rem;
  width: 100%;
`
