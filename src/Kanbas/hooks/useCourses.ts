import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourse as setC, initializeCourses } from "../Database/coursesReducer"
import * as client from "../Courses/client"
export default function useCourses() {
    const { course, courses } = useSelector((state: any) => state.coursesReducer)
    const dispatch = useDispatch();

    const addNewCourseServer = async () => {
        const newCourse = await client.createCourse(course);
        dispatch(addNewCourse(newCourse))
    }

    const fetchCoursesFromServer = async () => {
        const courses = await client.fetchAllCourses();
        dispatch(initializeCourses(courses));
    }

    const setCourse = (course: any) => {
        dispatch(setC(course));
    }

    const deleteCourseServer = async (courseId: string) => {
        await client.deleteCourse(courseId);
        dispatch(deleteCourse(courseId))
    }

    const updateCourseServer = async () => {
        await client.updateCourse(course);
        dispatch(updateCourse());

    }

    return { course, courses, addNewCourseServer, fetchCoursesFromServer, setCourse, deleteCourseServer, updateCourseServer }

}