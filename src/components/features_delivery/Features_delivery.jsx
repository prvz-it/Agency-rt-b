import { Col, Container, Row } from 'react-bootstrap';
import featuresDelivery01 from '../../assets/featuresDelivery.png';
import './Features_delivery.css';

const Features_delivery = () => {
  return (
    <>
      <section id='featuresDelivery'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={{span:5, order:1}} md={{span:12, order:2}} sm={{span:12, order:2}} xs={{span:12, order:2}}>
                    <div className="featuresDeliveryRight">
                        <img src={featuresDelivery01} alt="featuresDelivery image 1" />
                    </div>
                </Col>
                <Col lg={{span:6, offset:1, order:2}} md={{span:12, order:1}} sm={{span:12, order:1}} xs={{span:12, order:1}}>
                    <div className="featuresDeliveryLeft">
                        <h3>Quick Delivery</h3>
                        <h2>Guaranteed 1 week delivery for standard five pager website</h2>
                        <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn. Public access to papers is provided by the.</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Features_delivery