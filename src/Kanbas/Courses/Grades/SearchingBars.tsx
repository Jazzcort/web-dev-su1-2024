import { RiArrowDownSLine } from "react-icons/ri";
export default function SearchingBars() {
    return (
        <div className="mb-3">
            <div className="row">
                <div className="col">
                    <p className="mb-2 fw-bold fs-3">Student Names</p>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control fs-5"
                            placeholder="&#xf002; Search Students"
                            id="wd-grades-students-search"
                            style={{
                                fontFamily: "Arial, FontAwesome",
                                minWidth: "160px",
                            }}
                        />
                        <span className="input-group-text">
                            <RiArrowDownSLine />
                        </span>
                    </div>
                </div>
                <div className="col">
                    <p className="mb-2 fw-bold fs-3">Assignment Names</p>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control fs-5"
                            id="wd-grades-assignments-search"
                            placeholder="&#xf002; Search Assignments"
                            style={{
                                fontFamily: "Arial, FontAwesome",
                                minWidth: "160px",
                            }}
                        />
                        <span className="input-group-text">
                            <RiArrowDownSLine />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
