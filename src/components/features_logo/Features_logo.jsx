import { Col, Container, Row } from 'react-bootstrap';
import benefitLogo1 from '../../assets/aboutUs_benefitLogo1.png';
import benefitLogo2 from '../../assets/aboutUs_benefitLogo2.png';
import benefitLogo3 from '../../assets/aboutUs_benefitLogo3.png';
import benefitLogo4 from '../../assets/aboutUs_benefitLogo4.png';
import benefitLogo5 from '../../assets/aboutUs_benefitLogo5.png';
import './Features_logo.css';

const Features_logo = () => {
  return (
    <>
      <section id='featuresLogo'>
        <Container>
            <Row className='align-items-center justify-content-space-between'>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='featuresLogoInner_text'>
                        <h2>100.000+</h2>
                        <p>Agency Users</p>
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='featuresLogoInner'>
                        <img src={benefitLogo1} alt="aboutUs_benefitLogo1" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='featuresLogoInner'>
                        <img src={benefitLogo2} alt="aboutUs_benefitLogo2" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='featuresLogoInner'>
                        <img src={benefitLogo3} alt="aboutUs_benefitLogo3" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='featuresLogoInner'>
                        <img src={benefitLogo4} alt="aboutUs_benefitLogo4" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className='featuresLogoInner'>
                        <img src={benefitLogo5} alt="aboutUs_benefitLogo5" />
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Features_logo