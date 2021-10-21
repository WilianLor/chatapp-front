import {
  ChatContainer,
  Day,
  DayContainer,
  Message,
  MessageTime,
  MessagesContainer,
  InfosMessageContainer,
} from "./styles";

import {
  ChatContainerInterface,
  SameDateMessagesInterface,
  FiltredMessagesInterface,
} from "./types";

import { BsCheckAll, BsCheck } from "react-icons/bs";

import { MessageInterface } from "../../pages/HomePage/types";
import useData from "../../hooks/useData";

const ChatContent = ({ messages, myId, ...rest }: ChatContainerInterface) => {
  const { userData } = useData();

  const compareDate = (dateRaw: string, date2Raw: string) => {
    const date = new Date(dateRaw);
    const date2 = new Date(date2Raw);

    const date2Day = date2.getDate();
    const date2Month = date2.getMonth();
    const date2Year = date2.getFullYear();

    const dateDay = date.getDate();
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();

    if (
      date2Day === dateDay &&
      date2Month === dateMonth &&
      date2Year === dateYear
    ) {
      return true;
    } else {
      return false;
    }
  };

  const filterMessages = () => {
    const sameDateMessages: SameDateMessagesInterface[] = [];

    messages.map((message) => {
      const SdmIndex = sameDateMessages.findIndex((sameDateMessage) => {
        return compareDate(sameDateMessage.date, message.date);
      });
      const Sdm = sameDateMessages[SdmIndex];
      const messageMethod = message.author === myId ? "sended" : "received";

      if (Sdm) {
        const filtredMessagesContainer =
          Sdm.filtredMessages[Sdm.filtredMessages.length - 1];

        if (
          filtredMessagesContainer &&
          filtredMessagesContainer.method === messageMethod
        ) {
          sameDateMessages[SdmIndex].filtredMessages[
            Sdm.filtredMessages.length - 1
          ].messages.push(message);
        } else {
          const messageAdd = [];
          messageAdd.push(message);
          sameDateMessages[SdmIndex].filtredMessages.push({
            method: messageMethod,
            messages: messageAdd,
          });
        }
      } else {
        const messages: MessageInterface[] = [];

        messages.push(message);

        const filtredMessagesAdd: FiltredMessagesInterface[] = [];

        filtredMessagesAdd.push({
          method: messageMethod,
          messages: messages,
        });

        sameDateMessages.push({
          date: message.date,
          filtredMessages: filtredMessagesAdd,
        });
      }

      return "";
    });

    return sameDateMessages;
  };

  const formatDate = (dateRaw: string) => {
    const date = new Date(dateRaw);

    const day = date.getDate();
    const year = date.getFullYear();
    const monthNumber = date.getMonth() + 1;

    switch (monthNumber) {
      case 1:
        return `${day} de janeiro, ${year}`;
      case 2:
        return `${day} de fevereiro, ${year}`;
      case 3:
        return `${day} de março, ${year}`;
      case 4:
        return `${day} de abril, ${year}`;
      case 5:
        return `${day} de maio, ${year}`;
      case 6:
        return `${day} de junho, ${year}`;
      case 7:
        return `${day} de julho, ${year}`;
      case 8:
        return `${day} de agosto, ${year}`;
      case 9:
        return `${day} de setembro, ${year}`;
      case 10:
        return `${day} de outubro, ${year}`;
      case 11:
        return `${day} de novembro, ${year}`;
      case 12:
        return `${day} de dezembro, ${year}`;
      default:
        return "Em algum momento";
    }
  };

  const formatHours = (dateRaw: string) => {
    const date = new Date(dateRaw);

    const minutes = date.getMinutes();
    const hours = date.getHours();

    const finalMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const finalHours = hours < 10 ? `0${hours}` : hours.toString();

    return `${finalHours}:${finalMinutes}`;
  };

  return (
    <ChatContainer id="chat-content">
      {filterMessages().map((dateMessages, index) => (
        <DayContainer key={index}>
          <Day>{formatDate(dateMessages.date)}</Day>
          {dateMessages.filtredMessages.map((filtredMessages, index) => (
            <MessagesContainer key={index} id={filtredMessages.method}>
              {filtredMessages.messages.map((message, index) => {
                return (
                  <Message key={index} id={filtredMessages.method}>
                    {message.content}
                    <InfosMessageContainer>
                      <MessageTime>{formatHours(message.date)}</MessageTime>
                      {message.author === userData.id ? (
                        message.readed ? (
                          <BsCheckAll />
                        ) : (
                          <BsCheck />
                        )
                      ) : (
                        <></>
                      )}
                    </InfosMessageContainer>
                  </Message>
                );
              })}
            </MessagesContainer>
          ))}
        </DayContainer>
      ))}
    </ChatContainer>
  );
};

export default ChatContent;
