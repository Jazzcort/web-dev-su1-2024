import { useSelector, useDispatch } from "react-redux";
import { setAssignments as setA, deleteAssignment, addAssignment, updateAssignment } from "../Courses/Assignments/reducer";
import * as client from "../Courses/Assignments/client";
export default function useAssignments() {
    const { assignments } = useSelector(
        (state: any) => state.assignmentsReducer
    );
    const dispatch = useDispatch();

    const setAssignments = async (courseId: string) => {
        const assignmentsData = await client.findAssignmentsForCourse(courseId);
        dispatch(setA(assignmentsData));
    };

    const deleteAssignmentServer = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    }

    const addAssignmentServer = async (courseId: string, assignment: any) => {
        const newAssignment = await client.addAssignment(courseId, assignment);
        dispatch(addAssignment(newAssignment));
    }

    const updateAssignmentServer = async (assignment: any) => {
        await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    }

    return { assignments, setAssignments, deleteAssignmentServer, addAssignmentServer, updateAssignmentServer };
}
