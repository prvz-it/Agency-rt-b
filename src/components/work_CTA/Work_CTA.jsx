import { Col, Container, Row } from 'react-bootstrap';
import './Work_CTA.css';

const Work_CTA = () => {
  return (
    <>
     <section id='workCTA'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <div className="workCTA_main">
                        <h2>Let's build something great together</h2>
                        <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                        <a href="#">Contact us</a>
                    </div>
                </Col>
            </Row>
        </Container>
     </section>
    </>
  )
}

export default Work_CTA