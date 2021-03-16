import React, { useState } from "react";
import { LabelSvg, HomeSvg, EditSvg } from "../Helpers/Svg";
import EditLabel from "./EditLabel";
import { useLabel } from "../../ContextProviders/LabelContext";

function SidePannel() {
    const { labelList, setLabelList, filter, setFilter } = useLabel();
    const [selected, setSelected] = useState("Notes");
    const [editLabelModal, setEditLabelModal] = useState(false);
    const [label, setLabel] = useState("");

    function LableList() {
        return labelList.map((label) =>
            label === "None" ? null : (
                <div
                    className={`label ${
                        label === filter ? "label-active" : null
                    }`}
                    onClick={(e) => {
                        setFilter(label);
                        setSelected(e.target.innerText);
                    }}
                >
                    <LabelSvg />
                    {label}
                </div>
            )
        );
    }

    function addNewLabel() {
        if (label !== "") {
            setLabelList([...labelList, label]);
            setLabel("");
        }
        setEditLabelModal(false);
    }

    return (
        <div className="side-bar">
            {editLabelModal ? (
                <div
                    className="edit-label-component-container"
                    onClick={addNewLabel}
                >
                    <EditLabel
                        label={label}
                        setLabel={setLabel}
                        addNewLabel={addNewLabel}
                    />
                </div>
            ) : null}

            <div
                onClick={(e) => {
                    setFilter("");
                    setSelected(e.target.innerText);
                }}
                className={`label home-label ${
                    selected === "Notes" ? "label-active" : null
                }`}
            >
                <HomeSvg />
                Notes
            </div>

            <LableList />

            <div className="label" onClick={() => setEditLabelModal(true)}>
                <EditSvg />
                Add Label
            </div>
        </div>
    );
}

export default SidePannel;
