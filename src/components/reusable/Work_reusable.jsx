import React from 'react'
import { Col } from 'react-bootstrap';
import workOne from '../../assets/work-1.png';

const Work_reusable = ({workImg, title, pgh}) => {
  return (
    <Col lg={6} md={6} sm={6}>
        <div className="work-box">
            {workImg}
            <h3>{title}</h3>
            <p>{pgh}</p>
        </div>
    </Col>
  )
}

export default Work_reusable