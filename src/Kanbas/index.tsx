import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import { IoReorderThree } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import CoursesNavigation from "./Courses/Navigation"
import Courses from "./Courses";
import "./styles.css"
import { useState } from "react";

export default function Kanbas() {
    const [coursesNav, setCoursesNav] = useState(false);
    return (
        <div id="wd-kanbas" className="h-100">
            <div className="d-flex justify-content-between d-md-none bg-black">
                <button className="btn btn-lg bg-black text-white">
                    <IoReorderThree />
                </button>
                <h4 className="text-white text-center align-middle mt-2 text-nowrap">Course 1234</h4>
                <button onClick={() => {
                    setCoursesNav((old) => !old);
                }} className="btn btn-lg bg-black text-white">
                    <IoIosArrowDown />
                </button>
            </div>
            { coursesNav && <CoursesNavigation /> }
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
