import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { GiBoomerangCross } from "react-icons/gi";
export default function CollapsedKanbasNav({
    closeKanbasNav,
}: {
    closeKanbasNav: any;
}) {
    return (
        <div
            id="wd-collapsed-kanbas-navigation"
            className="rounded-0"
        >
            <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
                <span className="ms-2 fw-bold text-danger" style={{fontSize: "45px"}}>
                    <GiBoomerangCross className="ms-3 me-3" />
                    Kanbas
                </span>
                <button className="btn" onClick={closeKanbasNav}>
                    <RxCross2 />
                </button>
            </div>
            <div className="list-group rounded-0 ms-5">
                <a
                    id="wd-account-link"
                    href="#/Kanbas/Account"
                    className="list-group-item text-danger bg-white d-flex border-0 align-items-center"
                    onClick={closeKanbasNav}
                >
                    <FaRegCircleUser className="fs-1 text me-4" />
                    <span>Account</span>
                </a>
                <a
                    id="wd-dashboard-link"
                    href="#/Kanbas/Dashboard"
                    className="list-group-item text-center bg-white text-danger border-0 d-flex align-items-center"
                    onClick={closeKanbasNav}
                >
                    <AiOutlineDashboard className="fs-1 me-4" />
                    <span>Dashboard</span>
                </a>
                <a
                    id="wd-course-link"
                    href="#/Kanbas/Courses"
                    className="list-group-item text-danger text-center bg-white border-0 d-flex align-items-center"
                    onClick={closeKanbasNav}
                >
                    <LiaBookSolid className="fs-1 me-4" />
                    <span>Courses</span>
                </a>
                <a
                    id="wd-calendar-link"
                    href="#/Kanbas/Calendar"
                    className="list-group-item text-danger text-center bg-white border-0 d-flex align-items-center"
                    onClick={closeKanbasNav}
                >
                    <IoCalendarOutline className="fs-1 me-4" />
                    <span>Calendar</span>
                </a>
                <a
                    id="wd-inbox-link"
                    href="#/Kanbas/Inbox"
                    className="list-group-item text-danger text-center bg-white border-0 d-flex align-items-center"
                    onClick={closeKanbasNav}
                >
                    <FaInbox className="fs-1 me-4" />
                    <span>Inbox</span>
                </a>
                <a
                    id="wd-labs-link"
                    href="#/Labs"
                    className="list-group-item text-danger text-center bg-white border-0 d-flex align-items-center"
                    onClick={closeKanbasNav}
                >
                    <LiaCogSolid className="fs-1 me-4" />
                    <span>Labs</span>
                </a>
            </div>
        </div>
    );
}
