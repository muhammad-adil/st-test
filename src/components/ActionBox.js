import React from "react";
import './ActionBox.css';
export default function ActionBox({ handleChange }) {
    return (
        <div className="action-box">
        <button>Show</button>
        <button>Select</button>
        <button>Define a target</button>
        <button onClick={handleChange}>Cancel</button>
        </div>
    );
}
