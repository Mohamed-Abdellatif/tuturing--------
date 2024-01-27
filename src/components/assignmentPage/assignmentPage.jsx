import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../navbar/navbar";
import { useParams } from "react-router-dom";

const AssignmentPage = () => {
  const assignments = [
    { assignmentId: 1, assignmentName: "Assignment 1" },
    { assignmentId: 2, assignmentName: "Assignment 2" },
    { assignmentId: 3, assignmentName: "Assignment 3" },
    { assignmentId: 4, assignmentName: "Assignment 4" },
    { assignmentId: 5, assignmentName: "Assignment 5" },
    { assignmentId: 6, assignmentName: "Assignment 6" },
    { assignmentId: 7, assignmentName: "Assignment 7" },
    { assignmentId: 8, assignmentName: "Assignment 8" },
    { assignmentId: 9, assignmentName: "Assignment 9" },
    { assignmentId: 10, assignmentName: "Assignment 10" },
    { assignmentId: 11, assignmentName: "Assignment 11" },
  ];
  const { assignmentId } = useParams();
  const [assignment] = assignments.filter(
    (assignment) => assignment.assignmentId == assignmentId
  );
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row className="mb-3">
          <Col xs={12}>
            <h1>{assignment.assignmentName}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col xs={12} md={6} className="" > 
            
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AssignmentPage;
