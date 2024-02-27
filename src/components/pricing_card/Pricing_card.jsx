import { Col, Container, Row } from 'react-bootstrap';
import { FaPlay } from "react-icons/fa";
import './Pricing_card.css';

const Pricing_card = () => {
  return (
    <>
      <section id='pricingCard'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="pricingCardTop">
                        <h2>Our Pricing Plans</h2>
                        <p>When you're ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={4} md={6}>
                    <div className="pricingCard_box">
                        <div className="pricingCard_boxTop">
                            <h2>$299</h2> <p>Per Design</p>
                        </div>
                        <div className="pricingCard_boxText">
                            <h3>Landing Page </h3>
                            <p>When you're ready to go beyond prototyping in Figma, </p>
                        </div>
                        <div className="pricingCard_boxCen">
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">All limited links</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Own analytics platform</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Chat support</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Optimize hashtags</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Unlimited users</a></li>
                            </ul>
                        </div>
                        <div className="pricingCard_boxBm">
                            <a href="#">Get started</a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="pricingCard_box">
                        <div className="pricingCard_boxTop">
                            <h2>$399</h2> <p>Multi Design</p>
                        </div>
                        <div className="pricingCard_boxText">
                            <h3>Website Page </h3>
                            <p>When you're ready to go beyond prototyping in Figma, </p>
                        </div>
                        <div className="pricingCard_boxCen">
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">All limited links</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Own analytics platform</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Chat support</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Optimize hashtags</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Unlimited users</a></li>
                            </ul>
                        </div>
                        <div className="pricingCard_boxBm">
                            <a href="#">Get started</a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="pricingCard_box">
                        <div className="pricingCard_boxTop">
                            <h2>$499+</h2> <p>Per Design</p>
                        </div>
                        <div className="pricingCard_boxText">
                            <h3>Complex Project</h3>
                            <p>When you're ready to go beyond prototyping in Figma, </p>
                        </div>
                        <div className="pricingCard_boxCen">
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">All limited links</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Own analytics platform</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Chat support</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Optimize hashtags</a></li>
                            </ul>
                            <ul>
                                <li><FaPlay className='playBtn' /></li>
                                <li><a href="#">Unlimited users</a></li>
                            </ul>
                        </div>
                        <div className="pricingCard_boxBm">
                            <a href="#">Get started</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Pricing_card