import { Col, Container, Row } from 'react-bootstrap';
import featuresIcon1 from '../../assets/features-1.png';
import featuresIcon2 from '../../assets/features-2.png';
import featuresIcon3 from '../../assets/features-3.png';
import featuresIcon4 from '../../assets/features-4.png';
import featuresIcon5 from '../../assets/features-5.png';
import featuresIcon6 from '../../assets/features-6.png';
import './Features.css';

const Features = () => {
  return (
    <>
      <section id="features">
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="features-top">
                        <p>Features</p>
                        <h2>Design that solves problems, one product at a time</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6} sm={6}>
                    <div className="featuresBox">
                        <img src={featuresIcon1} alt="features-1" />
                        <div className="featuresBox-text">
                            <h3>Uses Client First</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="featuresBox">
                        <img src={featuresIcon2} alt="features-2" />
                        <div className="featuresBox-text">
                            <h3>Two Free Revision Round</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="featuresBox">
                        <img src={featuresIcon3} alt="features-3" />
                        <div className="featuresBox-text">
                            <h3>Template Customization</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="featuresBox">
                        <img src={featuresIcon4} alt="features-4" />
                        <div className="featuresBox-text">
                            <h3>24/7 Support</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="featuresBox">
                        <img src={featuresIcon5} alt="features-5" />
                        <div className="featuresBox-text">
                            <h3>Quick Delivery</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="featuresBox">
                        <img src={featuresIcon6} alt="features-6" />
                        <div className="featuresBox-text">
                            <h3>Hands-on approach</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Features