import styled from "styled-components";
import colors from "../../styles/colors";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 17rem;

  @media (min-width: 720px) {
    margin-bottom: 2rem;
  }
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.text};
  padding-bottom: 2rem;
`;
