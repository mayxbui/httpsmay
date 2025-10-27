import React from "react";
import Card from "react-bootstrap/Card";
import { IoIosArrowForward } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-info-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <IoIosArrowForward /> Watching sitcom comedy show and drinking boba 🧋
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Crafting gifts for my loved ones 🖍️
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Traveling to new places 🌍
            </li>
          </ul>

          <p style={{ color: "#8cbeed" }}>
            "Great men are not born great, they grow great..."{" "}
          </p>
          <footer className="blockquote-footer"> Mario Puzo, The Godfather</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;