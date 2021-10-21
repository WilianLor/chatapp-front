import { ComponentPropsWithoutRef } from "react";

export default interface UserListProps
  extends ComponentPropsWithoutRef<"button"> {
  name: string;
  lastMessage: () => string;
  lastMessageDate: () => string;
  unreadedMessages: number;
  isOnline: boolean;
}
