import "./Notification.css";

const Notification = ({ type, title, content }) => {

  return (
    <div className={`notification notification--${type}`}>
      <div className="notification__container">
        <button className="notification__close">x</button>
        <p className="notification__title">{title}</p>
        <p className="notification__content">{content}</p>
      </div>
    </div>
  );
};

export default Notification;