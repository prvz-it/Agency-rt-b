import { Col, Container, Row } from 'react-bootstrap';
import featuresSupport01 from '../../assets/featuresSupport.png';
import './Features_support.css';

const Features_support = () => {
  return (
    <>
      <section id='featuresSupport'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} md={12}>
                    <div className="featuresSupportLeft">
                        <h3>24/7 Support</h3>
                        <h2>Working with us, you will be getting 24/7 priority support</h2>
                        <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn. Public access to papers is provided by the.</p>
                    </div>
                </Col>
                <Col lg={{span:5, offset:1}} md={12}>
                    <div className="featuresSupportRight">
                        <img src={featuresSupport01} alt="featuresSupport image1" />
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Features_support