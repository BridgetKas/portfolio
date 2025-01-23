import { ReactNode } from 'react';
import './modal.css';


type modalTypes = {
  show:React.ReactNode,
  onClose:React.MouseEventHandler<HTMLSpanElement> | undefined,
  children:ReactNode
}

const Modal = (props:modalTypes) => {
 const  { show, onClose, children} = props
  return (
    <div className={`modal ${show ? 'modal-show' : ''}`} >
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white p-[35px] rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
        <span className="text-black cursor-pointer text-[32px] absolute top-0 right-[15px]" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;