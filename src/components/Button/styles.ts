import styled from "styled-components";
import colors from "../../styles/colors";

export const ButtonOutlined = styled.button`
  color: ${colors.text};
  font-size: 0.9rem;
  background: transparent;
  font-weight: 600;
  border: 0.11rem solid ${colors.gray};
  border-radius: 0.325rem;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }

  &#colored:hover {
    border: 0.11rem solid ${colors.green};
    background-color: ${colors.green};
    filter: brightness(1);
    color: ${colors.white};
  }
`;

export const ButtonFilled = styled.button`
  font-size: 0.9rem;
  color: ${colors.white};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.325rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  transition: filter 0.3s;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    filter: brightness(1.1);
  }
`;
