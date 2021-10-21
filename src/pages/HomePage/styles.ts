import styled from "styled-components";
import colors from "../../styles/colors";

export const HomeMainContent = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 0.8fr 20rem 2fr 0.8fr;
  grid-template-rows: 8vh 60vh 8vh;

  @media (max-width: 720px) {
    & {
      grid-template-columns: 0.8fr 8.4fr 0.8fr;
      grid-template-rows: 4vh 8vh 60vh 8vh 4vh 8vh 60vh 4vh;
    }
  }
`;

export const ListHeader = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 0.1rem solid ${colors.lightGray};
  border-bottom: 0;
  background-color: ${colors.white};

  @media (max-width: 720px) {
    & {
      border-right: 0.1rem solid ${colors.lightGray};
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 6;
      grid-row-end: 7;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
  margin-left: 1rem;
`;

export const IconButton = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  cursor: pointer;
  color: ${colors.green};
  transition: 0.4s;
  padding: 0.35rem;
  border-radius: 50%;

  &:hover {
    background-color: ${colors.lightGray};
  }
`;

export const List = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  width: 100%;
  background-color: ${colors.white};
  border: 0.1rem solid ${colors.lightGray};
  max-height: 68vh;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 720px) {
    & {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 7;
      grid-row-end: 8;
    }
  }
`;

export const ChatHeader = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: green;
  border: 0.1rem solid ${colors.lightGray};
  border-bottom: 0;
  background-color: ${colors.white};

  @media (max-width: 720px) {
    & {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }
`;

export const UserContent = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-conent: center;
  gap: 0.5rem;
  flex-direction: row;
`;

export const TextsContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-conent: center;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-size: 1rem;
  color: ${colors.text};
  font-weight: 600;
`;

export const UserIcon = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 0.1rem solid ${colors.lightGray};

  &.online {
    background-color: ${colors.green};
  }

  &.offline {
    background-color: ${colors.redWarning};
  }
`;

export const EmailText = styled.p`
  font-size: 0.8rem;
  color: ${colors.text};
  font-weight: 500;
  filter: brightness(1.5);
`;

export const ChatInput = styled.form`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 0.1rem solid ${colors.lightGray};
  background-color: ${colors.white};

  @media (max-width: 720px) {
    & {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }
  }
`;

export const MessageInput = styled.input`
  width: 80%;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.text};
`;

export const SendButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  color: ${colors.green};
  transition: 0.4s;
  padding: 0.4rem;
  border-radius: 50%;

  &:hover {
    background-color: ${colors.lightGray};
  }
`;

export const UserHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`;

export const Text = styled.h3`
  color: ${colors.text};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const TextsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Nav = styled.button`
  font-size: 0.9rem;
  border: 0.1rem solid ${colors.lightGray};
  padding: 0.3rem;
  border-radius: 0.325rem;
  color: ${colors.text};
  cursor: pointer;
  background: ${colors.white};
  transition: 0.4s;
  font-weight: 500;

  &:hover {
    background: ${colors.lightGray};
  }

  &#active {
    color: ${colors.white};
    background: ${colors.green};
    border-color: ${colors.green};
  }
`;

export const ChatBackContent = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 5;
  flex: 1;
  display: flex;
  aling-items: center;
  flex-direction: column;
  border: 0.1rem solid ${colors.lightGray};
  background-color: ${colors.white};
  padding-top: 1rem;

  @media (max-width: 720px) {
    & {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 5;
    }
  }
`;

export const SearchUserComponent = styled.form`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 0.1rem solid ${colors.lightGray};
  border-bottom: 0;
  background-color: ${colors.white};

  @media (max-width: 720px) {
    & {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }
`;

export const UsersList = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  border: 0.1rem solid ${colors.lightGray};
  background-color: ${colors.white};
  gap: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 720px) {
    & {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 5;
    }
  }
`;

export const SearchUserInput = styled.input`
  width: 80%;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.text};
`;

export const PaginateContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
  top: 80vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: absolute;
  background-color: ${colors.white};

  @media (max-width: 720px) {
    & {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }
  }
`;

export const PaginateButton = styled.button`
  padding: 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: 0.4s;

  &:disabled:hover {
    cursor: auto;
    background-color: ${colors.background};
  }

  &:hover {
    background-color: ${colors.lightGray};
  }
`;

export const Page = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
`;

export const HoldWarningContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  color: ${colors.lightGray};
  margin-top: 20vh;
`;

export const WarningText = styled.p`
  text-align: center;
  width: 12rem;
  font-weight: 600;
  font-size: 1rem;
`;
