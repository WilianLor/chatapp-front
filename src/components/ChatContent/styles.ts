import styled from "styled-components";
import colors from "../../styles/colors";

export const ChatContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  border: 0.1rem solid ${colors.lightGray};
  border-bottom: 0;
  background-color: ${colors.white};
  gap: 0.5rem;
  padding-top: 1rem;

  @media (max-width: 720px) {
    & {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MessagesContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
  gap: 0.25rem;
  margin-top: 0.5rem;

  &#received {
    align-items: flex-start;
  }

  &#sended {
    align-items: flex-end;
  }
`;

export const Message = styled.div`
  padding: 0.5rem;
  background-color: ${colors.green};
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.text};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  max-width: 70%;

  &#received {
    background-color: ${colors.darkGreen};
    color: ${colors.white};
  }
`;

export const InfosMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
`;

export const MessageTime = styled.h6`
  font-size: 0.7rem;
  font-weight: 400;
`;

export const DayContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Day = styled.div`
  padding: 0.4rem;
  background-color: ${colors.lightGray};
  color: ${colors.text};
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.5rem;
  filter: brightness(1.05);
`;
