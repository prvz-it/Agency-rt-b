import { Col, Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import contactForm from '../../assets/contactForm.png';
import './Contact_form.css';

const Contact_form = () => {
  return (
    <>
      <section id="contactForm">
        <Container>
          <Row>
            <Col lg={6} className='p-0'>
              <div className="contactForm-left">
                <img src={contactForm} alt="contact_form" />
                <div className="contactForm-leftText">
                  <div className="contactForm-leftInner">
                    <h2>Building stellar websites for early startups</h2>
                    <p>Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className='p-0'>
              <div className="contactForm-right">
                <h2>Send inquiry</h2>
                <p>"The best agency we've worked with so far. They understand our product and are able to add new features with a great focus."</p>
                <form action="">
                  <input type="text" className='inputForm_1' placeholder='Your name'/>
                  <input type="email" className='inputForm_2' placeholder='Email'/>
                  <input type="text" className='inputForm_3' placeholder='Post your website url'/>
                  <button className='input_btn'>Send an inquiry</button>
                  <a href="#">Get in touch with us<FaLongArrowAltRight/></a>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact_form