import { useLocation } from "react-router";
export default function TOC() {
    const { pathname } = useLocation();
    return (
        <div>
            <ul className=" nav nav-pills">
                <li className="nav-item">
                    <a id="wd-a" href="#/Labs" className="nav-link">
                        Labs
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-a1" href="#/Labs/Lab1" className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
                        Lab1
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-a2" href="#/Labs/Lab2" className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
                        Lab2
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-a3" href="#/Labs/Lab3" className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
                        Lab3
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-a4" href="#/Labs/Lab4" className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
                        Lab4
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-a5" href="#/Labs/Lab5" className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
                        Lab5
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-k" href="#/Kanbas" className="nav-link">
                        Kanbas
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-github-react" href="https://github.com/Jazzcort/web-dev-su1-2024" className="nav-link">
                        React Github
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-github-express" href="https://github.com/Jazzcort/kanbas-node-server-app" className="nav-link">
                        Express Github
                    </a>
                </li>
            </ul>
        </div>
    );
}
