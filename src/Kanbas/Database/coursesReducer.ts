import { createSlice } from "@reduxjs/toolkit";
import * as db from ".";
import * as client from "../Courses/client";
import { act } from "react";

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

// const tmp: any = db.courses.map((item) => ({
//     ...item,
//     image: `/images/${randomImage()}`,
// }));

const initialState = {
    courses: <any>[],
    course: {
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description",
    },
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, action) => {
            // const newCourse = {
            //     ...state.course,
            //     _id: new Date().getTime().toString(),
            //     image: `/images/${randomImage()}`,
            // };
            state.courses = [...state.courses, { ...action.payload, image: `/images/${randomImage()}`}];
        },
        deleteCourse: (state, action) => {
            state.courses = state.courses.filter(
                (item: any) => item._id !== action.payload
            );
        },
        updateCourse: (state) => {
            state.courses = state.courses.map((item: any) =>
                item._id === state.course._id ? { ...state.course } : item
            );
        },
        setCourse: (state, action) => {
            state.course = action.payload;
        },
        initializeCourses: (state, action) => {
            state.courses = action.payload.map((item: any) => ({
                ...item,
                image: `/images/${randomImage()}`,
            }));
        },
    },
});

export const {
    addNewCourse,
    deleteCourse,
    updateCourse,
    setCourse,
    initializeCourses,
} = coursesSlice.actions;
export default coursesSlice.reducer;
