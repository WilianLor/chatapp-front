import {
  Option,
  Text,
  Title,
  OptionsContainer,
  ModalContainer,
} from "./styles";
import ModalComponent from "react-modal";
import ModalProps from "./types";
import colors from "../../styles/colors";

import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "20rem",
    height: "10rem",
    background: colors.background,
    border: `0.11rem solid ${colors.gray}`,
    borderRadius: "0.325rem",
  },
};

const Modal = ({
  contentText,
  onAccept,
  onReject,
  title,
  openModal,
  onClose,
}: ModalProps) => {
  return (
    <ModalComponent
      isOpen={openModal}
      style={customStyles}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <ModalContainer>
        <Title>{title}</Title>
        <Text>{contentText}</Text>
        <OptionsContainer>
          <Option id="accept" onClick={onAccept}>
            <AiOutlineCheck style={{ width: "3rem", height: "3rem" }} />
          </Option>
          <Option id="reject" onClick={onReject}>
            <AiOutlineClose style={{ width: "3rem", height: "3rem" }} />
          </Option>
        </OptionsContainer>
      </ModalContainer>
    </ModalComponent>
  );
};

export default Modal;
