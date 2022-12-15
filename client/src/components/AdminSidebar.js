import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const { user, logoutUser } = useAppContext();
  const [isActivated, setIsActivated] = useState(false);
  const testUser = {
    name: "Phung Dinh Duong",
    ava: "https://toppng.com/uploads/preview/anime-animegirl-animeboy-animeboi-cute-chibi-girl-boy-anime-cute-chibi-girl-11563035878bkeooj5e9u.png",
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  }, [user]);

  return (
    <div className="sidebar">
      <div className="sidebar-logo">竜</div>
      <div
        className="sidebar-element"
        onClick={() => navigate("/admin/topic")}
      >
        Topic
      </div>
      <div
        className="sidebar-element"
        onClick={() => navigate("/admin/design")}
      >
        Design
      </div>
      <div
        className="sidebar-element"
        onClick={() => navigate("/admin/vote")}
      >
        Vote
      </div>
      <div
        className="sidebar-element"
        onClick={() => navigate("/admin/comment")}
      >
        Comment
      </div>
      {isActivated ? (
        <div>
          <div
            className="sidebar-element"
            onClick={() => navigate("/profile")}
          >
            <div className="user_ava">
              <img src={testUser.ava} alt="user-ava" />
            </div>
          </div>
          <div
            className="sidebar-element sidebar-element--logout"
            onClick={logoutUser}
          >
            Logout
          </div>
        </div>
      ) : (
        <Link
          to="/login"
          className="sidebar-element sidebar-element--login"
        >
          ログイン
        </Link>
      )}
    </div>
  );
};

export default AdminSidebar;
