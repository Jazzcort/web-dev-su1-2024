import { useSelector, useDispatch } from "react-redux";
import { setModules as setM, addModule, deleteModule, updateModule } from "../Courses/Modules/reducer";
import * as client from "../Courses/Modules/client";
export default function useModules() {
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    const setModules = async (courseId: string) => {
        const moduleData = await client.findModulesForCourse(courseId);
        dispatch(setM(moduleData));
    };

    const createModuleServer = async (courseId: string, module: any) => {
        const newModule = await client.createModule(courseId, module);
        dispatch(addModule(newModule));
    };

    const deleteModuleServer = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    }

    const updateModuleServer = async (module: any) => {
        await client.updateModule(module);
        dispatch(updateModule(module));
    }

    return { modules, setModules, createModuleServer, deleteModuleServer, updateModuleServer };
}
