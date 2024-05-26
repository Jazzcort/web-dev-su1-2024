import { useParams } from "react-router";
import { enrollments, users, grades, assignments } from "../../Database";

export default function TableContent() {
    const { cid } = useParams();
    const students = enrollments.filter(
        (enrollment) => enrollment.course === cid
    );
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === cid
    );
    return (
        <div className="mt-4 table-responsive">
            <table className="table table-striped text-nowrap">
                <thead>
                    <tr>
                        <th scope="col" className="border align-middle">
                            Student Name
                        </th>
                        {courseAssignments.map((assignment) => (
                            <th
                                key={assignment._id}
                                scope="col"
                                className="text-center align-middle border"
                            >
                                <span className="d-block">
                                    {assignment.title}
                                </span>
                                <span className="fs-6 fw-medium">
                                    out of 100
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => {
                        const user = users.find((u) => u._id === student.user);
                        return (
                            <tr key={student._id}>
                                <th
                                    scope="row"
                                    className="text-danger border align-middle"
                                >
                                    {`${user?.firstName} ${user?.lastName}`}
                                </th>
                                {courseAssignments.map((assignment) => {
                                    const grade = grades.find(
                                        (grade) =>
                                            grade.student === student.user &&
                                            grade.assignment === assignment._id
                                    );
                                    return (
                                        <td key={assignment._id + student._id} className="text-center border align-middle">
                                            {grade ? `${grade.grade}%` : "-"}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
