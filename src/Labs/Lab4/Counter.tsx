import React, { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7);
    const updateCount = (change: number) => {
        setCount((old) => old + change);
    };
    return (
        <div id="wd-counter-use-state">
            <h2>Counter: {count}</h2>
            <button
                onClick={() => {
                    updateCount(1);
                }}
                id="wd-counter-up-click"
                className="btn btn-success"
            >
                Up
            </button>
            <button
                onClick={() => {
                    updateCount(-1);
                }}
                id="wd-counter-down-click"
                className="btn btn-danger ms-2"
            >
                Down
            </button>
            <hr />
        </div>
    );
}
