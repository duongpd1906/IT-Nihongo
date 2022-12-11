import { useState } from "react";
import Slider from "react-slick";
import NotificationModal from "./NotificationModal";
import "./UserTopic.css";

function UserTopic(props) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	const [modalShown, toggleModal] = useState(false);

	const list_img = props.topic.list_img;

	return (
		<div className="topic__item">
			<div className="topic__header">{props.topic.topicName}</div>
			<div className="topic__main">
				<div className="topic__detail">
					<span className="topic__detail-title">Design</span>
					<div className="topic__slide-list">
						<Slider {...settings}>
							{list_img.map((image) => (
								<div>
									<img src={image.image} alt="design" />
								</div>
							))}
						</Slider>
					</div>
				</div>
				<div className="cta">
					<button className="btn-edit">edit</button>
					<button
						className="btn-delete"
						onClick={() => {
							toggleModal(!modalShown);
						}}
					>
						delete
					</button>
				</div>
			</div>
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

export default UserTopic;
