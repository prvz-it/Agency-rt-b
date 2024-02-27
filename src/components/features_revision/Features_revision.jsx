import { Col, Container, Row } from 'react-bootstrap';
import featuresRevision1 from '../../assets/featuresRevision.png';
import './Features_revision.css';

const Features_revision = () => {
  return (
    <>
       <section id='featuresRevision'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={{span:5, order:1}} md={{span:12, order:2}} sm={{span:12, order:2}} xs={{span:12, order:2}}>
                    <div className="featuresRevisionRight">
                        <img src={featuresRevision1} alt="featuresRevision image 1" />
                    </div>
                </Col>
                <Col lg={{span:6, offset:1, order:2}} md={{span:12, order:1}} sm={{span:12, order:1}} xs={{span:12, order:1}}>
                    <div className="featuresRevisionLeft">
                        <h3>Free Revision Rounds</h3>
                        <h2>Get free Revisions and one week of free maintenance</h2>
                        <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn. Public access to papers is provided by the.</p>
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    </>
  )
}

export default Features_revision