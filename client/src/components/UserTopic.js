import { useState } from "react";
import Slider from "react-slick";
import NotificationModal from "./NotificationModal";
import "./UserTopic.css";

function UserTopic() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const [modalShown, toggleModal] = useState(false);

  return (
    <div className="topic__item">
      <div className="topic__header">
        Topic 1
      </div>
      <div className="topic__main">
        <div className="topic__detail">
          <span className="topic__detail-title">Design</span>
          <div className="topic__slide-list">
            <Slider {...settings}>
              <div>
                <img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/large_jpg/Culturist_5.jpg?1575515353" alt="design" />
              </div>
              <div>
                <img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/large_jpg/Culturist_5.jpg?1575515353" alt="design" />
              </div>
              <div>
                <img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/large_jpg/Culturist_5.jpg?1575515353" alt="design" />
              </div>
              <div>
                <img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/large_jpg/Culturist_5.jpg?1575515353" alt="design" />
              </div>
              <div>
                <img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/large_jpg/Culturist_5.jpg?1575515353" alt="design" />
              </div>
              <div>
                <img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/large_jpg/Culturist_5.jpg?1575515353" alt="design" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="cta">
          <button className="btn-edit">edit</button>
          <button className="btn-delete" onClick={() => { toggleModal(!modalShown) }}>delete</button>
        </div>
      </div>
      <NotificationModal shown={modalShown} close={() => { toggleModal(false) }} >Are you want to permanently delete this Topic?</NotificationModal>
    </div>
  );
}

export default UserTopic;
