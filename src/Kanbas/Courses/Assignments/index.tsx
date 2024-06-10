import { BsPlus } from "react-icons/bs";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";
import "./styles.css";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import useAssignments from "../../hooks/useAssignments";
import { useEffect } from "react";

const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export default function Assignments() {
    const { cid } = useParams();

    const {assignments, setAssignments, deleteAssignmentServer} = useAssignments();
    const navigate = useNavigate();

    useEffect(() => {
        setAssignments(cid? cid: "");
    }, [])

    return (
        <div id="wd-assignments">
            <div className="d-flex text-nowrap mb-5">
                <input
                    id="wd-search-assignment"
                    placeholder="&#xf002; Search..."
                    className="flex-fill ms-1 me-4 form-control form-control-sm fs-4"
                    style={{
                        fontFamily: "Arial, FontAwesome",
                        minWidth: "50px",
                    }}
                />
                <button
                    id="wd-add-assignment-group"
                    className="float-end btn btn-lg btn-secondary me-1"
                    style={{ borderRadius: "0.20rem" }}
                >
                    <BsPlus className="fs-2" style={{ marginBottom: "2px" }} />
                    Group
                </button>
                <button
                    id="wd-add-assignment"
                    className="float-end btn btn-lg btn-danger"
                    style={{ borderRadius: "0.20rem" }}
                    onClick={() => {
                        navigate(
                            `/Kanbas/Courses/${cid}/Assignments/${new Date()
                                .getTime()
                                .toString()}`
                        );
                    }}
                >
                    <BsPlus style={{ marginBottom: "2px" }} className="fs-2" />
                    Assignment
                </button>
            </div>
            <div
                id="wd-assignments-title"
                className="bg-secondary p-2 ps-2 d-flex align-items-center"
            >
                <BsGripVertical
                    className="fs-3 me-1 float-start"
                    style={{ minWidth: "28px" }}
                />

                <IoMdArrowDropdown
                    className="fs-3 me-2"
                    style={{ minWidth: "28px" }}
                />

                <span className="fs-3 flex-fill">ASSIGNMENTS</span>

                <span className="float-end me-1 fs-6 p-1 text-center border rounded-start-5 rounded-end-5 border-secondary">
                    40% of Total
                </span>
                <AssignmentsControlButtons />
            </div>

            <ul id="wd-assignment-list" className="list-group rounded-0">
                {assignments
                    .filter((a: any) => a.course === cid)
                    .map((a: any) => (
                        
                        <li
                            key={a._id}
                            className="wd-assignment-list-item list-group-item d-flex align-items-center p-4"
                        >
                            <BsGripVertical
                                className="me-3 fs-3"
                                style={{ minWidth: "28px" }}
                            />
                            <FaPenToSquare
                                className="fs-4 me-3 text-success"
                                style={{ minWidth: "28px" }}
                            />
                            <div className="text-secondary flex-fill fs-5 me-3">
                                <Link
                                    key={`/Kanbas/Courses/${cid}/Assignments/${a._id}`}
                                    to={`/Kanbas/Courses/${cid}/Assignments/${a._id}`}
                                    className="wd-assignment-link text-black text-decoration-none fs-4 fw-bold"
                                >
                                    {a.title}
                                </Link>
                                <br />
                                <span className="text-danger fw-medium">
                                    Multiple Modules
                                </span>{" "}
                                | <strong>Not available until</strong>{" "}
                                {getDate(
                                    a.available_from ? a.available_from : ""
                                )}{" "}
                                at 12:00am | <strong>Due</strong>{" "}
                                {getDate(a.due_date ? a.due_date : "")} at
                                11:59pm | {a.points ? a.points : "-"} pts{" "}
                            </div>
                            
                            <AssignmentControlButtons
                                key={a._id}
                                assignmentTitle={a.title}
                                assignmentId={a._id}
                                deleteAssignment={(assignmentId) =>
                                    deleteAssignmentServer(assignmentId)
                                }
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

function getDate(date_str: string) {
    const date = new Date(date_str + "T00:00:00.000-05:00");

    if (Number.isNaN(date.getMonth())) {
        return "TBN";
    }

    let res = "";
    res += month[date.getMonth()] + " ";
    res += date.getDate();

    return res;
}
