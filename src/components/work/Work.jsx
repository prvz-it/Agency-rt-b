import { Col, Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import workOne from '../../assets/work-1.png';
import workTwo from '../../assets/work-2.png';
import workThree from '../../assets/work-3.png';
import workFour from '../../assets/work-4.png';
import Work_reusable from '../reusable/Work_reusable';
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
                        <Work_reusable workImg={<img src={workOne} alt="work-1" />} title="Strategy" pgh="Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution."/>
                        <Work_reusable workImg={<img src={workTwo} alt="work-2" />} title="Content writing" pgh="Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution."/>
                        <Work_reusable workImg={<img src={workThree} alt="work-3" />} title="Design" pgh="Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution."/>
                        <Work_reusable workImg={<img src={workFour} alt="work-4" />} title="Development" pgh="Public access to papers is provided by the publishing institution, which also covers the costs of production and distribution."/>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Work