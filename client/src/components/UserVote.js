import { useState } from "react";
import NotificationModal from "./NotificationModal";
import "./UserVote.css";

function UserVote() {

  const [modalShown, toggleModal] = useState(false);

  return (
    <div className="vote__item">
      <div className="vote__header">
        Topic 2
      </div>
      <div className="vote__main">
        <div className="vote__detail">
          <span className="vote__detail-title">Vote</span>
          <div className="detail__item">
            <span>Vote: </span>
            <span>Yes</span>
          </div>
          <div className="detail__item">
            <span>Design: </span>
            <img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/large_jpg/Culturist_5.jpg?1575515353" alt="design" />
          </div>
        </div>
        <div className="vote__detail">
          <span className="vote__detail-title">Detail</span>
          <div className="detail__item">
            <span>Amount: </span>
            <span>2</span>
          </div>
          <div className="detail__item">
            <span>Position: </span>
            <span>anywhere</span>
          </div>
          <div className="detail__item">
            <span>Description: </span>
            <span>none</span>
          </div>
        </div>
        <div className="cta">
          <button className="btn-edit">edit</button>
          <button className="btn-delete" onClick={() => { toggleModal(!modalShown) }}>delete</button>
        </div>
      </div>
      <NotificationModal shown={modalShown} close={() => { toggleModal(false) }} >Are you want to permanently delete this Vote?</NotificationModal>
    </div>
  );
}

export default UserVote;
