import "./style.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourse } from "../Database/coursesReducer"
export default function Dashboard() {
    const { courses, course } = useSelector((state: any) => state.coursesReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h5>
                New Course
                <button
                    className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => { dispatch(addNewCourse()) }}
                >
                    {" "}
                    Add{" "}
                </button>
                <button
                    id="wd-update-course-click"
                    className="btn btn-warning float-end me-2"
                    onClick={() => { dispatch(updateCourse()) }}
                >
                    Update
                </button>
            </h5>{" "}
            <br />
            <input
                value={course.name}
                className="form-control mb-2"
                onChange={(e) => { dispatch(setCourse({...course, name: e.target.value})) }}
            />
            <textarea
                value={course.description}
                className="form-control"
                onChange={(e) =>
                    dispatch(setCourse({...course, description: e.target.value}))
                }
            />
            <hr />
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
            </h2>{" "}
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((c: any) => (
                        <div
                            className="wd-dashboard-course col"
                            style={{ width: "300px" }}
                        >
                            <Link
                                to={`/Kanbas/Courses/${c._id}/Home`}
                                className="text-decoration-none"
                            >
                                <div className="card rounded-3 overflow-hidden">
                                    <img
                                        src={`${c.image}`}
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
                                            {c.name}
                                        </span>
                                        <p
                                            className="wd-dashboard-course-title card-text"
                                            style={{
                                                maxHeight: 53,
                                                overflow: "hidden",
                                            }}
                                        >
                                            {c.description}
                                        </p>
                                        <Link
                                            to={`/Kanbas/Courses/${c._id}/Home`}
                                            className="btn btn-primary"
                                        >
                                            Go
                                        </Link>
                                        <button
                                            id="wd-delete-course-click"
                                            className="btn btn-danger float-end"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(deleteCourse(c._id))
                                            }}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            id="wd-edit-course-click"
                                            className="btn btn-warning float-end me-1"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(setCourse(c))
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
