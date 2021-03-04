import React from "react";

function LabelSelector({ note, labels, changeProperty }) {
    return (
        <div className="label-container">
            <a id="2" href="#2" className="label-link label-selector">
                {note.label === "None" || note.label === ""
                    ? "Add Label"
                    : note.label}
            </a>
            <div className="label-options">
                {labels.map((label) => (
                    <div
                        className="label-select"
                        onClick={(e) =>
                            label === "None"
                                ? changeProperty("", "label")
                                : changeProperty(e.target.textContent, "label")
                        }
                    >
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LabelSelector;
