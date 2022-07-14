import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Netflix from "../../Assets/Projects/Scr_2.png";
import ExpenseTracker from "../../Assets/Projects/Scr_3.png";
import Website from "../../Assets/Projects/Scr_1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              title="Netflix"
              description="This is Netflix Home Page Clone Which is created using Html, CSS and BootStrap."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="ExpenseTracker"
              description="This Website is Act like Expense Tracker Which is Created Using ReactJs Where We can Track Our day-to-day Life Expense Easily and Smoothly."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Website}
              title="Website"
              description="This is Fully Responsive Website Which is created Using Html, Css and BootStrap Which Shows the Details About Compony."          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
