import NavBar from "../navbar/navbar";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useParams } from "react-router-dom";

import AssignmentsList from "../assignmentsList/assignmentsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import NotFoundPage from "../notFoundPage/notFoundPage";

const CoursePage = () => {
  const { courseId } = useParams();
  const [courses, setCourses] = useState([
    {
      courseId: 1,
      subject: "Math",
      courseName: "NU Calculus 1",
      courseDescription: "From Assignment 1 till Assignment 11",
      assignments: [
        {
          assignmentId: 1,
          assignmentName: "Assignment 1",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 2,
          assignmentName: "Assignment 2",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 3,
          assignmentName: "Assignment 3",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 4,
          assignmentName: "Assignment 4",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 5,
          assignmentName: "Assignment 5",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 6,
          assignmentName: "Assignment 6",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 7,
          assignmentName: "Assignment 7",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 8,
          assignmentName: "Assignment 8",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 9,
          assignmentName: "Assignment 9",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 10,
          assignmentName: "Assignment 10",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 11,
          assignmentName: "Assignment 11",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
      ],
    },
    {
      courseId: 2,
      subject: "Physics",
      courseName: "NU Physics 1",
      courseDescription: "From Assignment 1 till Assignment 11",
      assignments: [
        {
          assignmentId: 1,
          assignmentName: "Assignment 1",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 2,
          assignmentName: "Assignment 2",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 3,
          assignmentName: "Assignment 3",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 4,
          assignmentName: "Assignment 4",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 5,
          assignmentName: "Assignment 5",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 6,
          assignmentName: "Assignment 6",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 7,
          assignmentName: "Assignment 7",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 8,
          assignmentName: "Assignment 8",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 9,
          assignmentName: "Assignment 9",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 10,
          assignmentName: "Assignment 10",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 11,
          assignmentName: "Assignment 11",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
      ],
    },
    {
      courseId: 3,
      subject: "Python",
      courseName: "NU 102 Intro To Programming",
      courseDescription: "From Assignment 1 till Assignment 11",
      assignments: [
        {
          assignmentId: 1,
          assignmentName: "Assignment 1",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 2,
          assignmentName: "Assignment 2",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 3,
          assignmentName: "Assignment 3",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 4,
          assignmentName: "Assignment 4",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 5,
          assignmentName: "Assignment 5",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 6,
          assignmentName: "Assignment 6",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 7,
          assignmentName: "Assignment 7",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 8,
          assignmentName: "Assignment 8",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 9,
          assignmentName: "Assignment 9",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 10,
          assignmentName: "Assignment 10",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
        {
          assignmentId: 11,
          assignmentName: "Assignment 11",
          url: "https://youtu.be/f0oy-NicIgE?si=JTJME_1lu7_bzMTT",
          isDone: false,
        },
      ],
    },
  ]);
  const [course] = courses.filter((course) => course.courseId == courseId);
  const [assignments, setAssignments] = useState(course.assignments);

  //-----------------------------------------------------------------------------

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData) {
      setCourses(savedData);
    }else{
      localStorage.setItem("data", JSON.stringify(courses));
    }
    
  }, []);
  useEffect(() => {
    
    setAssignments(course.assignments)
    
  }, [courses]);

  
  
 

  const updateIsDone = (id, dataUpdated, assignment) => {
    const updatedAssignment = { ...assignment, isDone: dataUpdated };
    const restOfAssignments = assignments.filter(
      (assignment) => assignment.assignmentId != id
    );
    setAssignments(restOfAssignments.concat(updatedAssignment));
    const restOfData = courses.filter((course) => course.courseId != courseId);
    const updatedData = { ...course, assignments: restOfAssignments.concat(updatedAssignment) };
    setCourses(restOfData.concat(updatedData));
    localStorage.setItem("data", JSON.stringify(restOfData.concat(updatedData)));
  };

  // -------------------------------------------------------------------------------

  // --------------------------------------------------------------------- search assignments
  const [searchData, setSearchData] = useState("");
  const [filteredAssignments, setFilteredAssignments] = useState(assignments);
  const searchDataChange = (e) => {
    setSearchData(e.target.value);
  };

  const filterAssignments = (searchText) => {
    const filteredData = assignments.filter((assignment) =>
      assignment.assignmentName.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredAssignments(filteredData);
  };

  useEffect(() => {
    setFilteredAssignments(
      assignments.sort((a, b) => a.assignmentId - b.assignmentId)
    );
  }, [assignments]);

  useEffect(() => {
    filterAssignments(searchData);
  }, [searchData]);
  // --------------------------------------------------------------------------------------------------
  return (
    <>
      <NavBar />
      <Container className="mt-5 ">
        <Row>
          <Col className="text-start ">
            <h1 className="">{course.courseName}</h1>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <InputGroup className="mb-3 p-0 p-md-2 pb-md-0 me-md-0 pe-md-0">
              <Form.Control
                placeholder="Search Assignments"
                aria-label="Search Assignments"
                aria-describedby="basic-addon2"
                value={searchData}
                name="searchInput"
                onChange={searchDataChange}
              />

              <Button disabled variant="outline-secondary" id="button-addon2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <ListGroup as="ul">
          {filteredAssignments.length > 0 ? (
            <AssignmentsList
              assignments={filteredAssignments}
              updateData={updateIsDone}
            />
          ) : (
            <NotFoundPage />
          )}
        </ListGroup>
      </Container>
    </>
  );
};

export default CoursePage;
