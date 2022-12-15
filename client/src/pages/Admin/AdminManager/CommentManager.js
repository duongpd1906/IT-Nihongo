import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Loading from "../../../components/Loading";
import Notification from "../../../components/Notification";
import NotificationModal from "../../../components/NotificationModal";
import { useAppContext } from "../../../context/appContext";
import "./AdminManager.css";

function AdminCommentManager() {
	const [modalShown, toggleModal] = useState(false);

	const { getAllComments, allComments, deleteComment, isLoading, showAlert } =
		useAppContext();

	const [commentToDelete, setCommentToDelete] = useState("");

	useEffect(() => {
		getAllComments();
	}, []);

	const handleDelete = () => {
		toggleModal(false);
		deleteComment(commentToDelete);
	};

	if (isLoading) {
		return <Loading center />;
	}

	return (
		<div className="admin-manager">
			{showAlert && <Notification />}
			<h2 className="admin-title">Comment Manager</h2>
			<Table striped bordered responsive className="admin-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Topic Name</th>
						<th>Design</th>
						<th>Text</th>
						<th>Author</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{allComments.map((comment, index) => (
						<tr>
							<td>{index + 1}</td>
							<td>{comment.topic.topicName}</td>
							<td>
								<img
									src={
										comment.topic.list_img.filter(
											(image) =>
												image._id === comment.design
										)[0].image
									}
									alt={comment.design_img}
								/>
							</td>
							<td>{comment.text}</td>
							<td>{comment.createdBy.username}</td>
							<td>
								<div className="cta">
									<button
										className="btn-delete"
										onClick={() => {
											toggleModal(!modalShown);
											setCommentToDelete(comment._id);
										}}
									>
										delete
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
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

export default AdminCommentManager;
