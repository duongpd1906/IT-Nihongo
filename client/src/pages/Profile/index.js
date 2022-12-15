import React from "react";
import JustifiedTab from "../../components/JustifiedTab";
import Notification from "../../components/Notification";
import { useAppContext } from "../../context/appContext";
import "./profile.css";

function Profile() {
	const { showAlert, user } = useAppContext();
	return (
		<div className="profile-page">
			{showAlert && <Notification />}

			<div className="header">
				<div className="user-information">
					<img
						className="user-ava"
						src="https://toppng.com/uploads/preview/anime-animegirl-animeboy-animeboi-cute-chibi-girl-boy-anime-cute-chibi-girl-11563035878bkeooj5e9u.png"
						alt="user-ava"
					/>
					<span className="user-name">{user.username}</span>
				</div>
			</div>
			<div className="main-content">
				<JustifiedTab />
			</div>
		</div>
	);
}

export default Profile;
