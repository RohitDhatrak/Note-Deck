import React from "react";
import { ColourPalletSvg } from "../Svg";
import colours from "../Colours";

function ColourPicker({ changeProperty }) {
    return (
        <div className="colour-container">
            <span className="colour-link">
                <ColourPalletSvg />
            </span>

            <div className="colour-options">
                {Object.keys(colours).map((colour) => (
                    <div
                        className="colour"
                        onClick={(e) =>
                            changeProperty(
                                e.target.style.backgroundColor,
                                "colour"
                            )
                        }
                        style={{ backgroundColor: `${colours[colour]}` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ColourPicker;
