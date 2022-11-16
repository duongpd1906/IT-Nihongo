import { useAppContext } from "../../context/appContext";
import Badge from 'react-bootstrap/Badge';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import ListTopic from "./ListTopic.js";

function Home () {
    const {logoutUser} = useAppContext()
    return (
        
        <div>
            <img className="demo-bg"
                src="https://statics.vinpearl.com/dinh-ban-co-2_1629274421.jpg"
                alt=""
            ></img>
            <div className = "header">
                <Badge className="logo" bg="dark">竜</Badge>
                <div className= "logout">
                    ログインは
                    <button className="logout_btn" onClick={logoutUser}>
                        こちら
                    </button>
                    <Badge className="add" bg="dark">PLUS</Badge>
                </div>
            </div>
            
            <div className="body">
                <ListTopic></ListTopic>
            </div>
            
        </div>
    )
}

export default Home;