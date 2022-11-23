import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import "./ListTopic.css";
import Topic from "./Topic.js";


const ListTopic = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        console.log(selectedIndex);
    };

    const topicList = [
        {
            topics: [
                {
                    name: "コーヒー",
                    image: "https://blog.swio.vn/wp-content/uploads/2021/12/QUAN-CAFE-DEP-SON-TRA-DA-NANG-CHUDU43.COM-Cloud-3.jpg"
                },
                {
                    name: "車の修理サービス",
                    image: "https://xevati.com/wp-content/uploads/2021/10/Gara-o-to-Dai-Thong-da-nang.jpg"
                },
                {
                    name: "モーテル",
                    image: "https://noithatkendesign.vn/storage/app/media/---------Asuoi/mikazuki-japanese-resorts-6.jpg"
                },
                {
                    name: "コーヒー",
                    image: "https://static.vinwonders.com/2022/06/quan-cafe-dep-o-da-nang-banner-1.jpg"
                },
            ]
        },
        {
            topics: [
                {
                    name: "コーヒー",
                    image: "https://blog.swio.vn/wp-content/uploads/2021/12/QUAN-CAFE-DEP-SON-TRA-DA-NANG-CHUDU43.COM-Cloud-3.jpg"
                },
                {
                    name: "車の修理サービス",
                    image: "https://xevati.com/wp-content/uploads/2021/10/Gara-o-to-Dai-Thong-da-nang.jpg"
                },
                {
                    name: "モーテル",
                    image: "https://noithatkendesign.vn/storage/app/media/---------Asuoi/mikazuki-japanese-resorts-6.jpg"
                },
            ]
        }
    ]

    return (
        <div className="list-topic">
            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={null} >
                {
                    topicList.map(list =>
                        <Carousel.Item>
                            <Container>
                                {
                                    list.topics.map(topic =>
                                        <Topic name={topic.name} src={topic.image}></Topic>
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