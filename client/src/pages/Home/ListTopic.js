import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./ListTopic.css";
import Topic from "./Topic.js";

const ListTopic = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        console.log(selectedIndex);
    };
    return (
        <div className="list-topic">
            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={null}  loop={false}>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col><Topic name="コーヒー" src="https://blog.swio.vn/wp-content/uploads/2021/12/QUAN-CAFE-DEP-SON-TRA-DA-NANG-CHUDU43.COM-Cloud-3.jpg"></Topic></Col>
                            <Col><Topic name="車の修理サービス" src="https://xevati.com/wp-content/uploads/2021/10/Gara-o-to-Dai-Thong-da-nang.jpg"></Topic></Col>
                        </Row>
                        <Row>
                            <Col><Topic name="モーテル" src="https://noithatkendesign.vn/storage/app/media/---------Asuoi/mikazuki-japanese-resorts-6.jpg"></Topic></Col>
                            <Col><Topic name="コーヒー" src="https://static.vinwonders.com/2022/06/quan-cafe-dep-o-da-nang-banner-1.jpg"></Topic></Col>
                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col><Topic name="コーヒー" src="https://blog.swio.vn/wp-content/uploads/2021/12/QUAN-CAFE-DEP-SON-TRA-DA-NANG-CHUDU43.COM-Cloud-3.jpg"></Topic></Col>
                            <Col><Topic name="車の修理サービス" src="https://xevati.com/wp-content/uploads/2021/10/Gara-o-to-Dai-Thong-da-nang.jpg"></Topic></Col>
                        </Row>
                        <Row>
                            <Col><Topic name="モーテル" src="https://noithatkendesign.vn/storage/app/media/---------Asuoi/mikazuki-japanese-resorts-6.jpg"></Topic></Col>
                            {/* <Col><Topic  name = "コーヒー" src="https://static.vinwonders.com/2022/06/quan-cafe-dep-o-da-nang-banner-1.jpg"></Topic></Col> */}
                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col><Topic name="コーヒー" src="https://blog.swio.vn/wp-content/uploads/2021/12/QUAN-CAFE-DEP-SON-TRA-DA-NANG-CHUDU43.COM-Cloud-3.jpg"></Topic></Col>
                            <Col><Topic name="車の修理サービス" src="https://xevati.com/wp-content/uploads/2021/10/Gara-o-to-Dai-Thong-da-nang.jpg"></Topic></Col>
                        </Row>
                        <Row>
                            <Col><Topic name="モーテル" src="https://noithatkendesign.vn/storage/app/media/---------Asuoi/mikazuki-japanese-resorts-6.jpg"></Topic></Col>
                            {/* <Col><Topic  name = "コーヒー" src="https://static.vinwonders.com/2022/06/quan-cafe-dep-o-da-nang-banner-1.jpg"></Topic></Col> */}
                        </Row>
                    </Container>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default ListTopic;