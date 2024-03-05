import React from 'react';
import { Col } from 'react-bootstrap';

const Features_reusable = ({featuresIcon, title, pgh}) => {
  return (
    <Col lg={4} md={6} sm={6}>
        <div className="featuresBox">
            {featuresIcon}
            <div className="featuresBox-text">
                <h3>{title}</h3>
                <p>{pgh}</p>
            </div>
        </div>
    </Col>
  )
}

export default Features_reusable