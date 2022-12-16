import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Notification from "../../../components/Notification";
import NotificationModal from "../../../components/NotificationModal";
import { useAppContext } from "../../../context/appContext";
import "./AdminManager.css";

function AdminDesignManager() {
	const [modalShown, toggleModal] = useState(false);

	const designList = [];

	const { getAllTopicsAdmin, allTopics, showAlert, deleteDesign } =
		useAppContext();

	const [designToDelete, setDesignToDelete] = useState("");
	const [topicOfDesign, setTopicOfDesign] = useState("");

	useEffect(() => {
		getAllTopicsAdmin();
	}, []);

	const handleDelete = () => {
		toggleModal(false);
		deleteDesign(topicOfDesign, designToDelete);
	};

	const getDesign = () => {
		allTopics.forEach((topic) => {
			const topicName = topic.topicName;
			const topicId = topic._id;
			topic.list_img.forEach((image) => {
				designList.push({ topicId, topicName, image });
			});
		});
	};

	getDesign();

	return (
		<div className="admin-manager">
			{showAlert && <Notification />}
			<h2 className="admin-title">Design Manager</h2>
			<Table striped bordered responsive className="admin-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Topic Name</th>
						<th>Design</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{designList.map((design, index) => (
						<tr>
							<td>{index + 1}</td>
							<td>{design.topicName}</td>
							<td>
								<img
									src={design.image.image}
									alt={design.image.image}
								/>
							</td>
							<td>
								<div className="cta">
									<button
										className="btn-delete"
										onClick={() => {
											toggleModal(!modalShown);
											setDesignToDelete(design.image._id);
											setTopicOfDesign(design.topicId);
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
				このデザインを完全に削除しますか?
			</NotificationModal>
		</div>
	);
}

export default AdminDesignManager;
