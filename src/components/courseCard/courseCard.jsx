import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard=({course})=> {
   const {subject,courseName,courseDescription,courseId}=course
  return (
    <Card>
      <Card.Header>{subject}</Card.Header>
      <Card.Body>
        <Card.Title className='text-truncate '>{courseName}</Card.Title>
        <Card.Text>
          {courseDescription}
        </Card.Text>
        <Button variant="primary">
            
            <Link className='text-decoration-none text-light stretched-link ' to={`/course/${courseId}`}>Go To Course</Link>
            </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;