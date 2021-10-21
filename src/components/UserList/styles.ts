import styled from "styled-components";
import colors from "../../styles/colors";

export const UserListContainer = styled.button`
  height: 3.5rem;
  width: 94%;
  background: transparent;
  border-radius: 0.325rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  transition: background 0.4s;
  cursor: pointer;
  margin-left: 2.5%;

  &:hover {
    background-color: ${colors.lightGray};
  }

  &#active {
    background-color: ${colors.lightGray};
  }
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

export const UserContent = styled.div`
  margin-left: 0.5rem;
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

export const LastMessage = styled.p`
  color: ${colors.text};
  font-size: 0.8rem;
  font-weight: 500;
  filter: brightness(1.5);
`;

export const DateText = styled.p`
  font-size: 0.8rem;
  color: ${colors.text};
  font-weight: 500;
`;

export const InfosContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  margin-right: 0.5rem;
  gap: 0.3rem;
  height: 100%;
  flex-direction: column;
`;

export const UnreadedMessagesNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.15rem;
  width: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 50%;
  background-color: ${colors.green};
  border: 0.1rem solid ${colors.lightGray};
  color: ${colors.text};
`;

export const Gap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  height: 0.8rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 50%;
  background-color: tarsnparent;
`;
