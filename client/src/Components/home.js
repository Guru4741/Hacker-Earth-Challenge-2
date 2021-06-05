import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt, faCoffee } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import './home.scss';

const Home = () => {

    const fileRef = useRef(null);

    const [file, setFile] = useState("");
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);

    const changeHandler = (e) => {
        setFile(e.target.files[0])
    }

    const clickHandler = () => {
        fileRef.current.click();
    }

    const uploadHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('profile', file);
        formData.append('name', name);
        const url = "http://localhost:7777/profile";
        debugger;
        axios.post(url, formData, {
            headers: {
              'content-type': 'multipart/form-data'
            }
          })
            .then(res => {
                console.log(res.data);
                setFile("");
                setName("");
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 1500)
            })
            .catch(err => console.log(err))

    }

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <Container className="box">
            <Row className="box__header">
                <Col className="box__heading">                
                    <h1 className="heading">
                        Upload Files
                    </h1>
                </Col>
            </Row>                
            <Row className="box__form">  
                              
                    <Col>
                    {
                        file ? 
                    <div className="box__image-container">
                        <img src={URL.createObjectURL(file)} alt={file.name} className="box__image"/>
                    </div>
                    : 
                    <div className="box__file-container">
                        <input type="file" id="upload" onChange={changeHandler} ref={fileRef}/>
                        <FontAwesomeIcon icon={faCloudUploadAlt} size="3x" color="#007bff"/>
                        <p className="box__upload-text" onClick={clickHandler}>Click here to upload your image.</p>
                    </div>
                    }
                    </Col>
                    <Col>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Please enter your name." value={name} onChange={nameHandler}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={uploadHandler}>
                            Upload
                        </Button>                        
                    </Form>
                    <Alert show={show} variant="success" className="msg msg--success">
                        Profile uploaded successfully !!
                    </Alert>
                    </Col>                
                </Row>            
            <Row className="my-5 text-center">
                <Col>
                    <Link to="/profiles">
                    Show all profiles
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;