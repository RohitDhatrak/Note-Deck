import React from "react";

function SidePannel({ labels, setLabels, label, setLabel, setFilter }) {
    function addNewLabel() {
        if (label !== "") {
            setLabels([...labels, label]);
            setLabel("");
        }
    }

    function LableList() {
        return labels.map((label) => (
            <div
                className="label"
                onClick={() =>
                    label === "All" ? setFilter("") : setFilter(label)
                }
            >
                {label}
            </div>
        ));
    }

    return (
        <div className="side-bar">
            <LableList />
            <input
                onChange={(e) => setLabel(e.target.value)}
                type="text"
                value={label}
            />
            <button onClick={addNewLabel}>Add Label</button>
        </div>
    );
}

export default SidePannel;
