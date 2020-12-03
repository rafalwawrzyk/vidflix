import React from "react";
import { Container } from "react-bootstrap";
import "./layout.scss";

export const Layout = (props) => (
    <Container fluid="xl">{props.children}</Container>
);
