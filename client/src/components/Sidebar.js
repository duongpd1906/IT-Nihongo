import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import "./Sidebar.css";

const Sidebar = (props) => {
  const { user, logoutUser } = useAppContext();
  const [isActivated, setIsActivated] = useState(false);
  const testUser = {
    name: 'Phung Dinh Duong',
    ava: 'https://toppng.com/uploads/preview/anime-animegirl-animeboy-animeboi-cute-chibi-girl-boy-anime-cute-chibi-girl-11563035878bkeooj5e9u.png',
  }

  useEffect(() => {
    if (user) {
      setIsActivated(true);
    }
    else {
      setIsActivated(false);
    }
  }, [user])

  return (
    <div className="header">
      <div className="header-logo">竜</div>
      <div className="header-element header-element--home">Home</div>
      <Link to="/upload" className="header-element header-element--add">
        Add new topic
      </Link>

      {
        isActivated ? (
          <div>
            <div className="header-element">
              <div className="user_ava">
                <img
                  src={testUser.ava}
                  alt="user-ava"
                />
              </div></div>
            <div className="header-element header-element--logout" onClick={logoutUser}>Logout</div>
          </div>
        ) : (
          <Link to="/login" className="header-element header-element--login">
            ログイン
          </Link>
        )
      }
    </div>
  );
};

export default Sidebar;