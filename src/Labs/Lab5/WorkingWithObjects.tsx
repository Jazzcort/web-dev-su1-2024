import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const [module, setModule] = useState({
        id: 2,
        name: "Basics of Rust",
        description: "Learn basics of Rust programming in 3 hours",
        course: "Rust Crash Course",
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    return (
        <div id="wd-working-with-objects">
            <h3 id="wd-working-with-objects">Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a
                id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
            >
                Update Title
            </a>
            <input
                className="form-control w-75 mb-2"
                id="wd-assignment-title"
                value={assignment.title}
                onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
                }
            />
            <a
                id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
            >
                Update Score 
            </a>
            <input
                type="number"
                id="wd-assignment-score"
                className="form-control w-75 mb-2"
                value={assignment.score}
                onChange={(e) =>
                    setAssignment((old) => ({
                        ...old,
                        score: parseInt(e.target.value),
                    }))
                }
            />
            <a
                id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
                Update Completed Property 
            </a>
            <input type="checkbox" id="wd-assignment-completed" className="me-2 form-check-input" checked={assignment.completed} onChange={(e) => setAssignment((old) => ({...old, completed: e.target.checked}))}/>
            <label htmlFor="wd-assignment-completed">Completed</label>
            <hr />

            <h4>Retrieving Objects</h4>
            <a
                id="wd-retrieve-assignments"
                className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}
            >
                Get Assignment
            </a>
            <hr />
            <h4>Retrieving Properties</h4>
            <a
                id="wd-retrieve-assignment-title"
                className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}
            >
                Get Title
            </a>
            <hr />
            <h4>Module</h4>
            <a
                href={`${MODULE_API_URL}/name/${module.name}`}
                id="wd-update-module-name"
                className="btn btn-primary float-end"
            >
                Update Name
            </a>
            <input
                id="wd-module-name"
                className="form-control w-75 mb-2"
                value={module.name}
                onChange={(e) =>
                    setModule((old) => ({ ...old, name: e.target.value }))
                }
            />
            <a
                href={`${MODULE_API_URL}/description/${module.description}`}
                id="wd-update-module-description"
                className="btn btn-primary float-end"
            >
                Update Description 
            </a>
            <textarea
                id="wd-module-description"
                className="form-control mb-2"
                style={{width: "60%"}}
                value={module.description}
                onChange={(e) =>
                    setModule((old) => ({ ...old, description: e.target.value }))
                }
            />
            <a
                id="wd-retrieve-module"
                href={MODULE_API_URL}
                className="btn btn-primary me-2"
            >
                Get Module
            </a>
            <a
                id="wd-retrieve-module-name"
                href={`${MODULE_API_URL}/name`}
                className="btn btn-primary me-2"
            >
                Get Module Name
            </a>
            <hr />
        </div>
    );
}
