import "./index.css";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
export default function CoursesNavigation() {
    const {pathname} = useLocation();
    const { cid } = useParams();
    const links = [
        "Home",
        "Modules",
        "Piazza",
        "Zoom",
        "Assignments",
        "Quizzes",
        "Grades",
    ];
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key={`/Kanbas/Courses/${cid}/${link}`}
                    to={`/Kanbas/Courses/${cid}/${link}`}
                    className={`list-group-item text-danger border border-0 ${pathname.includes(link) ? "active" : ""}`}
                    id={`wd-course-${link.toLowerCase()}-link`}
                >
                    {link}
                </Link>
            ))}
        </div>
    );
}
