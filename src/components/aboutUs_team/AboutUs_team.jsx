import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import aboutUs_teamCard1 from '../../assets/aboutUs_teamCard1.png';
import aboutUs_teamCard2 from '../../assets/aboutUs_teamCard2.png';
import aboutUs_teamCard3 from '../../assets/aboutUs_teamCard3.png';
import About_teamReusable from '../reusable/About_teamReusable';
import './AboutUs_team.css';

const AboutUs_team = () => {
  return (
    <>
      <section id='aboutUs_team'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={4}>
                    <div className='aboutUs_teamTop'>
                        <h2>Meet our team</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <About_teamReusable aboutUs_teamCard={<img src={aboutUs_teamCard1} alt="aboutUs_teamCard-1" />} iconOne={<FaFacebook/>} iconTwo={<FaTwitter/>} iconThree={<FaLinkedin/>} cardName="John Smith" cardTitle="CEO"/>
                <About_teamReusable aboutUs_teamCard={<img src={aboutUs_teamCard2} alt="aboutUs_teamCard-2" />} iconOne={<FaFacebook/>} iconTwo={<FaTwitter/>} iconThree={<FaLinkedin/>} cardName="Simon Adams" cardTitle="CTO"/>
                <About_teamReusable aboutUs_teamCard={<img src={aboutUs_teamCard3} alt="aboutUs_teamCard-3" />} iconOne={<FaFacebook/>} iconTwo={<FaTwitter/>} iconThree={<FaLinkedin/>} cardName="Paul Jones" cardTitle="Design Lead"/>
                <About_teamReusable aboutUs_teamCard={<img src={aboutUs_teamCard1} alt="aboutUs_teamCard-1" />} iconOne={<FaFacebook/>} iconTwo={<FaTwitter/>} iconThree={<FaLinkedin/>} cardName="Sara Hardin" cardTitle="Project Manager"/>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutUs_team