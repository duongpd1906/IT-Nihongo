import { useState } from "react";
import NotificationModal from "./NotificationModal";
import "./UserVote.css";

function UserVote(props) {
	const [modalShown, toggleModal] = useState(false);

	const detail = props.vote.detail;

	const topic = props.vote.topic;

	const design = topic.list_img.filter(
		(img) => img._id === props.vote.design
	)[0];

	console.log(props.vote);

	return (
		<div className="vote__item">
			<div className="vote__header">{topic.topicName}</div>
			<div className="vote__main">
				<div className="vote__detail">
					<span className="vote__detail-title">Vote</span>
					<div className="detail__item">
						<span>Vote: </span>
						<span>{props.vote.vote ? "YES" : "NO"}</span>
					</div>
					<div className="detail__item">
						<span>Design: </span>
						{design && <img src={design.image} alt="design" />}
					</div>
				</div>
				<div className="vote__detail">
					<span className="vote__detail-title">Detail</span>
					{detail && (
						<>
							<div className="detail__item">
								<span>Amount: </span>
								<span>{detail.amount}</span>
							</div>
							<div className="detail__item">
								<span>Position: </span>
								<span>{detail.position}</span>
							</div>
							<div className="detail__item">
								<span>Description: </span>
								<span>{detail.description}</span>
							</div>
						</>
					)}
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
				Are you want to permanently delete this Vote?
			</NotificationModal>
		</div>
	);
}

export default UserVote;
