import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import { IoReorderThree } from "react-icons/io5";
export default function Courses() {
    return (
        <div id="wd-courses">
            <IoReorderThree className="d-inline-block align-middle fs-1 me-4 mb-2 text-danger" />
            <h2 className="d-inline-block text-danger">Course 1234</h2>
            <hr />
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
                            path="Assignments/:id"
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
