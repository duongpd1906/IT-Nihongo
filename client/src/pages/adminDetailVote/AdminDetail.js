import Table from 'react-bootstrap/Table';
import './AdminDetail.css';
import { VoteDetail } from './utils';
import img from "./down.jpg"



function AdminDetailVote(props) {
    return (
        <div className='detail-page'>
            <div className='header-detail' >
                <h1>竜</h1>
                <div className='title'>アプリのロゴ</div>
                <div className='user'>管理者</div>
            </div>
            <div className='title-detail'>
                <div className='button-back'>Back</div>
                <div className='screen-name'>トピック:  コーヒー</div>
                <div className='design'>
                    <div>デザイン:</div>
                    <div className='design-image'>
                        <img alt='abc' src={img}></img>
                    </div>
                </div>
            </div>

            <div className='table'>
                <Table striped="columns">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>User</th>
                            <th>Vote</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    {VoteDetail.map(VoteDetail => (
                        <tbody>
                            <tr>
                                <td>{VoteDetail.id}</td>
                                <td>{VoteDetail.User}</td>
                                <td>{VoteDetail.Vote}</td>
                                <td>{VoteDetail.Comment}</td>
                            </tr>
                        </tbody>))}
                </Table>
            </div>

        </div>
    );
}

export default AdminDetailVote;