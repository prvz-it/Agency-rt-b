import { Col, Container, Row } from 'react-bootstrap';
import featuresIcon6 from '../../assets/features-6.png';
import featuresIcon3 from '../../assets/features-3.png';
import featuresIcon1 from '../../assets/features-1.png';
import benefitLogo1 from '../../assets/aboutUs_benefitLogo1.png';
import benefitLogo2 from '../../assets/aboutUs_benefitLogo2.png';
import benefitLogo3 from '../../assets/aboutUs_benefitLogo3.png';
import benefitLogo4 from '../../assets/aboutUs_benefitLogo4.png';
import benefitLogo5 from '../../assets/aboutUs_benefitLogo5.png';
import './AboutUs_benefits.css';

const AboutUs_benefits = () => {
  return (
    <>
      <section id='aboutUs_benefit'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className='aboutUs_benefitTop'>
                        <h2>The benefits of working with us</h2>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={4} md={6} sm={6}>
                    <div className='aboutUs_benefitBox'>
                        <img src={featuresIcon6} alt="features-6" />
                        <div className="aboutUs_benefitBox-text">
                            <h3>Customize with ease</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className='aboutUs_benefitBox'>
                        <img src={featuresIcon3} alt="features-3" />
                        <div className="aboutUs_benefitBox-text">
                            <h3>Perfectly Responsive</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className='aboutUs_benefitBox'>
                        <img src={featuresIcon1} alt="features-1" />
                        <div className="aboutUs_benefitBox-text">
                            <h3>Friendly Support</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center justify-content-space-between mt-5'>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='aboutUs_benefitLogo_text'>
                        <h2>100.000+</h2>
                        <p>Agency Users</p>
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='aboutUs_benefitLogo'>
                        <img src={benefitLogo1} alt="aboutUs_benefitLogo1" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='aboutUs_benefitLogo'>
                        <img src={benefitLogo2} alt="aboutUs_benefitLogo2" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='aboutUs_benefitLogo'>
                        <img src={benefitLogo3} alt="aboutUs_benefitLogo3" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='aboutUs_benefitLogo'>
                        <img src={benefitLogo4} alt="aboutUs_benefitLogo4" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='aboutUs_benefitLogo'>
                        <img src={benefitLogo5} alt="aboutUs_benefitLogo5" />
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutUs_benefits