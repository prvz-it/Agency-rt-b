import { Col, Container, Row } from 'react-bootstrap';
import { Tab, Tabs } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import workTab_template01 from '../../assets/workTab-01.png';
import workTab_template02 from '../../assets/workTab-02.png';
import workTab_template03 from '../../assets/workTab-03.png';
import workTab_template04 from '../../assets/workTab-04.png';
import './Work_tab.css';

const Work_tab = () => {
  return (
    <>
      <section id='workTab'>
        <Container>
            <Row>
                <Col lg={12}>
                    <Tabs
                       defaultActiveKey="All"
                       id="uncontrolled-tab-example"
                       className=" mb-5"
                    >
                        <Tab eventKey="All" title="All" open>
                            <Row>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template01} alt="workTab_template 01" />
                                        <div className="workTab_templateText">
                                            <h2>Template 1</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template02} alt="workTab_template 02" />
                                        <div className="workTab_templateText">
                                            <h2>Template 2</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template03} alt="workTab_template 03" />
                                        <div className="workTab_templateText">
                                            <h2>Template 3</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template04} alt="workTab_template 04" />
                                        <div className="workTab_templateText">
                                            <h2>Template 4</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="UI Design" title="UI Design">
                            <Row>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template02} alt="workTab_template 02" />
                                        <div className="workTab_templateText">
                                            <h2>Template 1</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template03} alt="workTab_template 03" />
                                        <div className="workTab_templateText">
                                            <h2>Template 2</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template01} alt="workTab_template 01" />
                                        <div className="workTab_templateText">
                                            <h2>Template 3</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template03} alt="workTab_template 03" />
                                        <div className="workTab_templateText">
                                            <h2>Template 4</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="Webflow Design" title="Webflow Design">
                            <Row>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template03} alt="workTab_template 03" />
                                        <div className="workTab_templateText">
                                            <h2>Template 1</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template02} alt="workTab_template 02" />
                                        <div className="workTab_templateText">
                                            <h2>Template 2</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template01} alt="workTab_template 01" />
                                        <div className="workTab_templateText">
                                            <h2>Template 3</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template03} alt="workTab_template 03" />
                                        <div className="workTab_templateText">
                                            <h2>Template 4</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="Figma Design" title="Figma Design">
                            <Row>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template04} alt="workTab_template 04" />
                                        <div className="workTab_templateText">
                                            <h2>Template 1</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template03} alt="workTab_template 03" />
                                        <div className="workTab_templateText">
                                            <h2>Template 2</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template01} alt="workTab_template 01" />
                                        <div className="workTab_templateText">
                                            <h2>Template 3</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <div className="workTab_template">
                                        <img src={workTab_template02} alt="workTab_template 02" />
                                        <div className="workTab_templateText">
                                            <h2>Template 4</h2>
                                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                            <a href="#">View Portfolio<FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Work_tab