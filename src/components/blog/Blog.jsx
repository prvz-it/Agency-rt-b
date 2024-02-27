import { Col, Container, Row } from 'react-bootstrap';
import blogImg1 from '../../assets/blog-1.png';
import blogImg2 from '../../assets/blog-2.png';
import { FaLongArrowAltRight } from "react-icons/fa";
import './Blog.css';

const Blog = () => {
  return (
    <>
       <section id="blog">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="blog-head pb-5">
                        <h2>Our blog</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6} sm={6}>
                    <div className="blogCen">
                        <img src={blogImg1} alt="blog-1" />
                        <div className="blogText">
                            <h5>22 Fab 2024</h5>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>Observe how one person's sales strategy was altered by switching to Webflow and how this helped him to attract.</p>
                            <a href="#">Read more <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <div className="blogCen">
                        <img src={blogImg2} alt="blog-1" />
                        <div className="blogText">
                            <h5>22 Fab 2024</h5>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>Observe how one person's sales strategy was altered by switching to Webflow and how this helped him to attract.</p>
                            <a href="#">Read more <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} className='mx-auto'>
                    <div className="blogCen">
                        <img src={blogImg1} alt="blog-1" />
                        <div className="blogText">
                            <h5>22 Fab 2024</h5>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>Observe how one person's sales strategy was altered by switching to Webflow and how this helped him to attract.</p>
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

export default Blog