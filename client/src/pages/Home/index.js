import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../components/Sidebar.js";
import "./Home.css";
import ListTopic from "./ListTopic.js";

function Home() {
    return (
        <div className="home">
            <img
                className="demo-bg"
                src="https://statics.vinpearl.com/dinh-ban-co-2_1629274421.jpg"
                alt=""
            ></img>
            <Sidebar />
            <div className="main-content">
                {/* <Badge className="button-add" bg="dark" onClick={() => navigate("/upload")}>
                    PLUS
                </Badge> */}
                <ListTopic></ListTopic>
            </div>
        </div>
    );
}

export default Home;
