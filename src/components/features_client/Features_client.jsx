import { Col, Container, Row } from 'react-bootstrap';
import featuresClient01 from '../../assets/featuresClient.png';
import './Features_client.css';

const Features_client = () => {
  return (
    <>
      <section id='featuresClient'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} md={12}>
                    <div className="featuresClientLeft">
                        <h3>Use Client-first</h3>
                        <h2>Top agencies and freelancers around the world use Client-first </h2>
                        <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn. Public access to papers is provided by the.</p>
                    </div>
                </Col>
                <Col lg={{span:5, offset:1}} md={12}>
                    <div className="featuresClientRight">
                        <img src={featuresClient01} alt="featuresClient image1" />
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Features_client