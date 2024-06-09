import React from 'react';
import {Transition} from 'react-transition-group';
import {IoCloseCircle} from 'react-icons/io5';
import '../styles/Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

/**
 * Modal window component
 */
const Modal = ({isOpen, onClose, children}: ModalProps) => (
    <>
        <Transition in={isOpen} timeout={350} unmountOnExit={true}>
            {(state) => (<div className={`my-modal my-modal--${state}`}>
                <div className="my-modal-wrapper">
                    <div className="my-modal-content">
                        <IoCloseCircle className="my-modal-close-btn" onClick={onClose}/>
                        {children}
                    </div>
                </div>
            </div>)}
        </Transition>
    </>
);

export default Modal;