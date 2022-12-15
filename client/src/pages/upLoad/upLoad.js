import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading.js";
import NeedToLogin from "../../components/NeedToLogin.js";
import Notification from "../../components/Notification.js";
import { useAppContext } from "../../context/appContext";
import "./upload.css";

function UpLoad() {
	const { state } = useLocation();

	const [selectedFile, setSelectedFile] = useState(null);
	const [topicName, setTopicName] = useState(
		state.topic ? state.topic : null
	);
	const [modalShow, setModalShow] = useState(false);

	const onTextChange = (e) => {
		setTopicName(e.target.value);
	};
	const onFileChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const onFileUpload = () => {
		const formData = new FormData();

		formData.append("image", selectedFile);

		formData.append("topicName", topicName);

		displayAlert();

		addTopic(formData);
	};

	const fileData = () => {
		if (selectedFile) {
			return (
				<div>
					<h2>File Details:</h2>
					<p>File Name: {selectedFile.name}</p>

					<p>File Type: {selectedFile.type}</p>

					<p>
						Last Modified:{" "}
						{selectedFile.lastModifiedDate.toDateString()}
					</p>
					<img
						src={URL.createObjectURL(selectedFile)}
						alt="..."
						width="250"
						height="250"
					></img>
				</div>
			);
		} else {
			return (
				<div>
					<br />
				</div>
			);
		}
	};

	const showModal = () => {
		setModalShow(true);
	};

	const { addTopic, showAlert, displayAlert, user, isLoading } =
		useAppContext();

	if (isLoading) {
		return <Loading center />;
	}

	return (
		<div className="upload-form">
			{showAlert && <Notification />}
			<div className="upload-container">
				<div className="upload-title">
					<h1>新しいトピックを追加</h1>
				</div>
				<div className="new-topic-name">
					<p>トピックの名</p>
					<input
						type="text"
						placeholder="Type the name of new topic"
						onChange={onTextChange}
						value={topicName}
						disabled={state.topic ? true : false}
					></input>
				</div>

				<div className="upfile-form">
					<input
						type="file"
						className="upfile-input"
						onChange={onFileChange}
					/>
					<button
						className="upload-form__button-submit"
						onClick={user ? onFileUpload : showModal}
					>
						upload
					</button>
				</div>
				{fileData()}
			</div>
			<NeedToLogin show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	);
}

export default UpLoad;
