import React from "react";
import { useLabel } from "../../../ContextProviders/LabelContext";

export function LabelSelector({ note, changeProperty }) {
    const { labelList } = useLabel();
    function selectLabel({ e, label }) {
        if (label === "None") {
            changeProperty({ value: "", property: "label" });
        } else {
            changeProperty({
                value: e.target.textContent,
                property: "label",
            });
        }
    }

    return (
        <div className="label-container">
            <span className="label-link label-selector">
                {note.label === "None" || note.label === ""
                    ? "Add Label"
                    : note.label}
            </span>

            <div className="label-options">
                {labelList.map((label) => (
                    <div
                        className="label-select"
                        onClick={(e) => selectLabel({ e, label })}
                        key={label}
                    >
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}
