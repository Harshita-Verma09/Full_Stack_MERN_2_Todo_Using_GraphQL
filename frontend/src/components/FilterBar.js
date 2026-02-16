import React from "react";

function FilterBar({ setStatus }) {
    return (
        <div className="filters">
            <button onClick={() => setStatus(null)}>All</button>
            <button onClick={() => setStatus(false)}>Pending</button>
            <button onClick={() => setStatus(true)}>Completed</button>
        </div>
    );
}

export default FilterBar;
