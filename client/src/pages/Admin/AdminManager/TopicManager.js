import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import NotificationModal from "../../../components/NotificationModal";
import "./AdminManager.css";


function AdminTopicManager() {
  const [modalShown, toggleModal] = useState(false);

  const topicItem = {
    id: 1,
    topic_name: 'Cafe',
    design_qty: 9,
    author: 'Phung Dinh Duong',
  }
  const topicList = [
    topicItem,
    topicItem,
    topicItem,
    topicItem,
    topicItem
  ]

  return (
    <div className="admin-manager">
      <h2 className="admin-title">Topic Manager</h2>
      <Table striped bordered responsive className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Number of Design</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            topicList.map((topic, index) => (
              <tr key={index}>
                <td>{topic.id}</td>
                <td>{topic.topic_name}</td>
                <td>{topic.design_qty}</td>
                <td>{topic.author}</td>
                <td className="cta">
                  <button className="btn-edit">edit</button>
                  <button className="btn-delete" onClick={() => {
                    toggleModal(!modalShown);
                  }}>
                    delete
                  </button>
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
        Are you want to permanently delete this Topic?
      </NotificationModal>
    </div>
  );
}

export default AdminTopicManager;
