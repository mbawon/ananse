import React from "react";
import styles from "./right-modal.module.css";

const RightModal = ({title, children, toggleModal,size}) => {
  return (
    <div className={styles.modal}>
      <div className={styles[`modal-content`]} style={{width:size}}>
        <div className={styles["modal-header"]}>
          <span className={styles["modal-title"]}>{title}</span>
          <span className={styles["close"]} onClick={toggleModal}><i className="fa fa-times fa-lg"></i></span>
        </div>
        <div className={styles["modal-body"]}>
            {children}
        </div>
      </div>
    </div>
  );
};

export default RightModal;
