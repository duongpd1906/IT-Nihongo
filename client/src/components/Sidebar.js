import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import "./Sidebar.css";

const Sidebar = (props) => {
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
		<div className="header">
			<div className="header-logo">竜</div>
			<div
				className="header-element header-element--home"
				onClick={() => navigate("/")}
			>
				Home
			</div>
			<div
				className="header-element header-element--add"
				onClick={() =>
					navigate("/upload", {
						state: { topic: "" },
					})
				}
			>
				Add new topic
			</div>

			{isActivated ? (
				<div>
					<div className="header-element">
						<div className="user_ava">
							<img src={testUser.ava} alt="user-ava" />
						</div>
					</div>
					<div
						className="header-element header-element--logout"
						onClick={logoutUser}
					>
						Logout
					</div>
				</div>
			) : (
				<Link
					to="/login"
					className="header-element header-element--login"
				>
					ログイン
				</Link>
			)}
		</div>
	);
};

export default Sidebar;
