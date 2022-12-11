import React from "react";
import JustifiedTab from "../../components/JustifiedTab";
import "./profile.css";

function index() {
	return (
		<div className="profile-page">
			<div className="header">
				<div className="user-information">
					<img
						className="user-ava"
						src="https://toppng.com/uploads/preview/anime-animegirl-animeboy-animeboi-cute-chibi-girl-boy-anime-cute-chibi-girl-11563035878bkeooj5e9u.png"
						alt="user-ava"
					/>
					<span className="user-name">Phung Dinh Duong</span>
				</div>
			</div>
			<div className="main-content">
				<JustifiedTab />
			</div>
		</div>
	);
}

export default index;
