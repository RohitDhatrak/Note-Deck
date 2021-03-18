import React from "react";
import { ColourPalletSvg } from "../Svg";
import { colours } from "../Colours";

export function ColourPicker({ changeProperty }) {
    function changeColour(e) {
        changeProperty({
            value: e.target.style.backgroundColor,
            property: "colour",
        });
    }

    return (
        <div className="colour-container">
            <span className="colour-link">
                <ColourPalletSvg />
            </span>

            <div className="colour-options">
                {Object.keys(colours).map((colour) => (
                    <div
                        className="colour"
                        onClick={(e) => changeColour(e)}
                        style={{ backgroundColor: `${colours[colour]}` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
