import React from 'react';
import {Transition} from 'react-transition-group';
import {IoCloseCircle} from "react-icons/io5";
import '../styles/Modal.css';

/**
 * Modal window component
 */
export default class Modal extends React.Component {

    render() {
        return (
            <>
                <Transition in={this.props.isOpen} timeout={350} unmountOnExit={true}>
                    {(state) => (<div className={`my-modal my-modal--${state}`}>
                        <div className="my-modal-wrapper">
                            <div className="my-modal-content">
                                <IoCloseCircle className="my-modal-close-btn" onClick={this.props.onClose}/>
                                {this.props.children}
                            </div>
                        </div>
                    </div>)}
                </Transition>
            </>
        )
    }
}