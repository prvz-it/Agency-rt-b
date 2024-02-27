import { Col, Container, Row } from 'react-bootstrap';
import aboutUs_missionTop1 from '../../assets/aboutUs_missionTop.png';
import aboutUs_missionBt2 from '../../assets/aboutUs_missionBt.png';
import './AboutUs_mission.css';

const AboutUs_mission = () => {
  return (
    <>
       <section id='aboutUs_mission'>
        <Container>
            <Row className='align-items-center pb-5'>
                <Col lg={6} md={6}>
                    <div className="aboutUs_missionLeft">
                        <h3>Our mission</h3>
                        <h2>Inspire, Innovate, Share</h2>
                        <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn. Public access to papers is provided by the.</p>
                    </div>
                </Col>
                <Col lg={{span:5, offset:1}} md={6}>
                    <div className="aboutUs_missionRight">
                        <img src={aboutUs_missionTop1} alt="aboutUs_missionTop1" />
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center pt-5'>
                <Col lg={{span:5, order:1}} md={{span:6, order:1}} sm={{span:12, order:2}} xs={{span:12, order:2}}>
                    <div className="aboutUs_missionBtRight">
                        <img src={aboutUs_missionBt2} alt="aboutUs_missionBt2" />
                    </div>
                </Col>
                <Col lg={{span:6, offset:1, order:2}} md={{span:6, order:2}} sm={{span:12, order:1}} xs={{span:12, order:1}}>
                    <div className="aboutUs_missionBtLeft">
                        <h3>Our vision</h3>
                        <h2>Laser focus</h2>
                        <p>For the time being, limit your strategy and attention to a single platform. You'll be able to extend your reach to new platforms as you develop & learn. Public access to papers is provided by the.</p>
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    </>
  )
}

export default AboutUs_mission