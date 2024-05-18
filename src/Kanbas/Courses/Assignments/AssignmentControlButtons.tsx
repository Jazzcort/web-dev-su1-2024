import GreenCheckmark from "../Modules/GreenCheckmark"
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentControlButtons() {
    return (
        <div className="float-end d-flex text-nowrap">
            <GreenCheckmark />
            <IoEllipsisVertical className="ms-3 mt-1"/>
        </div>
    )
}