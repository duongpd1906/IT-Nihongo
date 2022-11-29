import './style.css';
import logoo from '../../assets/img/logoo.png';


function Topicmanager() {
    const topic = [
        { id: 1, name: 'コーヒー', img: 'https://6f3ebe2ff971707.cmccloud.com.vn/tour/wp-content/uploads/2021/10/34-quan-cafe-checkin-dep-o-da-nang.jpg.jpg' },
        { id: 2, name: 'モーテル', img: 'https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789__340.jpg' },
        { id: 3, name: 'コーヒー', img: 'https://www.gotadi.com/tour/wp-content/uploads/2021/10/2-quan-cafe-checkin-dep-o-da-nang.jpg.jpg' },
        { id: 4, name: 'モーテル', img: 'https://cdn.pixabay.com/photo/2016/08/26/20/30/hotel-1623064__340.jpg' },
    ]
    return (
        <div className='topic-manager'>
            {/* <img
                className="bg"
                // src="https://statics.vinpearl.com/dinh-ban-co-2_1629274421.jpg"
                src="https://52hz.vn/wp-content/uploads/2022/06/dinh-ban-co-da-nang-8.jpg"
                alt=""
            ></img> */}
            <div className='header'>
                <img className="logo" src={logoo} />
                <h1 className="user">ログインは<a href="/login">こちら</a></h1>
            </div>

            <div className='topic'>
                <div>
                    <h3 className="theh3">投票リスト</h3>
                </div>
                
                {topic.map((item) => {
                    
                    return (
                        // <div className="row">
                        //     <div className="inside">
                        //         <h3 className="texxt">{item.id}</h3>
                        //     </div>
                        //     <div className="inside">
                        //         <h3 className='texxt'>{item.name}</h3>
                        //     </div>
                        //     <div className="inside">
                        //         <img className="thump" src={item.img}></img>
                        //     </div>
                        //     <div className="bttn">
                        //         <button className="btn-del">del</button>
                        //         <button className="btn-del">edit</button>
                        //     </div>
                        // </div>
                        <div className="topic-item" key={item.id}>

                            <div className="idd">

                                {/* <h4 className="fixx">id </h4> */}
                                <h4 className="fixx">{item.id}</h4>
                            </div>

                            <div className="namee">

                                {/* <h4 className="fixx">Tên </h4> */}
                                <h4 className="fixx">{item.name}</h4>
                            </div>

                            <div className="img-wrapper">
                                <img className="anh" src={item.img} />
                            </div>

                            <div className="bttn">
                                <button onClick={() => this.handleDelete(item)} className="btn-del">削除</button>
                                <button className="btn-edit">編集</button>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Topicmanager;