import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import "./Sidebar.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Sidebar = (props) => {
	const { user, logoutUser } = useAppContext();
	const [isActivated, setIsActivated] = useState(false);
	const testUser = {
		name: "Phung Dinh Duong",
		ava: "https://toppng.com/uploads/preview/anime-animegirl-animeboy-animeboi-cute-chibi-girl-boy-anime-cute-chibi-girl-11563035878bkeooj5e9u.png",
	};

	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	useEffect(() => {
		if (user) {
			setIsActivated(true);
		} else {
			setIsActivated(false);
		}
	}, [user]);

	return (
		<>
			<div className="sidebar">
				<div className="sidebar-logo" onClick={() => navigate("/")}>
					竜
				</div>
				<div
					className="sidebar-element sidebar-element--home"
					onClick={() => navigate("/")}
				>
					Home
				</div>
				{user && user.role === "Admin" && (
					<div
						className="sidebar-element sidebar-element--admin"
						onClick={() => navigate("/admin")}
					>
						Admin
					</div>
				)}

				{isActivated ? (
					<div
						className="sidebar-element sidebar-element--add"
						onClick={() =>
							navigate("/upload", {
								state: { topic: "" },
							})
						}
					>
						Add new topic
					</div>
				) : (
					<div
						className="sidebar-element sidebar-element--add"
						onClick={() => setShow(true)}
					>
						Add new topic
					</div>
				)}

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
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						You have to login to create a topic
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						Click <a href="/login">here</a> to login
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Sidebar;
