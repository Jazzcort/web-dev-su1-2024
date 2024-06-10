import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: <any>[]
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            state.assignments.push(assignment);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            );
        },
        deleteAssignment: (state, { payload: aid }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== aid);
        },
        setAssignments: (state, {payload: assignments}) => {
            state.assignments = assignments;
        }
    },
});

export const { addAssignment, updateAssignment, deleteAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
