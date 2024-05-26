import { useLocation } from "react-router";
import {
    IoHomeOutline,
    IoLogoWebComponent,
    IoRocketOutline,
} from "react-icons/io5";
import { TbHexagonLetterP, TbSquareRoundedLetterZ } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { GrScorecard } from "react-icons/gr";
export default function CollapsedCoursesNav({
    closeCoursesNav, cid
}: {
    closeCoursesNav: any;
    cid: string
}) {
    const { pathname } = useLocation();
    return pathname.includes("Courses") ? (
        <div
            id="wd-collapsed-courses-navigation"
            className="d-block d-md-none list-group rounded-0 fs-6"
        >
            <a
                id="wd-course-home-link"
                href={`#/Kanbas/Courses/${cid}/Home`}
                className={`list-group-item text-danger border border-0 ${
                    pathname.includes("Home") ? "active" : ""
                }`}
                onClick={closeCoursesNav}
            >
                <IoHomeOutline className="mb-1 me-2" />
                Home
            </a>
            <a
                id="wd-course-modules-link"
                href={`#/Kanbas/Courses/${cid}/Modules`}
                className={`list-group-item text-danger border border-0 ${
                    pathname.includes("Modules") ? "active" : ""
                }`}
                onClick={closeCoursesNav}
            >
                <IoLogoWebComponent className="mb-1 me-2" />
                Modules
            </a>
            <a
                id="wd-course-piazza-link"
                href={`#/Kanbas/Courses/${cid}/Piazza`}
                className={`list-group-item text-danger border border-0 ${
                    pathname.includes("Piazza") ? "active" : ""
                }`}
                onClick={closeCoursesNav}
            >
                <TbHexagonLetterP className="mb-1 me-2" />
                Piazza
            </a>
            <a
                id="wd-course-zoom-link"
                href={`#/Kanbas/Courses/${cid}/Zoom`}
                className={`list-group-item text-danger border border-0 ${
                    pathname.includes("Zoom") ? "active" : ""
                }`}
                onClick={closeCoursesNav}
            >
                <TbSquareRoundedLetterZ className="mb-1 me-2" />
                Zoom
            </a>
            <a
                id="wd-course-quizzes-link"
                href={`#/Kanbas/Courses/${cid}/Assignments`}
                className={`list-group-item text-danger border border-0 ${
                    pathname.includes("Assignments") ? "active" : ""
                }`}
                onClick={closeCoursesNav}
            >
                <TfiWrite className="mb-1 me-2" />
                Assignments
            </a>
            <a
                id="wd-course-assignments-link"
                href={`#/Kanbas/Courses/${cid}/Quizzes`}
                className={`list-group-item text-danger border border-0 ${
                    pathname.includes("Quizzes") ? "active" : ""
                }`}
                onClick={closeCoursesNav}
            >
                <IoRocketOutline className="mb-1 me-2" />
                Quizzes
            </a>
            <a
                id="wd-course-grades-link"
                href={`#/Kanbas/Courses/${cid}/Grades`}
                className={`list-group-item text-danger border border-0 ${
                    pathname.includes("Grades") ? "active" : ""
                }`}
                onClick={closeCoursesNav}
            >
                <GrScorecard className="mb-1 me-2" />
                Grades
            </a>
        </div>
    ) : (
        <div></div>
    );
}
