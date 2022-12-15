import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import NotificationModal from "../../../components/NotificationModal";
import "./AdminEdit.css";


function AdminTopicEdit() {
  const [modalShown, toggleModal] = useState(false);

  const topic = {
    id: 1,
    topic_name: 'Cafe',
    design_qty: 9,
    author: 'Phung Dinh Duong',
  }

  const designItem = {
    id: 1,
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
    <div className="admin-edit">
      <h2 className="admin-title">Edit Topic</h2>
      <div>
        <form className="admin-form" onSubmit={e => e.preventDefault()}>
          <div className="admin-form-group">
            <label htmlFor="topic-name">Topic Name</label>
            <input type="text" value={topic.topic_name} />
          </div>
          <button className="admin-form-button">Save</button>
        </form>
      </div>
      <div>
        <h3 className="admin-sub-title">Design of Topic</h3>
        <Table striped bordered responsive className="admin-table">
          <thead>
            <tr>
              <th>#</th>
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
    </div>
  );
}

export default AdminTopicEdit;
