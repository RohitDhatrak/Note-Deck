import React, { useState } from "react";
import { LabelSvg, HomeSvg, EditSvg } from "../Helpers/Svg";
import { EditLabel } from "./EditLabel";
import { useLabel } from "../../ContextProviders/LabelContext";

export function SidePannel() {
    const {
        labelList,
        setLabelList,
        selectedLabel,
        setSelectedLabel,
    } = useLabel();
    const [editLabelModal, setEditLabelModal] = useState(false);
    const [label, setLabel] = useState("");

    function LableList() {
        return labelList.map((label) =>
            label === "None" ? null : (
                <div
                    className={`label ${
                        label === selectedLabel ? "label-active" : null
                    }`}
                    onClick={() => setSelectedLabel(label)}
                >
                    <LabelSvg />
                    {label}
                </div>
            )
        );
    }

    function addNewLabel() {
        if (label !== "") {
            setLabelList((currentLabels) => [...currentLabels, label]);
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
                onClick={() => setSelectedLabel(label)}
                className={`label home-label ${
                    selectedLabel === "" ? "label-active" : null
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
