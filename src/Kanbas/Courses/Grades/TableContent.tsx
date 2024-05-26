import { useParams } from "react-router";
import { enrollments, users, grades, assignments } from "../../Database";
const student = [
    {
        name: "Heidi Robinson",
        a1: 34,
        a2: 78,
        a3: 56,
        a4: 12,
    },
    {
        name: "David Taylor",
        a1: 45,
        a2: 23,
        a3: 89,
        a4: 67,
    },
    {
        name: "Judy Smith",
        a1: 89,
        a2: 45,
        a3: 12,
        a4: 78,
    },
    {
        name: "Alice Brown",
        a1: 90,
        a2: 56,
        a3: 23,
        a4: 34,
    },
    {
        name: "Victor Jackson",
        a1: 12,
        a2: 67,
        a3: 34,
        a4: 89,
    },
    {
        name: "Faythe Moore",
        a1: 56,
        a2: 78,
        a3: 12,
        a4: 90,
    },
    {
        name: "Trent Garcia",
        a1: 78,
        a2: 12,
        a3: 90,
        a4: 56,
    },
    {
        name: "Bob Martinez",
        a1: 23,
        a2: 34,
        a3: 45,
        a4: 67,
    },
    {
        name: "Eve Harris",
        a1: 67,
        a2: 89,
        a3: 23,
        a4: 12,
    },
    {
        name: "Mallory Wilson",
        a1: 34,
        a2: 12,
        a3: 78,
        a4: 90,
    },
    {
        name: "Niaj White",
        a1: 89,
        a2: 23,
        a3: 67,
        a4: 45,
    },
    {
        name: "Peggy Miller",
        a1: 45,
        a2: 67,
        a3: 34,
        a4: 23,
    },
    {
        name: "Rupert Davis",
        a1: 12,
        a2: 45,
        a3: 56,
        a4: 78,
    },
    {
        name: "Sybil Anderson",
        a1: 23,
        a2: 56,
        a3: 78,
        a4: 90,
    },
    {
        name: "Olivia Thompson",
        a1: 67,
        a2: 89,
        a3: 12,
        a4: 34,
    },
];

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
                            <tr>
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
                                    return grade ? (
                                        <td className="text-center border align-middle">
                                            {grade?.grade}%
                                        </td>
                                    ) : (
                                        <td className="text-center border align-middle">
                                            -
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

function TableRow({
    name,
    a1,
    a2,
    a3,
    a4,
}: {
    name: string;
    a1: number;
    a2: number;
    a3: number;
    a4: number;
}) {
    return (
        <tr>
            <th scope="row" className="text-danger border align-middle">
                {name}
            </th>
            <td className="text-center border align-middle">{a1}%</td>
            <td className="text-center border align-middle">{a2}%</td>
            <td className="text-center border align-middle">{a3}%</td>
            <td className="text-center border align-middle">{a4}%</td>
        </tr>
    );
}
