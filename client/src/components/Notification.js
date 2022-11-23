import { useAppContext } from "../context/appContext";
import "./Notification.css";

const Notification = () => {
  const { alertType, alertText } = useAppContext();

  return (
    <div className={`notification notification--${alertType}`}>
      <div className="notification__container">
        <button className="notification__close">x</button>
        <p className="notification__title">{alertType}</p>
        <p className="notification__content">{alertText}</p>
      </div>
    </div>
  );
};

export default Notification;