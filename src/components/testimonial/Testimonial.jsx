import { Col, Container, Row } from 'react-bootstrap';
import profileImg from '../../assets/testimonial.png';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <>
      <section id="testimonial">
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="testimonial-left">
                        <h2>What our clients say about us</h2>
                        <p>The publishing institution, which also covers the costs of production and distribution.</p>
                    </div>
                </Col>
                <Col lg={{span:7, offset:1}}>
                    <div className="testimonial-right">
                        <h2>"The best agency we've worked with so far. They understand our product and are able to add new features with a great focus."</h2>
                        <div className="testimonial-box">
                            <img src={profileImg} alt="profile image" />
                            <div className="testimonial-profile-text">
                                <h3>Jenny Wilson</h3>
                                <h5>Vice President</h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Testimonial