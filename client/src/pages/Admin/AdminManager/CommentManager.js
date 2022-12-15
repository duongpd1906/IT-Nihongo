import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import NotificationModal from "../../../components/NotificationModal";
import "./AdminManager.css";


function AdminCommentManager() {
  const [modalShown, toggleModal] = useState(false);

  const commentItem = {
    id: 1,
    topic_name: 'Cafe',
    design_img: 'https://images.adsttc.com/media/images/518d/5d69/b3fc/4be4/2e00/0019/large_jpg/DonCafe_8.jpg?1432542274',
    comment_content: 'Oh! I like this!',
    author: 'Phung Dinh Duong',
  }

  const commentList = [
    commentItem,
    commentItem,
    commentItem,
    commentItem,
    commentItem
  ]

  return (
    <div className="admin-manager">
      <h2 className="admin-title">Comment Manager</h2>
      <Table striped bordered responsive className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Design</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            commentList.map((comment, index) => (
              <tr key={index}>
                <td>{comment.id}</td>
                <td>{comment.topic_name}</td>
                <td><img src={comment.design_img} alt={comment.design_img} /></td>
                <td>{comment.comment_content}</td>
                <td>{comment.author}</td>
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
        Are you want to permanently delete this Comment?
      </NotificationModal>
    </div>
  );
}

export default AdminCommentManager;
