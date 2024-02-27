import { Col, Container, Row } from 'react-bootstrap';
import aboutUs_heroImg from '../../assets/aboutUs_hero.png';
import './AboutUs_hero.css';

const AboutUs_hero = () => {
  return (
    <>
       <section id='aboutUs_hero'>
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="aboutUs_heroLeft">
                        <h3>About us</h3>
                        <h1>Our designs solve problems</h1>
                        <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                    </div>
                </Col>
                <Col lg={{span:5, offset:2}}>
                    <div className="aboutUs_heroRight">
                        <img src={aboutUs_heroImg} alt="aboutUs_heroImg" />
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    </>
  )
}

export default AboutUs_hero