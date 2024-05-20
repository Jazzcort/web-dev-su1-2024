import { FaGear } from "react-icons/fa6";
import { CiImport, CiExport } from "react-icons/ci";
import { RiArrowDownWideFill } from "react-icons/ri";

export default function GradesControlButtons() {
    return (
        <div id="wd-grades-control-buttons" className="d-flex flex-row-reverse mb-2">
            <button className="ms-2 btn btn-lg btn-secondary rounded-1">
                <FaGear />
            </button>
            <button className=" ms-2 btn btn-lg btn-secondary rounded-1">
                <CiExport className="me-2" />
                Export
                <RiArrowDownWideFill className="ms-2"/>
            </button>
            <button className=" ms-2 btn btn-lg btn-secondary rounded-1">
                <CiImport className="me-2" />
                Import
            </button>
        </div>
    );
}
