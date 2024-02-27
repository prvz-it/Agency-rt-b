import { Col, Container, Row } from 'react-bootstrap';
import blogHero01 from '../../assets/blogHero.png';
import './Blog_hero.css';

const Blog_hero = () => {
  return (
    <>
       <section id='blogHero'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="blogHero_top">
                        <h2>A UX Case Study on Creating a 
                            Studious Environment for Students</h2>
                        <h5>Andrew Jonson</h5><h6>Posted on 26th January 2024</h6>
                        <img src={blogHero01} alt="blogHero image 1" />
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                        <a href="#">Read more</a>
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    </>
  )
}

export default Blog_hero