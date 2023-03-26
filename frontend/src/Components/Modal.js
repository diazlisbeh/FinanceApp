import React from "react";
import ReactModal from "react-modal";


function Modal({isOpen, handleClose, children}){
    return (
        <ReactModal isOpen={isOpen} handleClose={handleClose}>
            {children}
        </ReactModal>
    );
}

export default Modal;