import React from "react";
import { CheckSvg } from "../Helpers/Svg";

export function EditLabel({ label, setLabel, addNewLabel }) {
    return (
        <div onClick={(e) => e.stopPropagation()} className="edit-label-card">
            <div className="edit-label-title">Add Label</div>

            <input
                className="edit-label-input"
                type="text"
                autoFocus
                placeholder="New Label"
                onChange={(e) => setLabel(e.target.value)}
                value={label}
            />
            <button onClick={addNewLabel}>
                <CheckSvg />
            </button>
        </div>
    );
}
