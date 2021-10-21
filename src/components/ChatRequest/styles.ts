import styled from "styled-components";
import colors from "../../styles/colors";

export const ChatRequestContainer = styled.div`
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
  margin-left: 2.5%;
`;

export const UserIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0.1rem solid ${colors.lightGray};
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

export const Email = styled.p`
  font-size: 0.8rem;
  color: ${colors.text};
  font-weight: 500;
  filter: brightness(1.5);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  gap: 0.5rem;
  margin-right: 1rem;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s;

  color: ${colors.text};

  &#accept:hover {
    color: ${colors.green};
    background-color: ${colors.lightGray};
  }

  &#reject:hover {
    color: ${colors.redWarning};
    background-color: ${colors.lightGray};
  }
`;
