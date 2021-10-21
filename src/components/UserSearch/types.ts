import { User } from "../../pages/HomePage/types";

export default interface UserSearchProps {
  user: User;
  senderEmail: string;
  sendChatRequest: (userId: string) => void;
}
