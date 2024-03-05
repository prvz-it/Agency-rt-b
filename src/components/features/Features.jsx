import { Col, Container, Row } from 'react-bootstrap';
import featuresIcon1 from '../../assets/features-1.png';
import featuresIcon2 from '../../assets/features-2.png';
import featuresIcon3 from '../../assets/features-3.png';
import featuresIcon4 from '../../assets/features-4.png';
import featuresIcon5 from '../../assets/features-5.png';
import featuresIcon6 from '../../assets/features-6.png';
import Features_reusable from '../reusable/Features_reusable';
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
                <Features_reusable featuresIcon={<img src={featuresIcon1} alt="features-1" />} title="Uses Client First" pgh="For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn."/>
                <Features_reusable featuresIcon={<img src={featuresIcon2} alt="features-2" />} title="Two Free Revision Round" pgh="For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn."/>
                <Features_reusable featuresIcon={<img src={featuresIcon3} alt="features-3" />} title="Template Customization" pgh="For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn."/>
                <Features_reusable featuresIcon={<img src={featuresIcon4} alt="features-4" />} title="24/7 Support" pgh="For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn."/>
                <Features_reusable featuresIcon={<img src={featuresIcon5} alt="features-5" />} title="Quick Delivery" pgh="For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn."/>
                <Features_reusable featuresIcon={<img src={featuresIcon6} alt="features-6" />} title="Hands-on approach" pgh="For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn."/>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Features