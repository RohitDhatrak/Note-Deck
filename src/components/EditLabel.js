import React from "react";

function EditLabel({ label, setLabel, addNewLabel }) {
    return (
        <div onClick={(e) => e.stopPropagation()} className="edit-label-card">
            <div className="edit-label-title">Add Label</div>
            <input
                className="edit-label-input"
                type="text"
                placeholder="New Label"
                onChange={(e) => setLabel(e.target.value)}
                value={label}
            />

            <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="edit-label-done-icon"
                onClick={addNewLabel}
            >
                <path
                    d="M18 6.7l-8.48 8.48l-3.54-3.54a.996.996 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.18-9.18a.999.999 0 0 0-.01-1.42c-.37-.38-1-.38-1.39.01z"
                    fill="currentColor"
                ></path>
            </svg>
        </div>
    );
}

export default EditLabel;
