import React from 'react';
import Contact from './contact';
import { Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ProjectsImage from '../Assets/projectsImage.jpg';
import ResumeImage from '../Assets/resumeImage.jpg';

const About = () => {
    return(
        <div>
            <p>Hello, I am Chelsea, a full-stack software engineer with two year of experience designing and developing applications as well as managing teams of developers.  I specialize in front-end frameworks and am ready to help you launch your next new idea </p>
        </div>
    )
}

const Home = () => {
    return (
        <div className='page'>
            <Container className='home-page'>
                <Row>
                    <Col xs={9} md={6} className='box first-box'></Col>
                    <Col xs={9} md={6} className='box second-box'> <Link to="/Projects"><img src={ProjectsImage}/></Link></Col>
                </Row>

                <Row>
                    <Col xs={9} md={4} className='box third-box'>{About()}</Col>
                    <Col xs={9} md={4} className='box middle-box'></Col>
                    <Col xs={9} md={4} className='box fifth-box'><Contact/></Col>
                </Row>


                <Row>
                    <Col xs={9} md={6} className='box sixth-box'><img src={ResumeImage}/></Col>
                    <Col xs={9} md={6} className='box final-box'></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home

