import { BsPlus } from "react-icons/bs";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";
import "./styles.css";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { assignments } from "../../Database";
export default function Assignments() {
    const { cid } = useParams();
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === cid
    );
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
                {courseAssignments.map((a) => (
                    <li className="wd-assignment-list-item list-group-item d-flex align-items-center p-4">
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
                            | <strong>Not available until</strong> May 6 at
                            12:00am | <strong>Due</strong> May 13 at 11:59pm |
                            100 pts
                        </div>
                        <AssignmentControlButtons />
                    </li>
                ))}

                {/* <li className="wd-assignment-list-item list-group-item d-flex align-items-center p-4">
                    <BsGripVertical
                        className="me-3 fs-3"
                        style={{ minWidth: "28px" }}
                    />
                    <FaPenToSquare
                        className="fs-4 me-3 text-success"
                        style={{ minWidth: "28px" }}
                    />
                    <div className="text-secondary flex-fill fs-5 me-3">
                        <a
                            className="wd-assignment-link text-black text-decoration-none fs-4 fw-bold"
                            href="#/Kanbas/Courses/1234/Assignments/123"
                        >
                            A1
                        </a>
                        <br />
                        <span className="text-danger fw-medium">
                            Multiple Modules
                        </span>{" "}
                        | <strong>Not available until</strong> May 6 at 12:00am
                        | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                    <AssignmentControlButtons />
                </li>
                <li className="wd-assignment-list-item list-group-item d-flex align-items-center p-4">
                    <BsGripVertical
                        className="me-3 fs-3"
                        style={{ minWidth: "28px" }}
                    />
                    <FaPenToSquare
                        className="fs-4 me-3 text-success"
                        style={{ minWidth: "28px" }}
                    />
                    <div className="text-secondary flex-fill fs-5 me-3">
                        <a
                            className="wd-assignment-link text-black text-decoration-none fs-4 fw-bold"
                            href="#/Kanbas/Courses/1234/Assignments/123"
                        >
                            A2
                        </a>
                        <br />
                        <span className="text-danger fw-medium">
                            Multiple Modules
                        </span>{" "}
                        | <strong>Not available until</strong> May 13 at 12:00am
                        | <strong>Due</strong> May 20 at 11:59pm | 100 pts
                    </div>
                    <AssignmentControlButtons />
                </li>
                <li className="wd-assignment-list-item list-group-item d-flex align-items-center p-4">
                    <BsGripVertical
                        className="me-3 fs-3"
                        style={{ minWidth: "28px" }}
                    />
                    <FaPenToSquare
                        className="fs-4 me-3 text-success"
                        style={{ minWidth: "28px" }}
                    />
                    <div className="text-secondary flex-fill fs-5 me-3">
                        <a
                            className="wd-assignment-link text-black text-decoration-none fs-4 fw-bold"
                            href="#/Kanbas/Courses/1234/Assignments/123"
                        >
                            A3 - JAVASCRIPT + REACT
                        </a>
                        <br />
                        <span className="text-danger fw-medium">
                            Multiple Modules
                        </span>{" "}
                        | <strong>Not available until</strong> May 20 at 12:00am
                        | <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </div>
                    <AssignmentControlButtons />
                </li> */}
            </ul>
        </div>
    );
}
