import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Profile = ({data}) => {

    return (
        <Col className="mb-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://localhost:7777/${data.image}`} />
                <Card.Body className="text-center">
                <Card.Title>{data.name}</Card.Title>
                </Card.Body>
            </Card>
      </Col>       
    )
}

export default Profile;