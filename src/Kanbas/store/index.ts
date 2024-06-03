import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../Database/coursesReducer";

const store = configureStore({
    reducer: {
        coursesReducer
    },
  });

  export default store;