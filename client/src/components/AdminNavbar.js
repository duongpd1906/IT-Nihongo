import { useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {

  const navigate = useNavigate();

  return (
    <div className="admin-navbar">
      <div className="admin-navbar__title" onClick={() => navigate("/admin")}>ADMIN</div>
    </div>
  );
};

export default AdminNavbar;
