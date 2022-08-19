import React from 'react';
import Contact from './contact';
import { Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const About = () => {
    return(
        <div>
            <p>Hello, I am Chelsea, a full-stack software engineer with two year of experience designing and developing applications as well as managing teams of developers.  I specialize in front-end frameworks and am ready to help you launch your next new idea </p>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <Container className='home-page'>
                <Row>
                    <Col xs={9} md={6} className='box first-box'></Col>
                    <Col xs={9} md={6} className='box'>
                        <h1>About Me</h1>
                        {About()}
                    </Col>
                </Row>


                <Row>
                    <Col xs={9} md={4} className='box'>
                        <Link to="/Projects">Link</Link>
                        <h1>projects</h1>
                    </Col>
                    <Col xs={9} md={4} className='box'>
                        <h1>picture</h1>
                    </Col>
                    <Col xs={9} md={4} className='box'>
                        <h1>resume</h1>
                    </Col>
                </Row>


                <Row>
                    <Col xs={9} md={6} className='box'>
                        <Contact/>
                    </Col>
                    <Col xs={9} md={6} className='box final-box'></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home

