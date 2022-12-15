import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import NotificationModal from "../../../components/NotificationModal";
import "./AdminManager.css";


function AdminDesignManager() {
  const [modalShown, toggleModal] = useState(false);

  const designItem = {
    id: 1,
    topic_name: 'Cafe',
    design_img: 'https://images.adsttc.com/media/images/518d/5d69/b3fc/4be4/2e00/0019/large_jpg/DonCafe_8.jpg?1432542274',
    author: 'Phung Dinh Duong',
  }

  const designList = [
    designItem,
    designItem,
    designItem,
    designItem,
    designItem
  ]

  return (
    <div className="admin-manager">
      <h2 className="admin-title">Design Manager</h2>
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
            designList.map((design, index) => (
              <tr key={index}>
                <td>{design.id}</td>
                <td>{design.topic_name}</td>
                <td><img src={design.design_img} alt={design.design_img} /></td>
                <td>{design.author}</td>
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
        Are you want to permanently delete this Design?
      </NotificationModal>
    </div>
  );
}

export default AdminDesignManager;
