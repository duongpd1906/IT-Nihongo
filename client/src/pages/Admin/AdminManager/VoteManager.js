import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import NotificationModal from "../../../components/NotificationModal";
import "./AdminManager.css";


function AdminVoteManager() {
  const [modalShown, toggleModal] = useState(false);

  const voteItem = {
    id: 1,
    topic_name: 'Cafe',
    design_img: 'https://images.adsttc.com/media/images/518d/5d69/b3fc/4be4/2e00/0019/large_jpg/DonCafe_8.jpg?1432542274',
    vote_option: 'Yes',
    author: 'Phung Dinh Duong',
  }

  const voteList = [
    voteItem,
    voteItem,
    voteItem,
    voteItem,
    voteItem
  ]

  return (
    <div className="admin-manager">
      <h2 className="admin-title">Vote Manager</h2>
      <Table striped bordered responsive className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Design</th>
            <th>Vote Option</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            voteList.map((vote, index) => (
              <tr key={index}>
                <td>{vote.id}</td>
                <td>{vote.topic_name}</td>
                <td><img src={vote.design_img} alt={vote.design_img} /></td>
                <td>{vote.vote_option}</td>
                <td>{vote.author}</td>
                <td>
                  <div className="cta">
                    <button className="btn-edit">edit</button>
                    <button className="btn-delete" onClick={() => {
                      toggleModal(!modalShown);
                    }}>
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <NotificationModal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        Are you want to permanently delete this Vote?
      </NotificationModal>
    </div>
  );
}

export default AdminVoteManager;
