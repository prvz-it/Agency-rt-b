import { Col, Container, Row } from 'react-bootstrap';
import blogImg1 from '../../assets/blog-1.png';
import blogImg2 from '../../assets/blog-2.png';
import blogBox01 from '../../assets/blogBox-01.png'
import blogBox02 from '../../assets/blogBox-02.png'
import blogBox03 from '../../assets/blogBox-03.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import './Blog_box.css';

const Blog_box = () => {
  return (
    <>
      <section id='blogBox'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="blogBox_top">
                        <h2>Our blog</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6} sm={6}>
                    <div className="blogBox_Cen">
                        <img src={blogBox01} alt="blogBox_1" />
                        <div className="blogBox_Text">
                            <h5>22 Fab 2024</h5>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person's sales strategy and allowed him to attract</p>
                            <a href="#">Read more <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="blogBox_Cen">
                        <img src={blogBox02} alt="blogBox_2" />
                        <div className="blogBox_Text">
                            <h5>22 Fab 2024</h5>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person's sales strategy and allowed him to attract</p>
                            <a href="#">Read more <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="blogBox_Cen">
                        <img src={blogBox03} alt="blogBox_3" />
                        <div className="blogBox_Text">
                            <h5>22 Fab 2024</h5>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person's sales strategy and allowed him to attract</p>
                            <a href="#">Read more <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="blogBox_Cen">
                        <img src={blogImg1} alt="blogBox_1" />
                        <div className="blogBox_Text">
                            <h5>22 Fab 2024</h5>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person's sales strategy and allowed him to attract</p>
                            <a href="#">Read more <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="blogBox_Cen">
                        <img src={blogImg2} alt="blogBox_1" />
                        <div className="blogBox_Text">
                            <h5>22 Fab 2024</h5>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person's sales strategy and allowed him to attract</p>
                            <a href="#">Read more <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="blogBox_Cen">
                        <img src={blogImg1} alt="blogBox_1" />
                        <div className="blogBox_Text">
                            <h5>22 Fab 2024</h5>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person's sales strategy and allowed him to attract</p>
                            <a href="#">Read more <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Blog_box