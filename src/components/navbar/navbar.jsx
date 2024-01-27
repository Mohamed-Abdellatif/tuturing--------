import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {  NavLink } from "react-router-dom";

const NavBar = ({ activeTab }) => {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-body-tertiary "
      bg="primary"
      data-bs-theme="dark"
    >
      <Container fluid>
        <NavLink className="navbar-brand  " to={"/"}>
          Tutoring بالعربي
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="nav-link "
              active={(activeTab === "home").toString()}
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link "
              active={(activeTab === "categories").toString()}
              to={"/categories"}
            >
              Categories
            </NavLink>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
