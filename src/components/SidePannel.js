import React, { useState } from "react";

function SidePannel({ labels, filter, setFilter, setEditLabel }) {
    const [selected, setSelected] = useState("Notes");
    function LableList() {
        return labels.map((label) =>
            label === "None" ? (
                ""
            ) : (
                <div
                    className={`label ${
                        label === filter ? "label-active" : ""
                    }`}
                    onClick={(e) => {
                        setFilter(label);
                        setSelected(e.target.innerText);
                    }}
                >
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="tag-icons"
                    >
                        <path
                            d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    {label}
                </div>
            )
        );
    }

    return (
        <div className="side-bar">
            <div
                onClick={(e) => {
                    setFilter("");
                    setSelected(e.target.innerText);
                }}
                className={`label home-label ${
                    selected === "Notes" ? "label-active" : ""
                }`}
            >
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="tag-icons home-icon"
                >
                    <path
                        d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454l-6 5.454V19z"
                        fill="currentColor"
                    ></path>
                </svg>
                Notes
            </div>
            <LableList />
            <div className="label" onClick={() => setEditLabel(true)}>
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="tag-icons edit-icon"
                >
                    <path
                        d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"
                        fill="currentColor"
                    ></path>
                </svg>
                Add Label
            </div>
        </div>
    );
}

export default SidePannel;
