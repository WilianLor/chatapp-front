import styled from "styled-components";
import colors from "../../styles/colors";

export const UserContent = styled.div`
  height: 3.5rem;
  width: 88%;
  background: transparent;
  border-radius: 0.325rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: background 0.4s;
  padding-left: 2%;
  padding-right: 2%;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${colors.text};
  font-weight: 600;
`;