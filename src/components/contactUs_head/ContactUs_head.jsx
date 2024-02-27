import { Col, Container, Row } from 'react-bootstrap';
import './ContactUs_head.css';

const ContactUs_head = () => {
  return (
    <>
       <section id='contactHead'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="contactHead_main">
                        <h2>Contact Us</h2>
                        <p>The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.</p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={10}>
                    <div className="contactForm_in">
                        <div className="contactForm_top">
                            <div className='contactForm_topLeft'>
                                <h5>Name :</h5>
                                <input type="text" placeholder='Enter your name'/>
                            </div>
                            <div className='contactForm_topRight'>
                                <h5>Email :</h5>
                                <input type="text" placeholder='Enter your email'/>
                            </div>
                        </div>
                        <div className="contactForm_top">
                            <div className='contactForm_topLeft'>
                                <h5>Subject :</h5>
                                <input type="text" placeholder='Enter Subject'/>
                            </div>
                            <div className='contactForm_topRight'>
                                <h5>Subject  :</h5>
                                <input type="text" placeholder='Select Subject'/>
                            </div>
                        </div>
                        <div className="contactForm_Mess">
                            <h5>Message</h5>
                            <input type="text" placeholder='Write your  question here' />
                        </div>
                        <div className="contactForm_btn">
                            <a href="#">Send Messege</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    </>
  )
}

export default ContactUs_head