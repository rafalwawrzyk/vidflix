import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
import "./Hero.scss";

const Hero = ({ title, description, children }) => {
    return (
        <section>
            <Jumbotron fluid>
                <Container>
                    <div className="hero-text">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    {children}
                </Container>
            </Jumbotron>
        </section>
    );
};

export default Hero;
