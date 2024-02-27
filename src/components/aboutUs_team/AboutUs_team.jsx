import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import aboutUs_teamCard1 from '../../assets/aboutUs_teamCard1.png';
import aboutUs_teamCard2 from '../../assets/aboutUs_teamCard2.png';
import aboutUs_teamCard3 from '../../assets/aboutUs_teamCard3.png';
import './AboutUs_team.css';

const AboutUs_team = () => {
  return (
    <>
      <section id='aboutUs_team'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={4}>
                    <div className='aboutUs_teamTop'>
                        <h2>Meet our team</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={6} sm={6}>
                    <div className="aboutUs_teamCard">
                        <div className="aboutUs_teamCard_I">
                            <img src={aboutUs_teamCard1} alt="aboutUs_teamCard-1" />
                            <div className="aboutUs_teamCardOv">
                                <div className="aboutUs_teamCardIcon">
                                    <ul>
                                        <li><a href="#"><FaFacebook/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="aboutUs_teamCard_text">
                            <h4>John Smith</h4>
                            <p>CEO</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div className="aboutUs_teamCard">
                        <div className="aboutUs_teamCard_I">
                            <img src={aboutUs_teamCard2} alt="aboutUs_teamCard-2" />
                            <div className="aboutUs_teamCardOv">
                                <div className="aboutUs_teamCardIcon">
                                    <ul>
                                        <li><a href="#"><FaFacebook/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="aboutUs_teamCard_text">
                            <h4>Simon Adams</h4>
                            <p>CTO</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div className="aboutUs_teamCard">
                        <div className="aboutUs_teamCard_I">
                            <img src={aboutUs_teamCard3} alt="aboutUs_teamCard-3" />
                            <div className="aboutUs_teamCardOv">
                                <div className="aboutUs_teamCardIcon">
                                    <ul>
                                        <li><a href="#"><FaFacebook/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="aboutUs_teamCard_text">
                            <h4>Paul Jones</h4>
                            <p>Design Lead</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div className="aboutUs_teamCard">
                        <div className="aboutUs_teamCard_I">
                            <img src={aboutUs_teamCard1} alt="aboutUs_teamCard-1" />
                            <div className="aboutUs_teamCardOv">
                                <div className="aboutUs_teamCardIcon">
                                    <ul>
                                        <li><a href="#"><FaFacebook/></a></li>
                                        <li><a href="#"><FaTwitter/></a></li>
                                        <li><a href="#"><FaLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="aboutUs_teamCard_text">
                            <h4>Sara Hardin</h4>
                            <p>Project Manager</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutUs_team