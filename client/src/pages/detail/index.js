import './stylect.css';
import imgg from '../../assets/img/down.jpg';
import logoo from '../../assets/img/logoo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'



function Detail() {

    return (
        <div className="Appct">
            {/* <h1>Hello chi tiet </h1> */}
            <div className="header">
                <ul className="chung">
                    <li><img className="logoo" src={logoo} /></li>
                    <li><h1 id="dn">ログインは<a href="/login">こちら</a></h1></li>
                </ul> 
            </div>

            {/* <FontAwesomeIcon icon={faArrowLeft} /> */}

            <div className="slider">
                <div className="labell1">
                    {/* <div className="btntv">--</div> */}
                    <Link to="/">
                        {/* <input className="btntv" type="button" value={faArrowLeft} ></input> */}
                        <FontAwesomeIcon className="btntv" icon={faArrowCircleLeft} />
                    </Link>
                    <label>詳細</label><br></br>
                </div>
                <div className="labell2">
                    <label>デザイン</label>
                </div>
            </div>

            <form className="form">
                <img className="img" src={imgg} />
                <div className="input-container">
                    <label>額</label><br></br>
                    <input type="text" name="額" className="input" required />
                </div>
                <div className="input-container">
                    <label>位置</label><br></br>
                    <input type="text" name="位置" className="input" required />
                </div>

                <div className="input-container">
                    <label>説明</label><br></br>
                    <input type="text" name="説明" className="input" required />

                </div>
                <button type="submit" className="btn">確認</button>

            </form>
        </div>
    );

}

export default Detail;