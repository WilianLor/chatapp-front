import styled from "styled-components";

export const HeaderContainer = styled.header`
  flex: 1;
  display: flex;
  padding-right: 5rem;
  padding-left: 5rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 720px) {
    padding-top: 2rem;
    padding-right: 2rem;
    padding-left: 2rem;
    gap: 1rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-contentcenter;
  flex-direction: row;
  gap: 1rem;
`;
