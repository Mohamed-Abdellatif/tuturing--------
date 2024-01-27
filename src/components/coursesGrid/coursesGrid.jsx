import { Col } from "react-bootstrap";
import CourseCard from "../courseCard/courseCard";

const CoursesMapper = ({ courses, xl, md, xs }) => {
  return (
    <>
      {courses.length &&
        courses.map((course) => {
          return (
            <Col className="mb-4" key={course.courseId} xs={xs} md={md} xl={xl}>
              <CourseCard course={course} />
            </Col>
          );
        })}
    </>
  );
};

export default CoursesMapper;
