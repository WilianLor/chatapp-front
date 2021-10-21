export default interface ModalProps {
    onAccept: () => void;
    onReject: () => void;
    title: string;
    contentText: string;
    openModal: boolean;
    onClose: () => void;
}