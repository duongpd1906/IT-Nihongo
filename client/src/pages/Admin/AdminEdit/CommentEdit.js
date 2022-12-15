import React from "react";
import "./AdminEdit.css";


function AdminCommentEdit() {
  const topic = {
    id: 1,
    topic_name: 'Cafe',
    design_qty: 9,
    author: 'Phung Dinh Duong',
  }

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
    </div>
  );
}

export default AdminCommentEdit;
