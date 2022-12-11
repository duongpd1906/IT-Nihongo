import "./NotificationModal.css";

function NotificationModal({ children, shown, close }) {

  return shown ? (
    <div className="notification-modal ">
      <div className="modal__overlay" onClick={() => { close() }} />
      <div className="modal__content" onClick={(e) => { e.stopPropagation() }} >
        <h2 className="modal__title">Confirm</h2>
        <p className="modal__text">{children}</p>
        <div className="modal__buttons">
          <button type="button" className="modal__button modal__button--cancel" onClick={() => { close() }}>Cancel</button>
          <button type="button" className="modal__button modal__button--yes">Yes, Delete!</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default NotificationModal;
