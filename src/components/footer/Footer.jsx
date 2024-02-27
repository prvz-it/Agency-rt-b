import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram,FaLinkedin } from "react-icons/fa";
import Logo from '../../assets/logo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
            <Row className='footer-main'>
                <Col lg={6} md={6}>
                    <div className="footer-left">
                        <a href="#"><img src={Logo} alt="Logo" /></a>
                        <p>We are always open to discuss your project and improve your online presence.</p>
                        <div className="contact-box">
                            <div className="contact-boxL">
                                <h4>Email me at :</h4>
                                <h5>parvez.rzk.bd@gmail.com</h5>
                            </div>
                            <div className="contact-boxR">
                                <h4>Call us :</h4>
                                <h5>+9696365626</h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={{span:4, offset:1}} md={6}>
                    <div className="footer-right">
                        <h2>Lets Talk!</h2>
                        <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div className="footer-icon">
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
      </footer>
      <section id="footer-btm">
        <Container>
            <Row>
                <div className="footerBtm">
                    <Col lg={3} sm={5}>
                        <div className="footerBtm-left">
                            <p>Copyright 2024, <a href="#">rzkit.com</a></p>
                        </div>
                    </Col>
                    <Col lg={{span:5, offset:4}} sm={7}>
                        <div className="footerBtm-right">
                            <Link to="/">Home</Link>
                            <Link to="/about_us">About Us</Link>
                            <Link to="/features">Features</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/work">Work</Link>
                            <Link to="/blog">Blog</Link>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer