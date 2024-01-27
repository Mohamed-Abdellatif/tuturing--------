import AssignmentListItem from "../assignmentListItem/assignmentListItem";

const AssignmentsList = ({ assignments,updateData }) => {
  return (
    <>
      {assignments.length &&
        assignments.map((assignment,i) => {
          return (<AssignmentListItem key={i}  assignment={assignment} updateData={updateData} />)
        })}
    </>
  );
};

export default AssignmentsList;
