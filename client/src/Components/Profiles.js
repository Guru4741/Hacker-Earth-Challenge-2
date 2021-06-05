import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';
import Profile from './Profile';

const Profiles = () => {

    const [profiles, setProfiles] = useState("");    

    useEffect(() => {
        const url = "http://localhost:7777/profiles";
        axios.get(url)
            .then(response => {                
                setProfiles(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    },[])

    return (
        <Container>
            <Row className="text-center my-4">
                <Col>
                    <h1>Profiles</h1>
                </Col>                
            </Row>
            <Row className="justify-content-center">
            {
                profiles ? profiles.map((data, i) => {
                    return <Profile key={i} data={data}/>})
                :
                 <Spinner animation="border" variant="primary" />
            }
            
            </Row>
            <Row className="my-4 text-center">
                <Col>
                <Link to="/">
                    Back to Home Page
                </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Profiles;
