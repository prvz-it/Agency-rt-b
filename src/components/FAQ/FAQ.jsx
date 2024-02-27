import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus } from "react-icons/fa6";
import './FAQ.css';

const FAQ = () => {
  return (
    <>
      <section id="FAQ">
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="FAQ-left">
                        <h2>Frequently asked questions</h2>
                        <h3>Contact us for more info</h3>
                    </div>
                </Col>
                <Col lg={{span:7, offset:1}}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h4>01</h4> How much time does it take? <FaPlus className='accordion-icon' /></Accordion.Header>
                            <Accordion.Body>
                                The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h4>02</h4>What is your class naming convention?<FaPlus className='accordion-icon' /></Accordion.Header>
                            <Accordion.Body>
                                The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><h4>03</h4>How do you communicate?<FaPlus className='accordion-icon' /></Accordion.Header>
                            <Accordion.Body>
                                The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><h4>04</h4>I have a bigger project. Can you handle it?<FaPlus className='accordion-icon' /></Accordion.Header>
                            <Accordion.Body>
                                The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><h4>05</h4>What is your class naming convention?<FaPlus className='accordion-icon' /></Accordion.Header>
                            <Accordion.Body>
                                The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default FAQ