import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/avatar.svg";

function HomeInfo() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m currently a junior{" "}
              <span className="blue">Computer Science</span> student at {" "}
              <span className="blue">DePauw University</span>.
              <br/>
              <br/>
              I'm going to {" "}
              <span className="blue">Grace Hopper Conference</span> this {" "}
              <span className="blue">November</span>. Love to meet up and connect!
              <br/>
              <br/>
              I'm proficient in
              <i>
                <b className="blue">
                  {" "}
                  JavaScript, Java, Vue.js, and Node.js{" "}
                </b>
              </i>
              — and I'm exploring frontend and mobile development.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <img src={avatar} className="img-fluid rounded-circle" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeInfo;