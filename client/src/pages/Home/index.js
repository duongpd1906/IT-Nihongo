import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import ListTopic from "./ListTopic.js";

function Home() {
	return (
		<div className="home">
			<img
				className="demo-bg"
				src="https://statics.vinpearl.com/dinh-ban-co-2_1629274421.jpg"
				alt="home background"
			></img>
			<div className="main-content">
				<ListTopic></ListTopic>
			</div>
		</div>
	);
}

export default Home;
