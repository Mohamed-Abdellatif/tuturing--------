
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./home.css";
import NavBar from "../navbar/navbar";

import CoursesMapper from "../coursesGrid/coursesGrid";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const courses = [
    {
      courseId: 1,
      subject: "Math",
      courseName: "NU Calculus 1",
      courseDescription: "From Assignment 1 till Assignment 11",
    },
    {
      courseId: 2,
      subject: "Physics",
      courseName: "NU Physics 1",
      courseDescription: "From Assignment 1 till Assignment 11",
    },
    {
      courseId: 3,
      subject: "Python",
      courseName: "NU 102 Intro To Programming",
      courseDescription: "From Assignment 1 till Assignment 11",
    },
    
    
  ];

  return (
    <>
      <NavBar activeTab={"home"} />
      <Container className="mt-5 ">
        <Row className="justify-content-start mb-3">
          <Col  className="ps-0 d-flex align-items-center ">
          <FontAwesomeIcon icon={faBorderAll} className="fa-4x fa-fw me-2  "/>
          <h1 className=" ">Dashboard</h1>
          </Col>
          
        </Row>
        <Row>
          <CoursesMapper xs={12} md={6} xl={4} courses={courses} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
