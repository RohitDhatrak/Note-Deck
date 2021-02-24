import React from "react";

function SidePannel({ labels, setLabels, label, setLabel, setFilter }) {
    return (
        <div className="side-bar">
            {labels.map((label) => (
                <div className="label" onClick={() => setFilter(label)}>
                    {label}
                </div>
            ))}
            <input
                onChange={(e) => setLabel(e.target.value)}
                type="text"
                name=""
                id=""
                value={label}
            />
            <button
                onClick={() => {
                    if (label !== "") {
                        setLabels([...labels, label]);
                        setLabel("");
                    }
                }}
            >
                Add Label
            </button>
        </div>
    );
}

export default SidePannel;
