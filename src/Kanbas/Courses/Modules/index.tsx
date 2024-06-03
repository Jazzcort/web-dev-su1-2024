import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
export default function Modules() {
    const { cid } = useParams();

    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const [moduleName, setModuleName] = useState("");

    return (
        <div>
            <ModulesControls
                setModuleName={setModuleName}
                moduleName={moduleName}
                addModule={() => {
                    dispatch(addModule({ name: moduleName, course: cid }));
                }}
            />
            <br />
            <br />
            <br />
            <br />
            <ul id="wd-modules" className="list-group rounded-0 text-nowrap">
                {modules
                    .filter((m: any) => m.course === cid)
                    .map((m: any) => (
                        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary fw-bold d-flex">
                                <BsGripVertical className="me-2 fs-3" />
                                {!m.editing && (
                                    <p className="wd-title-text flex-fill mb-0">
                                        {m.name}
                                    </p>
                                )}
                                {m.editing && (
                                    <input
                                        className="form-control w-50 d-inline-block"
                                        onChange={(e) =>
                                            dispatch(
                                                updateModule({
                                                    ...m,
                                                    name: e.target.value,
                                                })
                                            )
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch(
                                                    updateModule({
                                                        ...m,
                                                        editing: false,
                                                    })
                                                );
                                            }
                                        }}
                                        value={m.name}
                                    />
                                )}

                                <ModuleControlButtons
                                    moduleId={m._id}
                                    deleteModule={(moduleId) =>
                                        dispatch(deleteModule(moduleId))
                                    }
                                    editModule={(moduleId) =>
                                        dispatch(editModule(moduleId))
                                    }
                                />
                            </div>
                            {m.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {m.lessons.map((lesson: any) => (
                                        <li className="wd-lesson list-group-item p-3 ps-1">
                                            <span className="wd-title fw-bold d-flex">
                                                <BsGripVertical className="me-2 fs-3" />
                                                <p className="wd-title-text flex-fill mb-0">
                                                    {lesson.name}
                                                </p>
                                                <LessonControlButtons />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
