import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AboutInfo from "./about-info";
import TechStack from "../about/tech-stack.jsx";
// import Particles from "../Particle";
import laptopImg from "../../assets/about.png";


function About(){
    return(
        <>
        {" "}
        {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </div> */}
        <Container fluid className="about-section">
            <Container>
                <Row style={{justifyContent:"center", padding:"10px"}}>
                    <Col
                        md={7}
                        style={{
                            justifyContent:"center",
                            paddingTop:"30px",
                            paddingBottom:"50px",
                        }}>
                        <h1 style={{fontSize:"2.1em", paddingBottom:"20px"}}>
                            Hi there, my name is <strong className="purple">May Bui</strong>
                        </h1>
                        <AboutInfo/>
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                        >
                        <img src={laptopImg} alt="about" className = "img-fluid"/>
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillsets</strong>
                </h1>
                <TechStack/>
            </Container>
        </Container>
        </>
    )
}

export default About;