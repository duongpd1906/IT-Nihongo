import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import NotificationModal from "../../../components/NotificationModal";
import { useAppContext } from "../../../context/appContext";
import "./AdminManager.css";

function AdminTopicManager() {
	const [modalShown, toggleModal] = useState(false);

	const { getAllTopicsAdmin, allTopics } = useAppContext();

	useEffect(() => {
		getAllTopicsAdmin();
	}, []);

	return (
		<div className="admin-manager">
			<h2 className="admin-title">Topic Manager</h2>
			<Table striped bordered responsive className="admin-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Topic Name</th>
						<th>Design-Qty</th>
						<th>Author</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{allTopics.map((topic, index) => (
						<tr>
							<td>{index + 1}</td>
							<td>{topic.topicName}</td>
							<td>{topic.list_img.length}</td>
							<td>{topic.createdBy.username}</td>
							<td className="cta">
								<button className="btn-edit">edit</button>
								<button
									className="btn-delete"
									onClick={() => {
										toggleModal(!modalShown);
									}}
								>
									delete
								</button>
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
			>
				Are you want to permanently delete this Topic?
			</NotificationModal>
		</div>
	);
}

export default AdminTopicManager;
