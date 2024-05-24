import "./style.css";
import { Link } from "react-router-dom";
import { courses } from "../Database";

const images = [
    "algo.jpg",
    "app.jpg",
    "arrow.jpg",
    "code.jpg",
    "data.jpg",
    "keyboard-tape.jpg",
    "logic-board.jpg",
    "robot.jpg",
    "reactjs.jpg"
]

const randomImage = () => {
    const ind = Math.floor(Math.random() * images.length)
    return images[ind]
}

export default function Dashboard() {
    return (
        <div>
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
            </h2>{" "}
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div
                            className="wd-dashboard-course col"
                            style={{ width: "300px" }}
                        >
                            <Link
                                to={`/Kanbas/Courses/${course._id}/Home`}
                                className="text-decoration-none"
                            >
                                <div className="card rounded-3 overflow-hidden">
                                    <img
                                        src={`/images/${randomImage()}`}
                                        style={{height: "160px"}}
                                    />
                                    <div className="card-body">
                                        <span
                                            className="wd-dashboard-course-link"
                                            style={{
                                                textDecoration: "none",
                                                color: "navy",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {course.name}
                                        </span>
                                        <p
                                            className="wd-dashboard-course-title card-text"
                                            style={{
                                                maxHeight: 53,
                                                overflow: "hidden",
                                            }}
                                        >
                                            {course.description}
                                        </p>
                                        <Link
                                            to={`/Kanbas/Courses/${course._id}/Home`}
                                            className="btn btn-primary"
                                        >
                                            Go
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}