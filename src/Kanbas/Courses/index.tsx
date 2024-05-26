import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { IoReorderThree } from "react-icons/io5";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../Database";
export default function Courses() {
    const { cid } = useParams();
    const course = courses.find((c) => c._id === cid);
    const { pathname } = useLocation();
    return (
        <div id="wd-courses">
            <h2 className="d-none d-md-inline-block text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr className="d-none d-md-block" />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h2>Piazza</h2>} />
                        <Route path="Zoom" element={<h2>Zoom</h2>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:aid"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
