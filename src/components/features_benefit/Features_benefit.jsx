import { Col, Container, Row } from 'react-bootstrap';
import featuresIcon6 from '../../assets/features-6.png';
import featuresIcon3 from '../../assets/features-3.png';
import featuresIcon1 from '../../assets/features-1.png';
import './Features_benefit.css';

const Features_benefit = () => {
  return (
    <>
      <section id='featuresBenefit'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className='featuresBenefitTop'>
                        <h2>The benefits of working with our team</h2>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={4} md={6} sm={6}>
                    <div className='featuresBenefitBox'>
                        <img src={featuresIcon6} alt="features-6" />
                        <div className="featuresBenefitBox-text">
                            <h3>Customize with ease</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className='featuresBenefitBox'>
                        <img src={featuresIcon3} alt="features-3" />
                        <div className="featuresBenefitBox-text">
                            <h3>Perfectly Responsive</h3>
                            <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className='featuresBenefitBox'>
                        <img src={featuresIcon1} alt="features-1" />
                        <div className="featuresBenefitBox-text">
                            <h3>Friendly Support</h3>
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

export default Features_benefit