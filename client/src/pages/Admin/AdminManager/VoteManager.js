import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Loading from "../../../components/Loading";
import Notification from "../../../components/Notification";
import NotificationModal from "../../../components/NotificationModal";
import { useAppContext } from "../../../context/appContext";
import "./AdminManager.css";

function AdminVoteManager() {
	const [modalShown, toggleModal] = useState(false);

	const { getAllVotes, allVotes, isLoading, deleteVote, showAlert } =
		useAppContext();

	const [voteToDelete, setVoteToDelete] = useState("");

	useEffect(() => {
		getAllVotes();
	}, []);

	const handleDelete = () => {
		toggleModal(false);
		deleteVote(voteToDelete);
	};

	if (isLoading) {
		return <Loading center />;
	}

	return (
		<div className="admin-manager">
			{showAlert && <Notification />}
			<h2 className="admin-title">Vote Manager</h2>
			<Table striped bordered responsive className="admin-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Topic Name</th>
						<th>Vote Option</th>
						<th>Design</th>
						<th>Detail</th>
						<th>Author</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{allVotes.map((vote, index) => (
						<tr>
							<td>{index + 1}</td>
							<td>{vote.topic.topicName}</td>
							<td>{vote.vote ? "YES" : "NO"}</td>
							<td>
								{vote.design ? (
									<img
										src={
											vote.topic.list_img.filter(
												(image) =>
													image._id === vote.design
											)[0].image
										}
										alt={vote.design_img}
									/>
								) : (
									""
								)}
							</td>
							<td>
								{vote.detail ? (
									<>
										{" "}
										<div className="detail__item">
											<span>Amount: </span>
											<span>{vote.detail.amount}</span>
										</div>
										<div className="detail__item">
											<span>Position: </span>
											<span>{vote.detail.position}</span>
										</div>
										<div className="detail__item">
											<span>Description: </span>
											<span>
												{vote.detail.description}
											</span>
										</div>
									</>
								) : (
									""
								)}
							</td>
							<td>{vote.createdBy.username}</td>
							<td>
								<div className="cta">
									<button
										className="btn-delete"
										onClick={() => {
											toggleModal(!modalShown);
											setVoteToDelete(vote._id);
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
				この投票を完全に削除しますか?
			</NotificationModal>
		</div>
	);
}

export default AdminVoteManager;
