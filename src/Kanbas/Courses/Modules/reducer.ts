import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../../Database";
const initialState = {
    modules: [],
};
const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, { payload: module }) => {
            const newModule: any = {
                lessons: [],
                ...module,
            };
            state.modules = [...state.modules, newModule] as any;
        },
        deleteModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.filter(
                (m: any) => m._id !== moduleId
            );
        },
        updateModule: (state, { payload: module }) => {
            state.modules = state.modules.map((m: any) =>
                m._id === module._id ? module : m
            ) as any;
        },
        editModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.map((m: any) =>
                m._id === moduleId ? { ...m, editing: true } : m
            ) as any;
        },
        setModules: (state, action) => {
            state.modules = action.payload;
        },
    },
});
export const { addModule, deleteModule, updateModule, editModule, setModules } =
    modulesSlice.actions;
export default modulesSlice.reducer;
