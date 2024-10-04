import Modal from 'react-modal';
import { confirmable, ConfirmDialog } from 'react-confirm';

export interface Props {
  confirmation?: string;
};

const Confirmation: ConfirmDialog<Props, boolean> = ({show, proceed, confirmation}) => (
  <Modal isOpen={show} onRequestClose={() => proceed(false)}>
    {confirmation}
    <button onClick={() => proceed(false)}>CANCEL</button>
    <button onClick={() => proceed(true)}>OK</button>
  </Modal>
);

export default confirmable(Confirmation);