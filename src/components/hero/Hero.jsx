import { Col, Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import heroImg from '../../assets/hero.png';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section id='hero'>
        <Container>
          <Row className='hero-main align-items-center'>
            <Col lg={6}>
              <div className="hero-left">
                <h1>Building stellar websites for early startups</h1>
                <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                <div className="hero-btn">
                  <a href="#">View our work <FaLongArrowAltRight /></a>
                  <a href="#">View pricing <FaLongArrowAltRight /></a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-right">
                <img src={heroImg} alt="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero