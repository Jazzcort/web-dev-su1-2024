import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import { IoReorderThree } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import CollapsedCoursesNav from "./CollapsedCoursesNav";
import Courses from "./Courses";
import "./styles.css";
import { useState, useCallback } from "react";
import CollapsedKanbasNav from "./CollapsedKanbasNav";

export default function Kanbas() {
    const [coursesNav, setCoursesNav] = useState(false);
    const [kanbasNav, setKanbasNav] = useState(false);
    const closeKanbasNav = useCallback(() => {
        setKanbasNav(false);
    }, []);

    return (
        <div id="wd-kanbas" className="h-100">
            <div className="d-flex justify-content-between d-md-none bg-black">
                <button
                    onClick={() => {
                        setKanbasNav(true);
                    }}
                    className="btn btn-lg bg-black text-white"
                >
                    <IoReorderThree />
                </button>
                <h4 className="text-white text-center align-middle mt-2 text-nowrap">
                    Course 1234
                </h4>
                <button
                    onClick={() => {
                        setCoursesNav((old) => !old);
                    }}
                    className="btn btn-lg bg-black text-white"
                >
                    {coursesNav ? (
                        <RxCross2 className="" />
                    ) : (
                        <IoIosArrowDown />
                    )}
                </button>
            </div>
            {kanbasNav && (
                <CollapsedKanbasNav closeKanbasNav={closeKanbasNav} />
            )}
            {coursesNav && <CollapsedCoursesNav />}
            <div className="d-flex">
                <div className="d-none d-md-block bg-black pt-2">
                    <KanbasNavigation />
                </div>
                <div className="flex-fill p-4">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Courses/:id/*" element={<Courses />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
