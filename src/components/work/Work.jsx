import { Col, Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import workOne from '../../assets/work-1.png';
import workTwo from '../../assets/work-2.png';
import workThree from '../../assets/work-3.png';
import workFour from '../../assets/work-4.png';
import './Work.css';

const Work = () => {
  return (
    <>
      <section id='work'>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="work-left">
                        <h2>How we work</h2>
                        <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                        <div className="work-btn">
                            <a href="#">Get in touch with us <FaLongArrowAltRight/></a>
                        </div>
                    </div>
                </Col>
                <Col lg={8} >
                    <div className="work-right">
                        <Col lg={6} md={6} sm={6}>
                            <div className="work-box">
                                <img src={workOne} alt="work-1" />
                                <h3>Strategy</h3>
                                <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <div className="work-box">
                                <img src={workTwo} alt="work-2" />
                                <h3>Content writing</h3>
                                <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <div className="work-box">
                                <img src={workThree} alt="work-3" />
                                <h3>Design</h3>
                                <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <div className="work-box">
                                <img src={workFour} alt="work-4" />
                                <h3>Development</h3>
                                <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
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

export default Work