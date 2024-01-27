import {  Col,  ListGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";




const AssignmentListItem = ({assignment,updateData}) => {
  const {isDone} = assignment;
  return (
    <>
    <ListGroup.Item as="li" className="rounded mb-3 p-4 ">
          <Row>
            <Col xs={3} md={2} lg={1} className="">
              <div className="fa-layers fa-fw fa-3x  ">
                <FontAwesomeIcon icon={faCircle} className={isDone?"text-primary ":"text-secondary"} />
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="text-white"
                  transform="shrink-8"
                />
              </div>
            </Col>
            <Col xs className="">
              <div className="p-2  text-start">
                <a href={assignment.url} target="_blank">{assignment.assignmentName}</a>
                
                </div>
            </Col>
            <Col xs={4} md={2}  className="p-2 float-end align-items-end ">
              {isDone? (<span onClick={()=>updateData(assignment.assignmentId,!isDone,assignment)}  role="button"  className="badge cursor-pointer bg-primary  rounded-pill ">Done</span>):(<span  role="button"  onClick={()=>updateData(assignment.assignmentId,!isDone,assignment)} className="badge bg-secondary rounded-pill ">Mark as Done</span>)}
            </Col>
          </Row>
        </ListGroup.Item>
    </>
  );
};

export default AssignmentListItem;