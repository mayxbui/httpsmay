import React from "react";
import {Col, Row} from "react-bootstrap";
import JavaScript from "../../assets/TechIcons/JavaScript.svg";
import Node from "../../assets/TechIcons/Node.js.svg";
import ReactIcon from "../../assets/TechIcons/React.svg";
import ReactBootstrap from "../../assets/TechIcons/ReactBootstrap.svg";
import Vue from "../../assets/TechIcons/Vue.js.svg";
import Java from "../../assets/TechIcons/Java.svg";
import Python from "../../assets/TechIcons/Python.svg";
import TypeScript from "../../assets/TechIcons/TypeScript.svg";
import SQLite from "../../assets/TechIcons/SQLite.svg";
import MongoDB from "../../assets/TechIcons/MongoDB.svg";
import PostgreSQL from "../../assets/TechIcons/PostgresSQL.svg";
import Bootstrap from "../../assets/TechIcons/Bootstrap.svg";
import Canva from "../../assets/TechIcons/Canva.svg";
import Vercel from "../../assets/TechIcons/Vercel.svg";

function TechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={JavaScript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={TypeScript} alt="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={Node} alt="Node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={Vue} alt="Vue" />
        <div className="tech-icons-text">Vue</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={ReactBootstrap} alt="ReactBootstrap" />
        <div className="tech-icons-text">React Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={Bootstrap} alt="Bootstrap" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={MongoDB} alt="MongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={PostgreSQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={SQLite} alt="SQlite" />
        <div className="tech-icons-text">SQLite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={Vercel} alt="Vercel" />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{boxShadow: 'none'}} src={Canva} alt="Canva" />
        <div className="tech-icons-text">Canva</div>
      </Col>
    </Row>
  );
}

export default TechStack;