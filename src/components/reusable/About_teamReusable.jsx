import React from 'react';
import { Col } from 'react-bootstrap';

const About_teamReusable = ({aboutUs_teamCard, iconOne, iconTwo, iconThree, cardName, cardTitle}) => {
  return (
    <Col lg={3} md={6} sm={6}>
        <div className="aboutUs_teamCard">
            <div className="aboutUs_teamCard_I">
                {aboutUs_teamCard}
                <div className="aboutUs_teamCardOv">
                    <div className="aboutUs_teamCardIcon">
                        <ul>
                            <li><a href="#">{iconOne}</a></li>
                            <li><a href="#">{iconTwo}</a></li>
                            <li><a href="#">{iconThree}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="aboutUs_teamCard_text">
                <h4>{cardName}</h4>
                <p>{cardTitle}</p>
            </div>
        </div>
    </Col>
  )
}

export default About_teamReusable