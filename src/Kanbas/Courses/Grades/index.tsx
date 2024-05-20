import GradesControlButtons from "./GradesControlButtons";
import SearchingBars from "./SearchingBars";
import TableContent from "./TableContent";
import "./styles.css"
import { CiFilter } from "react-icons/ci";

export default function Grades() {
    return (
        <div id="wd-grades" className="mt-4 ms-2">
            <GradesControlButtons />
            <SearchingBars />
            <button className="btn btn-lg btn-secondary rounded-1">
                <CiFilter className="fs-3 me-2" />
                Apply Filters
            </button>
            <TableContent />

        </div>
    )
}