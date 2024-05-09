import React from "react";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
function App() {
    return (
        <HashRouter>
            <h1>Chih-Tao Lee</h1>
            <h2>section: 41239</h2>
            <a href="https://github.com/Jazzcort/web-dev-su1-2024">GitHub repo</a>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Labs" />} />
                    <Route path="/Labs/*" element={<Labs />} />
                    <Route path="/Kanbas/*" element={<Kanbas />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
