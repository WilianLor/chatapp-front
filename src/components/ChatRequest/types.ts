import { ChatRequest } from "../../pages/HomePage/types";

export default interface ChatRequestTypes {
  request: ChatRequest;
  confirmMethod: (userId: string) => void;
  declineMethod: (userId: string) => void;
}
