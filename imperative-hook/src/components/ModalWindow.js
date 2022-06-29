import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ModalWindow = (props, ref) => {
    const confirmRef = useRef();
    const rejectRef = useRef();
    const cancelRef = useRef();
    useImperativeHandle(ref, () => {
        return{
            confirmRef: () => confirmRef.current.focus(),
            rejectRef: () => rejectRef.current.focus(),
            cancelRef: () => cancelRef.current.focus()
        }
    })
  return (
    // <div className="modal-container">
      <div className="modal">
        <button ref={cancelRef} className="modal-btn btn-cancel">x</button>
        <h1 className="modal-title">Title</h1>
        <p className="modal-paragraph">Do you confirm?</p>
        <div className="modal-action">
          <button ref={confirmRef} className="modal-btn btn-confirm">Yes</button>
          <button ref={rejectRef} className="modal-btn btn-reject">No</button>
        </div>
      </div>
    // </div>
  );
};

export default forwardRef(ModalWindow);
