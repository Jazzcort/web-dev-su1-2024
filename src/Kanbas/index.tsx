import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import { IoReorderThree } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import CollapsedCoursesNav from "./CollapsedCoursesNav";
import Courses from "./Courses";
import "./styles.css";
import { useState, useCallback, useEffect, useRef } from "react";
import CollapsedKanbasNav from "./CollapsedKanbasNav";
import { useLocation, useParams } from "react-router";
import { courses, assignments } from "./Database";

export default function Kanbas() {
    const [coursesNav, setCoursesNav] = useState(false);
    const [kanbasNav, setKanbasNav] = useState(false);
    const collapsedKanvasRef = useRef<HTMLElement | null>(null);
    const { pathname } = useLocation();
    // console.log(pathname)
    const pathArr = pathname.split("/");
    const closeKanbasNav = useCallback(() => {
        setKanbasNav(false);
    }, []);

    const closeCoursesNav = useCallback(() => {
        setCoursesNav(false);
    }, []);

    useEffect(() => {
        collapsedKanvasRef.current = document.getElementById(
            "wd-collapsed-kanbas-navigation"
        );
    });

    useEffect(() => {
        if (kanbasNav) {
            collapsedKanvasRef.current?.classList.add("kanbas-nav-active");
        } else {
            collapsedKanvasRef.current?.classList.remove("kanbas-nav-active");
        }
    }, [kanbasNav]);

    return (
        <>
            <div id="wd-kanbas" className="h-100">
                <CollapsedKanbasNav closeKanbasNav={closeKanbasNav} />
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
                        {pathArr[2] === "Courses"
                            ? `${
                                  courses.find((c) => c._id === pathArr[3])
                                      ?.name
                              }`
                            : pathArr[2]}
                        <br />
                        {pathArr.length >= 5 ? <span className="fs-6">
                            {pathArr[4] === "Assignments"
                                ? `${
                                      pathArr.length >= 6
                                          ? `${
                                                assignments.find(
                                                    (a) => a._id === pathArr[5]
                                                )?.title
                                            }`
                                          : "Assignments"
                                  }`
                                : `${pathArr[4]}`}
                        </span> : null}
                    </h4>

                    {pathname.includes("Courses") ? (
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
                    ) : (
                        <div style={{ width: "53.81px" }}></div>
                    )}
                </div>

                {coursesNav && pathArr[2] === "Courses" && pathArr.length >= 4 && (
                    <CollapsedCoursesNav closeCoursesNav={closeCoursesNav} cid={pathArr[3]} />
                )}
                <div className="d-flex">
                    <div className="d-none d-md-block bg-black pt-2">
                        <KanbasNavigation />
                    </div>
                    <div className="flex-fill p-4">
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="Dashboard" />}
                            />
                            <Route path="Account" element={<h1>Account</h1>} />
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route
                                path="Courses/:cid/*"
                                element={<Courses />}
                            />
                            <Route
                                path="Calendar"
                                element={<h1>Calendar</h1>}
                            />
                            <Route path="Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}
