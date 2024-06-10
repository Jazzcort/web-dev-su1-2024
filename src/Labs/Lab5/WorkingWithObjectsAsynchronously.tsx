import React, { useEffect, useState } from "react";
import * as client from "./client";
export default function WorkingWithObjectsAsynchronously() {
    const [assignment, setAssignment] = useState<any>({});
    const fetchAssignment = async () => {
        const assignment = await client.fetchAssignment();
        setAssignment(assignment);
    };
    const updateTitle = async (title: string) => {
        const updatedAssignment = await client.updateTitle(title);
        setAssignment(updatedAssignment);
    };
    const updateDescription = async (description: string) => {
        const updatedAssignment = await client.updateDescription(description);
        setAssignment(updatedAssignment);
    };
    const updateCompleted = async (completed: string) => {
        const updatedAssignment = await client.updateCompleted(completed);
        setAssignment(updatedAssignment);
    };
    const updateDate = async (date: string) => {
        const updatedAssignment = await client.updateDate(date);
        setAssignment(updatedAssignment);
    };

    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div id="wd-asynchronous-objects">
            <h3>Working with Objects Asynchronously</h3>
            <h4>Assignment</h4>
            <input
                defaultValue={assignment.title}
                className="form-control mb-2"
                onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
                }
            />
            <textarea
                defaultValue={assignment.description}
                className="form-control mb-2"
                onChange={(e) =>
                    setAssignment({
                        ...assignment,
                        description: e.target.value,
                    })
                }
            />
            <input
                type="date"
                className="form-control mb-2"
                defaultValue={assignment.due}
                onChange={(e) =>
                    setAssignment({ ...assignment, due: e.target.value })
                }
            />
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-completed"
                    defaultChecked={assignment.completed}
                    onChange={(e) =>
                        setAssignment({
                            ...assignment,
                            completed: e.target.checked,
                        })
                    }
                />
                <label className="form-check-label" htmlFor="wd-completed">
                    {" "}
                    Completed{" "}
                </label>
            </div>
            <button
                className="btn btn-primary me-2"
                onClick={() => updateTitle(assignment.title)}
            >
                Update Title
            </button>
            <button
                className="btn btn-primary me-2"
                onClick={() => updateDescription(assignment.description)}
            >
                Update Description 
            </button>
            <button
                className="btn btn-primary me-2"
                onClick={() => updateCompleted(assignment.completed as string)}
            >
                Update Completed 
            </button>
            <button
                className="btn btn-primary me-2"
                onClick={() => updateDate(assignment.due)}
            >
                Update Due
            </button>
            <pre>{JSON.stringify(assignment, null, 2)}</pre>
            <hr />
        </div>
    );
}
