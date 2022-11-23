import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import "./Topic.css";

const Topic = (props) => {
    const { src, name } = props;
    return (
        <div className="topic">
            <Card className="card_style" style={{ width: '18rem', height: '13rem' }}>
                <Card.Img className="card_img" variant="top" src={src} />

                <Card.Body style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <Form>
                            {['radio'].map((type) => (
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
}

export default Topic;