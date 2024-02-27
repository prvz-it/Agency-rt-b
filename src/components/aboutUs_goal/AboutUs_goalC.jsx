import { Col, Container, Row } from 'react-bootstrap';
import aboutUs_goalImg from '../../assets/aboutUs_goal.png';
import './AboutUs_goalC.css';

const AboutUs_goalC = () => {
  return (
    <>
      <section id='aboutUs_goal'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="aboutUs_goalMain">
                <Row>
                  <Col lg={6} md={6}>
                    <div className="aboutUs_goalLeft">
                      <h3>Who we are</h3>
                      <h2>Goal focussed</h2>
                      <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="aboutUs_goalRight">
                      <h2>Continuous improvement</h2>
                      <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="aboutUs_goalBt">
                <img src={aboutUs_goalImg} alt="aboutUs_goal" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutUs_goalC