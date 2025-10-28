import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AboutInfo from "./about-info";
import TechStack from "../about/tech-stack.jsx";
import Particles from '../particle.jsx';
import godfather from "../../assets/godfather.svg";


function About(){
    return(
        <>
        {" "}
        <Particles/>
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
                        <h2 style={{fontSize:"2.1em", paddingBottom:"20px"}}>
                            More About <strong className="blue">Me</strong>
                        </h2>
                        <AboutInfo/>
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                        >
                        <img src={godfather} className="img-fluid rounded" alt="Vito Corleone, The Godfather" style={{
                            width: "80%",
                            maxWidth: "400px",
                            height: "auto"}}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <h1 className="project-heading">
                    Professional <strong className="blue">Skillsets</strong>
                </h1>
                <TechStack/>
                <br/>
                <br/>
            </Container>
        </Container>
        </>
    )
}

export default About;