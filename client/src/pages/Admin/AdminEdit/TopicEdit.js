import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
import Notification from "../../../components/Notification";
import NotificationModal from "../../../components/NotificationModal";
import { useAppContext } from "../../../context/appContext";
import "./AdminEdit.css";

function AdminTopicEdit() {
	const { state } = useLocation();

	const { getAllTopicsAdmin, allTopics, showAlert, deleteDesign } =
		useAppContext();

	useEffect(() => {
		getAllTopicsAdmin();
	}, []);

	const topic = allTopics.filter((topic) => topic._id === state.topicId)[0];

	const [modalShown, toggleModal] = useState(false);

	const [designToDelete, setDesignToDelete] = useState("");
	const [topicOfDesign, setTopicOfDesign] = useState("");

	const handleDelete = () => {
		toggleModal(false);
		deleteDesign(topicOfDesign, designToDelete);
	};

	return (
		<div className="admin-edit">
			{showAlert && <Notification />}
			<h2 className="admin-title">Edit Topic</h2>
			<div>
				<form
					className="admin-form"
					onSubmit={(e) => e.preventDefault()}
				>
					<div className="admin-form-group">
						<label htmlFor="topic-name">Topic Name</label>
						<input type="text" value={topic.topicName} />
					</div>
					<button className="admin-form-button">Save</button>
				</form>
			</div>
			<div>
				<h3 className="admin-sub-title">Design of Topic</h3>
				<Table striped bordered responsive className="admin-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Design</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{topic.list_img.map((design, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>
									<img
										src={design.image}
										alt={design.design_img}
									/>
								</td>
								<td>
									<div className="cta">
										<button
											className="btn-delete"
											onClick={() => {
												toggleModal(!modalShown);
												setDesignToDelete(design._id);
												setTopicOfDesign(state.topicId);
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
		</div>
	);
}

export default AdminTopicEdit;
