import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import "./Home.css";
import ListTopic from "./ListTopic.js";

function Home() {
	let navigate = useNavigate()
	const { user, logoutUser, getAllTopics, topics, page } = useAppContext();
	const [isActivated, setIsActivated] = useState(false);

	useEffect(() => {
		getAllTopics()
	},[page])

	useEffect(() => {
		if (user) {
			setIsActivated(true);
		}
		else {
			setIsActivated(false);
		}
	}, [user])

	return (
		<div className="home">
			<img
				className="demo-bg"
				src="https://statics.vinpearl.com/dinh-ban-co-2_1629274421.jpg"
				alt=""
			></img>
			<div className="header">
				<Badge className="logo" bg="dark">
					竜
				</Badge>
				<div className="user">
					{/* <button className="logout_btn" onClick={logoutUser}>
                        こちら
                    </button> */}
					{isActivated ? (
						<div className="user_is-activated">
							{" "}
							<div className="user_info">
								<div className="user_ava">
									<img
										src="https://toppng.com/uploads/preview/anime-animegirl-animeboy-animeboi-cute-chibi-girl-boy-anime-cute-chibi-girl-11563035878bkeooj5e9u.png"
										alt="user-ava"
									/>
								</div>
								<span className="user_name">
									Phung Dinh Duong
								</span>
							</div>{" "}
							<div className="user_logout">
								<button onClick={logoutUser}>Logout</button>
							</div>
						</div>
					) : (
						<div className="user_login-link">
							ログインは
							<Link to="/login">
								<b> こちら</b>
							</Link>
						</div>
					)}
				</div>
			</div>

			<div className="main-content">
				<Badge className="button-add" bg="dark" onClick={() => navigate("/upload")}>
					PLUS
				</Badge>
				<ListTopic></ListTopic>
			</div>
		</div>
	);
}

export default Home;
