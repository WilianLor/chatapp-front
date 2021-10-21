import styled from "styled-components";
import colors from "../../styles/colors";

export const LandingPageMainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-direction: row;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Text = styled.h3`
  color: ${colors.text};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${colors.text};
  font-weight: 600;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  color: ${colors.text};
  font-weight: 400;
  width: 25rem;
  text-align: center;
`;
