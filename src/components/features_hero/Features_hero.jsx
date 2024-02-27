import { Col, Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import featuresHero from '../../assets/featureHero.png';
import './Features_hero.css';

const Features_hero = () => {
  return (
    <>
      <section id='featuresHero'>
        <Container>
            <Row className='featuresHero-main align-items-center'>
                <Col lg={6}>
                    <div className="featuresHero-left">
                        <h1>All the features you need</h1>
                        <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                        <div className="featuresHero-btn">
                            <a href="#">View pricing <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="featuresHero-right">
                        <img src={featuresHero} alt="featuresHero-image" />
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Features_hero