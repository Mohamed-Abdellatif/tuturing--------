import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseListItem = ({ course }) => {
  return (
    <Row
      key={course.courseId}
      className="course-list-row mb-3 list-group-item d-flex justify-content-between align-items-center mx-0"
    >
      <Col xs={12} md={5} xl={3} className="border-end border-black ">
        <span className=" pe-xl-2  ">{course.courseName}</span>
      </Col>
      <Col xs={12} md={6} xl={4}>
        <Link
          className="text-decoration-none text-dark stretched-link "
          to={`/course/${course.courseId}`}
        >
          {course.courseDescription}
        </Link>
      </Col>
      <Col xs={12} md={1} xl={1} className="border-start  border-black ">
        <span className="badge bg-primary rounded-pill">{course.subject}</span>
      </Col>
    </Row>
  );
};

export default CourseListItem;
