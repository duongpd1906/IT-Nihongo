import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import "./Topic.css";

const Topic = (props) => {
	const { src, name_topic, list_img } = props;

	const { handleChange } = useAppContext();

	const navigate = useNavigate();

	const handleValueChange = (e) => {
		const name = e.target.name;
		let value;
		if (e.target.value === "X") {
			value = true;
		} else {
			value = false;
		}
		handleChange({ name, value });
		navigate("/design", {
			state: { name: name_topic, list_img: list_img, src: src },
		});
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
										inline
										label="X"
										value="X"
										name="vote"
										type={type}
										id={`inline-${type}-X`}
									/>
									<Form.Check
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
