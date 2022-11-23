import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { useAppContext } from "../../context/appContext";
import "./ListTopic.css";
import Topic from "./Topic.js";


const ListTopic = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const {getAllTopics, listTopics} = useAppContext()

    useEffect(() => {
        getAllTopics()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="list-topic">
            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={null} >
                {
                    listTopics.map(list =>
                        <Carousel.Item>
                            <Container>
                                {
                                    list.topics.map(topic =>
                                        <Topic name={topic.topicName} src={topic.list_img[0].image}></Topic>
                                    )
                                }
                            </Container>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    );
}

export default ListTopic;