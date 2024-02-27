import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram,FaLinkedin } from "react-icons/fa";
import './Work_hero.css';

const Work_hero = () => {
  return (
    <>
      <section id='workHero'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <div className="workHero_inner">
                        <h4>What we created</h4>
                        <h2>Our Work Portfolio</h2>
                        <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                        <div className="workHero_innerIcon">
                            <ul>
                                <li><Link><FaFacebook /></Link></li>
                                <li><Link><FaTwitter/></Link></li>
                                <li><Link><FaInstagram/></Link></li>
                                <li><Link><FaLinkedin/></Link></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Work_hero