import React from "react";
import "./alert-modal.css";

const AlertModal = ({ id, children, cancelDelete, toggleAlert }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-content">
        <div className="alert-header"></div>
        {children}

        {/* <form onSubmit={toggleAlert}>
          <div className="alert-body">
            {children}
            <input type="hidden" name="productId" value={id} />
            <div className="alert-action">
              <button type="submit">Yes</button>
              <button onClick={cancelDelete}>No</button>
            </div>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default AlertModal;
