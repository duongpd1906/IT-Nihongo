import { useState } from "react";
import NotificationModal from "./NotificationModal";
import "./UserComment.css";

function UserComment() {

  const [modalShown, toggleModal] = useState(false);
  const [editFormShown, toggleEditForm] = useState(false);
  const [formData, setFormData] = useState({ comment: 'This topic is very nice!!' });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    console.log('event', event);
    event.preventDefault();
    console.log('formData', formData);
    toggleEditForm(false);
  }

  return (
    <div className="comment__item">
      <div className="comment__header">
        <div className="comment__title">
          <span className="comment__topic-name">Topic 2</span>
          <span className="comment__design-name">, Design 1</span>
        </div>
        <span className="comment__time">1 days ago</span>
      </div>
      <form className={"comment__main " + (editFormShown ? "comment__form" : "")} onSubmit={handleSubmit}>
        <div className="comment__detail">
          <div className="comment__design">
            <span>Design </span>
            <div className="comment__design-image">
              <img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/large_jpg/Culturist_5.jpg?1575515353" alt="design" />
            </div>
          </div>
          <textarea type="text" className="comment__content" name="comment"
            value={formData.comment || ""} onChange={handleChange} disabled={!editFormShown} />
        </div>
        <div className="cta">
          <button className={"btn-edit " + (editFormShown ? "display-none" : "")} type="button" onClick={() => { toggleEditForm(true) }}>edit</button>
          <button className={"btn-save " + (!editFormShown ? "display-none" : "")} type="submit">save</button>
          <button className="btn-delete" type="button" onClick={() => { toggleModal(!modalShown) }}>delete</button>
        </div>
      </form>
      <NotificationModal shown={modalShown} close={() => { toggleModal(false) }} >Are you want to permanently delete this Comment?</NotificationModal>
    </div>
  );
}

export default UserComment;
