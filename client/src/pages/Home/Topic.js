import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import "./Topic.css";

const Topic = (props) => {
	const { src, name_topic, list_img, vote, topicId } = props;

	const { handleChange, handleTopicChange } = useAppContext();

	const navigate = useNavigate();

	const handleValueChange = (e) => {
		const name = e.target.name;
		let value;
		if (e.target.value === "X") {
			value = true;
		} else {
			value = false;
		}
		handleTopicChange({ topicId });
		handleChange({ name, value });
		navigate("/design", {
			state: { name: name_topic, list_img: list_img, src: src },
		});
	};

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
							},
						})
					}
				/>

				<Card.Body>
					<Card.Title>{name_topic}</Card.Title>
					<Card.Text>
						<Form onChange={handleValueChange}>
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
									/>
									<Form.Check
										checked={checkedO}
										inline
										label="O"
										value="O"
										name="vote"
										type={type}
										id={`inline-${type}-O`}
									/>
								</div>
							))}
						</Form>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Topic;
