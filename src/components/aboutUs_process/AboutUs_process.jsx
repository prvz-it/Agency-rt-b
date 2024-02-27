import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs_process.css';

const AboutUs_process = () => {
  return (
    <>
      <section id='process'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="processTop">
                        <h2>The process we follow</h2>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                  <div className="process_box">
                    <div className="process_circle"></div>
                  </div>
                  <div className="process_text">
                    <h3>Planning</h3>
                    <p>We are always open to discuss your project and improve your online presence.</p>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                  <div className="process_box">
                    <div className="process_circle"></div>
                  </div>
                  <div className="process_text">
                    <h3>Conception</h3>
                    <p>We are always open to discuss your project and improve your online presence.</p>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                  <div className="process_box">
                    <div className="process_circle"></div>
                  </div>
                  <div className="process_text">
                    <h3>Design</h3>
                    <p>We are always open to discuss your project and improve your online presence.</p>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                  <div className="process_box">
                    <div className="process_circle"></div>
                  </div>
                  <div className="process_text">
                    <h3>Development</h3>
                    <p>We are always open to discuss your project and improve your online presence.</p>
                  </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutUs_process