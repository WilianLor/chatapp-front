import { Text, UserContent } from "./styles";

import Button from "../Button";

import UserSearchProps from "./types";

const UserSearch = ({
  user,
  senderEmail,
  sendChatRequest,
}: UserSearchProps) => {
  return (
    <UserContent>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Button
        id="colored"
        disabled={senderEmail === user.email}
        onClick={() => sendChatRequest(user._id)}
        text="Enviar pedido"
        styleType="outlined"
      />
    </UserContent>
  );
};

export default UserSearch;
