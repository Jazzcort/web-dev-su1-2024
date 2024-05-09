export default function Modules() {
    return (
        <div>
            <button>Collapse All</button>
            <button>View Progress</button>
            <select id="wd-module-filter">
                <option value="PUBLISH-ALL">Publish All</option>
            </select>
            <button>+ Module</button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">
                        Week 1, Lecture 1 - Course Introduction, Syllabus,
                        Agenda
                    </div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">
                                LEARNING OBJECTIVES
                            </span>
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Introduction to the course
                                </li>
                                <li className="wd-content-item">
                                    Learn what is Web Development
                                </li>
                                <li className="wd-content-item">
                                    Creating a development environment
                                </li>
                                <li className="wd-content-item">
                                    Creating a Web Application
                                </li>
                                <li className="wd-content-item">
                                    Getting started with the 1st assignment
                                </li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Reading</span>
                            <ul>
                                <li className="wd-content-item">
                                    Full Stack Developer - Chapter 1 -
                                    Introduction
                                </li>
                                <li className="wd-content-item">
                                    Full Stack Developer - Chapter 2 - Creating
                                    User Interfaces With HTML
                                </li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Slides</span>
                            <ul>
                                <li className="wd-content-item">
                                    Introduction to Web Developmen
                                </li>
                                <li className="wd-content-item">
                                    Creating an HTTP server with Node.js
                                </li>
                                <li className="wd-content-item">
                                    Creating a React Application
                                </li>
                                <li className="wd-content-item">
                                    Creating your source to GitHub.com
                                </li>
                                <li className="wd-content-item">
                                    Deploying to Netlify
                                </li>
                                <li className="wd-content-item">
                                    Deploying multiple branches in Netlify
                                </li>
                                <li className="wd-content-item">
                                    Creating an HTTP server with Node.js
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">
                        Week 1, Lecture 2 - Formatting User Interface with HTML
                    </div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">
                                LEARNING OBJECTIVES
                            </span>
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Learn how to create user interfaces with
                                    HTML
                                </li>
                                <li className="wd-content-item">
                                    Keep working on assignment 1
                                </li>
                                <li className="wd-content-item">
                                    Deploy the assignment to Netlify
                                </li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Reading</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Full Stack Developer - Chapter 1 -
                                    Introduction
                                </li>
                                <li className="wd-content-item">
                                    Full Stack Developer - Chapter 2 - Creating
                                    User Interfaces With HTML
                                </li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Slides</span>
                            <ul>
                                <li className="wd-content-item">
                                    Introduction to HTML and the DOM
                                </li>
                                <li className="wd-content-item">
                                    Formatting Web content with Headings and
                                    Paragraphs
                                </li>
                                <li className="wd-content-item">
                                    Formatting content with Lists and Tables
                                </li>
                                <li className="wd-content-item">
                                    Creating Web Forms
                                </li>
                                <li className="wd-content-item">
                                    Navigating with Anchors
                                </li>
                                <li className="wd-content-item">
                                    Embedding content wiith Iframes
                                </li>
                                <li className="wd-content-item">
                                    Drawing with Scalable Vector Graphics
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
