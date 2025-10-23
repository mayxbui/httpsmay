import React from "react";
import Card from "react-bootstrap/Card";
import { IoIosArrowForward } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m currently a{" "}
            <span className="purple">Computer Science</span> student at {" "}
            <span className="purple">DePauw University</span>.
            <br />I'm going to {" "}
            <span className="purple">Grace Hopper Conference</span> this {" "}
            <span className="purple">November</span>. Love to meet up and connect!
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <IoIosArrowForward /> Enjoing boba 🧋
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Crafting gifts for my loved ones 🖍️
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Traveling to new places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "“Great men are not born great, they grow great..."{" "}
          </p>
          <footer className="blockquote-footer"> Mario Puzo, The Godfather</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;