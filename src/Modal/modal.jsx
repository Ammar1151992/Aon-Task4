import "./modal.css";

export const Modal = ({ width = 300, isOpen = false, onClose, children }) => {
  return (
    <div
      className="modal"
      onClick={onClose}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="modal-content" style={{ width }}>
        {children}
      </div>
    </div>
  );
};
