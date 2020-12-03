import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Nav.scss";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Navigation = ({ blur }) => {
    let className = "";
    if (blur) className += "blured";
    return (
        <nav className={className}>
            <Navbar expand="lg">
                <Navbar.Brand>
                    <Link to="/">VidFlix</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="website-navbar">
                    <span>
                        <Menu size={"3rem"} style={{ color: "#f3f3f3" }} />
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <NavLink
                                to="/search"
                                activeClassName="active-nav-elem"
                            >
                                Search
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink
                                to="/popular"
                                activeClassName="active-nav-elem"
                            >
                                Popular
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink
                                to="/contact"
                                activeClassName="active-nav-elem"
                            >
                                Contact
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
};

export default withRouter(Navigation);
