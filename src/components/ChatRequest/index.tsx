import {
  TextsContent,
  UserContent,
  UserIcon,
  ChatRequestContainer,
  UserName,
  Email,
  ButtonsContainer,
  IconButton,
} from "./styles";

import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import ChatRequestTypes from "./types";

const ChatRequestComponent = ({
  request,
  confirmMethod,
  declineMethod,
}: ChatRequestTypes) => {
  return (
    <ChatRequestContainer>
      <UserContent>
        <UserIcon
          src={
            "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png"
          }
        />
        <TextsContent>
          <UserName>{request.sender.name}</UserName>
          <Email>{request.sender.email}</Email>
        </TextsContent>
      </UserContent>
      <ButtonsContainer>
        <IconButton id="accept" onClick={() => confirmMethod(request._id)}>
          <AiOutlineCheck style={{ width: "1rem", height: "1rem" }} />
        </IconButton>
        <IconButton id="reject" onClick={() => declineMethod(request._id)}>
          <AiOutlineClose style={{ width: "1rem", height: "1rem" }} />
        </IconButton>
      </ButtonsContainer>
    </ChatRequestContainer>
  );
};

export default ChatRequestComponent;
