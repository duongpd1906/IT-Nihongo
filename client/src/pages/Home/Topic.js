import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import "./Topic.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Topic = (props) => {
	const { src, name_topic, list_img, vote, topicId } = props;

	const { handleChange, handleTopicChange, createOrUpadateVote } =
		useAppContext();

	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const [modalTitle, setModalTitle] = useState("");
	const [voteYes, setVoteYes] = useState(true);

	const handleClose = () => setShow(false);

	const [checkedX, setCheckedX] = useState(false);
	const [checkedO, setCheckedO] = useState(false);

	useEffect(() => {
		if (vote) {
			if (vote.vote) {
				setCheckedX(true);
			} else {
				setCheckedO(true);
			}
		}
	}, []);

	const handleVoteYes = () => {
		setModalTitle("ban co muon chon yes cho muc nay");
		setShow(true);
		const name = "vote";
		const value = true;
		handleTopicChange({ topicId });
		handleChange({ name, value });
	};

	const handleVoteNo = () => {
		setModalTitle("ban co muon chon no cho muc nay");
		setShow(true);
		setVoteYes(false);
		const name = "vote";
		const value = false;
		handleChange({ name, value });
		handleTopicChange({ topicId });
	};

	const handleOK = () => {
		if (voteYes) {
			navigate("/design", {
				state: {
					name: name_topic,
					list_img: list_img,
					src: src,
					topicId: topicId,
				},
			});
		} else {
			createOrUpadateVote();
			window.location.reload(false);
		}
	};

	return (
		<div className="topic">
			<Card className="card_style">
				<Card.Img
					className="card_img"
					variant="top"
					src={src}
					onClick={() =>
						navigate("/design", {
							state: {
								name: name_topic,
								list_img: list_img,
								src: src,
								topicId: topicId,
							},
						})
					}
				/>

				<Card.Body>
					<Card.Title>{name_topic}</Card.Title>
					<Card.Text>
						<Form>
							{["radio"].map((type) => (
								<div key={`inline-${type}`} className="mb-3">
									<Form.Check
										checked={checkedX}
										inline
										label="X"
										value="X"
										name="vote"
										type={type}
										id={`inline-${type}-X`}
										onClick={handleVoteYes}
									/>
									<Form.Check
										checked={checkedO}
										inline
										label="O"
										value="O"
										name="vote"
										type={type}
										id={`inline-${type}-O`}
										onClick={handleVoteNo}
									/>
								</div>
							))}
						</Form>
					</Card.Text>
				</Card.Body>
			</Card>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleOK}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Topic;
