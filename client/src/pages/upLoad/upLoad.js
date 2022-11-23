import React, { useState } from "react";
import Alert from "../../components/Notification.js";
import { useAppContext } from "../../context/appContext";
import "./upload.css";

function UpLoad() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [topicName, setTopicName] = useState(null);

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
					<img src={URL.createObjectURL(selectedFile)} alt="..." width="250" height="250"></img>
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

	const { addTopic } = useAppContext();

	return (
		<div className="upload-form">
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
						onClick={onFileUpload}
					>
						upload
					</button>
				</div>
				{fileData()}
			</div>
			<Alert type="error" title="Success!" content="Upload topic successfully" />
		</div>
	);
}

export default UpLoad;
