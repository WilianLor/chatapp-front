import { MessageInterface } from "../../pages/HomePage/types";
import { ComponentPropsWithoutRef } from "react";

export interface ChatContainerInterface
  extends ComponentPropsWithoutRef<"div"> {
  messages: MessageInterface[];
  myId: string;
}

export interface FiltredMessagesInterface {
  method: "sended" | "received";
  messages: MessageInterface[];
}

export interface SameDateMessagesInterface {
  date: string;
  filtredMessages: FiltredMessagesInterface[];
}
