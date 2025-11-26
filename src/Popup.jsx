function Popup({ title, onConfirm, onCancel }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>{title}</h2>

        <div className="popup-buttons">
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm
          </button>

          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
