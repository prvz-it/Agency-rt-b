import { Col, Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import ourWorkImg1 from '../../assets/ourWork-1.png';
import ourWorkImg2 from '../../assets/ourWork-2.png';
import ourWorkImg3 from '../../assets/ourWork-3.png';
import './OurWork.css';

const OurWork = () => {
  return (
    <>
      <section id="ourWork">
        <Container>
            <Row className='ourWorkTop align-items-center'>
                <Col lg={6} md={6} sm={6} xs={6}>
                    <div className="ourWorkTop-left">
                        <h2>View our projects</h2>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                    <div className="ourWorkTop-right">
                        <a href="#">View More <FaLongArrowAltRight/></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <div className="ourWorkCen-left">
                        <img src={ourWorkImg1} alt="ourWork image-1" />
                        <div className="ourWorkCen-leftText">
                            <div className="ourWorkCen-leftTextInner">
                                <h3>We Are Always Open To Discuss Your Project,</h3>
                                <a href="#">View project <FaLongArrowAltRight/></a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={12}>
                    <div className="ourWorkCen-right">
                        <Col lg={12} md={6}>
                            <div className="ourWorkCen-rightTop">
                                <img src={ourWorkImg2} alt="ourWork image-2" />
                                <div className="ourWorkCen-rightTopText">
                                    <div className="ourWorkCen-rightTopTextInner">
                                        <h3>Discuss Website Design</h3>
                                        <a href="#">View project <FaLongArrowAltRight/></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={6}>
                            <div className="ourWorkCen-rightBtm">
                                <img src={ourWorkImg3} alt="ourWork image-3" />
                                <div className="ourWorkCen-rightBtmText">
                                    <div className="ourWorkCen-rightBtmTextInner">
                                        <h3>Discuss Website Design</h3>
                                        <a href="#">View project <FaLongArrowAltRight/></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default OurWork