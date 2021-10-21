import {
  DateText,
  LastMessage,
  TextsContent,
  UserContent,
  UserIcon,
  UserListContainer,
  UserName,
  InfosContainer,
  UnreadedMessagesNumber,
  Gap,
} from "./styles";

import UserListProps from "./types";

const UserList = ({
  name,
  lastMessage,
  lastMessageDate,
  unreadedMessages,
  isOnline,
  ...rest
}: UserListProps) => {
  const TextReSize = (text: string) => {
    let finalString = text;
    if (text.length > 24) {
      finalString = text.slice(0, 23) + "...";
    }
    return finalString;
  };

  const formatDate = (dateRaw: string) => {
    const date = new Date(dateRaw);

    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const dateNow = new Date(Date.now());

    const dayNow = dateNow.getDate();
    const monthNow = dateNow.getMonth() + 1;
    const yearNow = dateNow.getFullYear();

    const finalMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const finalHours = hours < 10 ? `0${hours}` : hours.toString();
    const finalDay = day < 10 ? `0${day}` : day.toString();
    const finalMonth = month < 10 ? `0${month}` : month.toString();

    if (year !== yearNow) {
      return `${finalDay}/${finalMonth}/${year}`;
    } else if (month !== monthNow) {
      return `${finalDay}/${finalMonth}`;
    } else if (day !== dayNow) {
      return `${finalDay}/${finalMonth}`;
    } else {
      if (hours > 12) {
        return `${finalHours}:${finalMinutes} PM`;
      } else {
        return `${finalHours}:${finalMinutes} AM`;
      }
    }
  };

  return (
    <UserListContainer {...rest}>
      <UserContent>
        <UserIcon className={isOnline ? "online" : "offline"} />
        <TextsContent>
          <UserName>{name}</UserName>
          <LastMessage>{TextReSize(lastMessage())}</LastMessage>
        </TextsContent>
      </UserContent>
      <InfosContainer>
        {unreadedMessages !== 0 ? (
          <UnreadedMessagesNumber>{unreadedMessages}</UnreadedMessagesNumber>
        ) : (
          <Gap />
        )}
        <DateText>
          {lastMessageDate() !== "" ? formatDate(lastMessageDate()) : ""}
        </DateText>
      </InfosContainer>
    </UserListContainer>
  );
};

export default UserList;
