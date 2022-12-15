import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Notification from "../../../components/Notification";
import NotificationModal from "../../../components/NotificationModal";
import { useAppContext } from "../../../context/appContext";
import "./AdminManager.css";

function AdminDesignManager() {
	const [modalShown, toggleModal] = useState(false);

	const designItem = {
		id: 1,
		topic_name: "Cafe",
		design_img:
			"https://images.adsttc.com/media/images/518d/5d69/b3fc/4be4/2e00/0019/large_jpg/DonCafe_8.jpg?1432542274",
		author: "Phung Dinh Duong",
	};

	const designList = [];

	const { getAllTopicsAdmin, allTopics, showAlert } = useAppContext();

	useEffect(() => {
		getAllTopicsAdmin();
	}, []);

	const getDesign = () => {
		allTopics.forEach((topic) => {
			const topicName = topic.topicName;
			topic.list_img.forEach((image) => {
				designList.push({ topicName, image });
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
			>
				Are you want to permanently delete this Design?
			</NotificationModal>
		</div>
	);
}

export default AdminDesignManager;
