import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfFile from "../../assets/resume.pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import Particles from "../particle.jsx"

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particles/>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdfFile}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume">
        <Document
          file={pdfFile}
          className="d-flex justify-content-center"
          loading="Loading PDF... Please wait an itty bitty second. Sit back and have a sip of coffee!"
          onLoadError={(error) => console.error("PDF load error:", error)}
        >
          <Page pageNumber={1} scale={width > 786 ? 1.4 : 0.6} />
        </Document>
      </Row>
    </Container>
  );
}

export default Resume;