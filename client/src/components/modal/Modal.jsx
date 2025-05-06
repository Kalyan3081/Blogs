import React from 'react'
import './modal.scss'
const Modal = ({ children, onCancel }) => {
    return (
        <div className="modal-container">
            <div className="popup">
                <div className="popup-header">
                    <span className="material-icons close-btn" onClick={onCancel}>
                        close
                    </span>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal