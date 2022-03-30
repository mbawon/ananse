import React from "react";
import "./input-modal.css";

const InputModal = ({title, children, toggleModal,size}) => {
  return (
    <div className="modal">
      <div className={`modal-content`} style={{width:size}}>
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <span className="close" onClick={toggleModal}><i className="fa fa-times fa-lg"></i></span>
        </div>
        <div className="modal-body">
            {children}
        </div>
      </div>
    </div>
  );
};

export default InputModal;
