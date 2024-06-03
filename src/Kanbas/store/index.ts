import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../Database/coursesReducer";
import modulesReducer from "../Courses/Modules/reducer"
import assignmentsReducer from "../Courses/Assignments/reducer"

const store = configureStore({
    reducer: {
        coursesReducer,
        modulesReducer,
        assignmentsReducer,
    },
  });

  export default store;