import { useState } from "react";
import NotificationModal from "./NotificationModal";
import "./UserComment.css";
import { format } from "timeago.js";
import { useAppContext } from "../context/appContext";
import Notification from "./Notification";

function UserComment(props) {
	const [modalShown, toggleModal] = useState(false);
	const [editFormShown, toggleEditForm] = useState(false);
	const [formData, setFormData] = useState({
		comment: props.comment.text,
	});

	const { updateComment, deleteComment } = useAppContext();

	const design = props.comment.topic.list_img.filter(
		(image) => image._id === props.comment.design
	)[0];

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setFormData((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		toggleEditForm(false);
	};

	const handleUpdate = () => {
		const id = props.comment._id;
		const text = formData.comment;
		updateComment({ id, text });
	};

	const handleDelete = () => {
		const id = props.comment._id;
		toggleModal(false);
		deleteComment(id);
	};

	return (
		<div className="comment__item">
			<div className="comment__header">
				<div className="comment__title">
					<span className="comment__topic-name">
						{props.comment.topic.topicName}
					</span>
				</div>
				<span className="comment__time">
					{format(props.comment.createdAt)}
				</span>
			</div>
			<form
				className={
					"comment__main " + (editFormShown ? "comment__form" : "")
				}
				onSubmit={handleSubmit}
			>
				<div className="comment__detail">
					<div className="comment__design">
						<span>Design </span>
						<div className="comment__design-image">
							<img src={design.image} alt="design" />
						</div>
					</div>
					<textarea
						type="text"
						className="comment__content"
						name="comment"
						value={formData.comment || ""}
						onChange={handleChange}
						disabled={!editFormShown}
					/>
				</div>
				<div className="cta">
					<button
						className={
							"btn-edit " + (editFormShown ? "display-none" : "")
						}
						type="button"
						onClick={() => {
							toggleEditForm(true);
						}}
					>
						edit
					</button>
					<button
						className={
							"btn-save " + (!editFormShown ? "display-none" : "")
						}
						type="submit"
						onClick={handleUpdate}
					>
						save
					</button>
					<button
						className="btn-delete"
						type="button"
						onClick={() => {
							toggleModal(!modalShown);
						}}
					>
						delete
					</button>
				</div>
			</form>
			<NotificationModal
				shown={modalShown}
				close={() => {
					toggleModal(false);
				}}
				handleConfirm={handleDelete}
			>
				Are you want to permanently delete this Comment?
			</NotificationModal>
		</div>
	);
}

export default UserComment;
