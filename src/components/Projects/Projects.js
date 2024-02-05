import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import openGL from "../../Assets/Projects/openGL.png";
import cookieMayhem from "../../Assets/Projects/cookieMayhem.png";
import drawnedInTaxes from "../../Assets/Projects/drawnedInTaxes.png";
import driftMarket from "../../Assets/Projects/driftMarket.png";
import arIcon from "../../Assets/Projects/ar_icon.png"

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
              imgPath={drawnedInTaxes}
              isBlog={false}
              title="Drawned in Taxes"
              description="Videogame created on Unity, using WebGL and playable on PC, Web and Mobile. Awarded with honors in the yearly competition of URJC Videogames Bachelor."
              ghLink="https://github.com/GluGluGames/Ahogado-en-Impuestos"
              demoLink="https://gluglugames.itch.io/ahogado-en-impuestos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arIcon}
              isBlog={false}
              title="Aplication AR"
              description="Augmented Realty application developed on Unity for Android. In this app you have the capabilities of analyse the table, place the menu on the table, select your food and order it. Also you can play a mini game and get a e-mail with your order and possible discount!"
              ghLink="https://github.com/AdrianAlbarran/AR_MENU"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookieMayhem}
              isBlog={false}
              title="Cookie Mayhem"
              description="Web Online Videogame, created using Phaser, WebSockets and API REST. Shooter 2D where you can fight multiple hordes of cookie enemies. If you kill the whole horde, you can buy upgrades!"
              ghLink="https://github.com/AdrianAlbarran/CookieMayhem-JuegosEnRed"
              demoLink="https://www.youtube.com/watch?v=8Mn0MbisQS4"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openGL}
              isBlog={false}
              title="OpenGL learning"
              description="OpenGL proyect made for learning the library and start on the Graphics Programming world!"
              ghLink="https://github.com/AdrianAlbarran/p3/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driftMarket}
              isBlog={false}
              title="Drift Market"
              description="Videogame experiment made on Unity. You controll a shopping cart on a supermarket. We experimented with wheel and pedals controlls. For testing we used the Logitech G920"
              ghLink="https://github.com/AdrianAlbarran/Drift-Market-Interaccion-Persona-Maquina"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
