import { Form, Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import NavBar from "../navbar/navbar";

import "./categories.css";
import CoursesList from "../coursesList/coursesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import NotFoundPage from "../notFoundPage/notFoundPage";

const Categories = () => {
  const [searchData, setSearchData] = useState("");
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
  // --------------------------------------------------------------------- search courses
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const searchDataChange = (e) => {
    setSearchData(e.target.value);
  };

  const filterCourses = (searchText) => {
    const filteredData = courses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(searchText.toLowerCase()) ||
        course.subject.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredCourses(filteredData);
  };

  useEffect(() => {
    filterCourses(searchData);
  }, [searchData]);
  //----------------------------------------------------------------------------------------------
  return (
    <>
      <NavBar activeTab={"categories"}></NavBar>
      <Container className="mt-5 ">
        <Row>
          <Col className="text-start ">
            <h1>Courses </h1>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <InputGroup className="mb-3 p-0 p-md-2 pb-md-0 me-md-0 pe-md-0">
              <Form.Control
                placeholder="Search Courses"
                aria-label="Search Courses"
                aria-describedby="basic-addon2"
                value={searchData}
                onChange={searchDataChange}
                name="searchInput"
              />

              <Button disabled variant="outline-secondary" id="button-addon2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="list-group">
              {filteredCourses.length > 0 ? (
                <CoursesList courses={filteredCourses} />
              ) : (
                <NotFoundPage />
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Categories;
