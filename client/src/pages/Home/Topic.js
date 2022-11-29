import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Topic.css";

const Topic = (props) => {
	const { src, name, list_img } = props;

	const navigate = useNavigate();

	return (
		<div
			className="topic"
			onClick={() =>
				navigate("/design", {
					state: { name: name, list_img: list_img, src : src },
				})
			}
		>
			<Card className="card_style">
				<Card.Img className="card_img" variant="top" src={src} />

				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>
						<Form>
							{["radio"].map((type) => (
								<div key={`inline-${type}`} className="mb-3">
									<Form.Check
										inline
										label="X"
										name="group1"
										type={type}
										id={`inline-${type}-X`}
									/>
									<Form.Check
										inline
										label="O"
										name="group1"
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
