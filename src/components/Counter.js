import React from "react";
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(1);
    const [textColor, setTextColor] = useState("black");

    const toggleUpdate = () => {
        setCounter(counter + 1);
        setTextColor(textColor === "black" ? "red" : "black");
    }

    return (
        <div>

            <h1 style={{ color: textColor }}>{counter}</h1>
            <button onClick={toggleUpdate}>
                Increase
            </button>
        </div>
    )
}