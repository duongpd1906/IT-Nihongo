import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
	const { user } = useAppContext();
	if (!user) {
		return <Navigate to="/landing" />;
	}
	if (user.role !== "Admin") {
		return <Navigate to="/" />;
	}
	return children;
};

export default ProtectedAdminRoute;
