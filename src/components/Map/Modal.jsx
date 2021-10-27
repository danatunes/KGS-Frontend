import React from 'react';
import style from './Modal.module.css'

const Modal = ({open, children, onClose, colorChange, layer, defaultFeature}) => {
    if (!open) return null;

    return (
        <>
            <div className={style.overlay}/>
            <div className={style.wrapperModal}>
                <div className={style.modal}>
                    <img src="https://img.icons8.com/ios/50/000000/close-window.png" alt={'close'} onClick={onClose}/>
                    {children}
                    <br/>
                    <div className={style.modalButtons}>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => colorChange(defaultFeature, layer, true)}
                        >
                            Да!
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => colorChange(defaultFeature, layer, false)}
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;