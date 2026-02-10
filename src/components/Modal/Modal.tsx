import { Dispatch, SetStateAction } from "react"

interface ModalProps {
  callback: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  buttonText: string;
  text: string;
}

const Modal = ({callback, buttonText, text, setVisible}:ModalProps) => {
  const handleConfirm = () => {
    callback(true);
    setVisible(false);
  }
  return(
    <div className='border border-green-600'>
      <p className="bold">{text}</p>
      <button onClick={() => handleConfirm()}>{buttonText}</button>
      <button onClick={() => setVisible(false)}>Cancel</button>
    </div>
  )
}

export default Modal;