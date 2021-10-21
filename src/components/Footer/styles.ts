import styled from "styled-components";
import colors from "../../styles/colors";

export const FooterContainer = styled.footer`
  background: tranparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 5rem;

  border-top: 0.1rem solid ${colors.lightGray};

  @media (max-width: 720px) {
    padding-right: 2rem;
    padding-left: 2rem;
    gap: 1rem;
  }
`;

export const FooterText = styled.h3`
  color: ${colors.text};
  font-size: 0.8rem;
  font-weight: 500;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
