export interface User {
  _id: string;
  name: string;
  email: string;
  rooms?: string[];
}

export interface ChatRequest {
  _id: string;
  sender: User;
  receiver: User;
}

export interface OnlineChat {
  chatId: string;
}

export interface Room {
  _id: string;
  user: User;
}

export interface RoomsWithMessages {
  _id: string;
  users: User[];
  messages: MessageInterface[];
}

export interface MessageInterface {
  _id: string;
  date: string;
  content: string;
  author: string;
  chatId: string;
  readed: boolean;
}

export interface Listener {
  content: string;
  chatId: string;
  userId: string;
}
