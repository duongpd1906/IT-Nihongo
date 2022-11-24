import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import "./ListTopic.css";
import Topic from "./Topic.js";

const ListTopic = (props) => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const { getAllTopics, listTopics } = useAppContext();

	const navigate = useNavigate();

	useEffect(() => {
		getAllTopics();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="list-topic">
			<Carousel
				variant="dark"
				activeIndex={index}
				onSelect={handleSelect}
				interval={null}
			>
				{listTopics.map((list) => (
					<Carousel.Item>
						<Container>
							{list.topics.map((topic) => (
								<Topic
									name={topic.topicName}
									src={topic.list_img[0].image}
                                    list_img = {topic.list_img}
								></Topic>
							))}
						</Container>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default ListTopic;
