import "./style.css";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { useState } from "react";

const images = [
    "algo.jpg",
    "app.jpg",
    "arrow.jpg",
    "code.jpg",
    "data.jpg",
    "keyboard-tape.jpg",
    "logic-board.jpg",
    "robot.jpg",
    "reactjs.jpg",
];

const randomImage = () => {
    const ind = Math.floor(Math.random() * images.length);
    return images[ind];
};

export default function Dashboard() {
    const [courses, setCourses] = useState(
        db.courses.map((item) => ({
            ...item,
            image: `/images/${randomImage()}`,
        }))
    );
    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description",
    });

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString(),
            image: `/images/${randomImage()}`,
        };
        setCourses([...courses, { ...newCourse }]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses((old) => old.filter((item) => item._id !== courseId));
    };

    const updateCourse = () => {
        setCourses((old) =>
            old.map((item) => (item._id === course._id ? { ...course } : item))
        );
    };

    return (
        <div>
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h5>
                New Course
                <button
                    className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse}
                >
                    {" "}
                    Add{" "}
                </button>
                <button
                    id="wd-update-course-click"
                    className="btn btn-warning float-end me-2"
                    onClick={updateCourse}
                >
                    Update
                </button>
            </h5>{" "}
            <br />
            <input
                value={course.name}
                className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <textarea
                value={course.description}
                className="form-control"
                onChange={(e) =>
                    setCourse({ ...course, description: e.target.value })
                }
            />
            <hr />
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
                                        src={`${course.image}`}
                                        style={{ height: "160px" }}
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
                                        <button
                                            id="wd-delete-course-click"
                                            className="btn btn-danger float-end"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            id="wd-edit-course-click"
                                            className="btn btn-warning float-end me-1"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCourse(course);
                                            }}
                                        >
                                            Edit
                                        </button>
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
