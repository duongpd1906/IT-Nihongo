import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./Topic.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Topic = (props) => {
	const { src, name_topic } = props;

	const [show, setShow] = useState(false);
	const [modalTitle, setModalTitle] = useState("");

	const handleClose = () => setShow(false);

	const [check] = useState(false);

	const handleClick = () => {
		setModalTitle("you need to login first");
		setShow(true);
	};

	const handleOK = () => setShow(false);
	return (
		<div className="topic">
			<Card className="card_style">
				<Card.Img
					className="card_img"
					variant="top"
					src={src}
					onClick={handleClick}
				/>

				<Card.Body>
					<Card.Title>{name_topic}</Card.Title>
					<Card.Text>
						<Form>
							{["radio"].map((type) => (
								<div key={`inline-${type}`} className="mb-3">
									<Form.Check
										checked={check}
										inline
										label="X"
										value="X"
										name="vote"
										type={type}
										id={`inline-${type}-X`}
										onClick={handleClick}
									/>
									<Form.Check
										checked={check}
										inline
										label="O"
										value="O"
										name="vote"
										type={type}
										id={`inline-${type}-O`}
										onClick={handleClick}
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
				<Modal.Body>
					<p>
						Click <a href="/login">here</a> to login
					</p>
				</Modal.Body>
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
