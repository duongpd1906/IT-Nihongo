import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Topic from "./Topic.js";
import { useState } from "react";
import "./ListTopic.css"

const ListTopic = (props) => {

    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} >
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col><Topic name="コーヒー" src="https://blog.swio.vn/wp-content/uploads/2021/12/QUAN-CAFE-DEP-SON-TRA-DA-NANG-CHUDU43.COM-Cloud-3.jpg"></Topic></Col>
                        <Col><Topic name = "車の修理サービス" src="https://xevati.com/wp-content/uploads/2021/10/Gara-o-to-Dai-Thong-da-nang.jpg"></Topic></Col>
                    </Row>
                    <Row>
                        <Col><Topic  name = "モーテル" src="https://noithatkendesign.vn/storage/app/media/---------Asuoi/mikazuki-japanese-resorts-6.jpg"></Topic></Col>
                        <Col><Topic  name = "コーヒー" src="https://static.vinwonders.com/2022/06/quan-cafe-dep-o-da-nang-banner-1.jpg"></Topic></Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container>
                    <Row>
                        <Col><Topic name="コーヒー" src="https://blog.swio.vn/wp-content/uploads/2021/12/QUAN-CAFE-DEP-SON-TRA-DA-NANG-CHUDU43.COM-Cloud-3.jpg"></Topic></Col>
                        <Col><Topic name = "車の修理サービス" src="https://xevati.com/wp-content/uploads/2021/10/Gara-o-to-Dai-Thong-da-nang.jpg"></Topic></Col>
                    </Row>
                    <Row>
                        <Col><Topic  name = "モーテル" src="https://noithatkendesign.vn/storage/app/media/---------Asuoi/mikazuki-japanese-resorts-6.jpg"></Topic></Col>
                        {/* <Col><Topic  name = "コーヒー" src="https://static.vinwonders.com/2022/06/quan-cafe-dep-o-da-nang-banner-1.jpg"></Topic></Col> */}
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}

export default ListTopic;