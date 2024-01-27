import CourseListItem from "../courseListItem/courseListItem";

const CoursesList=({courses})=>{
    return <>
    {courses.length &&
        courses.map((course) => {
          return (
            <CourseListItem course={course} key={course.courseId}/>
          );
        })}</>
}

export default CoursesList