import "./style.css";

const courses = [
    {
        img: "images/app.jpg",
        link: "CS6620 Mobile Application Development",
        title: "Full Stack software developer",
    },
    {
        img: "images/robot.jpg",
        link: "CS6342 Robotic Design",
        title: "Firmware engineer",
    },
    {
        img: "images/data.jpg",
        link: "CS4580 Data Analytics",
        title: "Data engineer",
    },
    {
        img: "images/logic-board.jpg",
        link: "CS5500 System Design",
        title: "System software developer",
    },
    {
        img: "images/code.jpg",
        link: "CS3100 Complier",
        title: "Computer scientist",
    },
    {
        img: "images/algo.jpg",
        link: "CS5080 Algorithm",
        title: "Computer scientist",
    },
    {
        img: "images/arrow.jpg",
        link: "CS5610 Web Development",
        title: "Full Stack software developer",
    },
];

export default function Dashboard() {
    return (
        <div>
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length + 1})
            </h2>{" "}
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "280px", marginTop: "35px" }}
                    >
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a
                                    className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{
                                        textDecoration: "none",
                                        color: "navy",
                                        fontWeight: "bold",
                                    }}
                                >
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a
                                    href="#/Kanbas/Courses/1234/Home"
                                    className="btn btn-primary"
                                >
                                    {" "}
                                    Go{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    {courses.map((course, ind) => (
                        <Course key={ind} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Course({
    img,
    link,
    title,
}: {
    img: string;
    link: string;
    title: string;
}) {
    return (
        <div className="wd-dashboard-course col" style={{ width: "280px", marginTop: "35px"}}>
            <div className="card">
                <img src={img} />
                <div className="card-body">
                    <a
                        className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1234/Home"
                        style={{
                            textDecoration: "none",
                            color: "navy",
                            fontWeight: "bold",
                        }}
                    >
                        {link}
                    </a>
                    <p className="wd-dashboard-course-title card-text">{title}</p>
                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                </div>
            </div>
        </div>
    );
}
