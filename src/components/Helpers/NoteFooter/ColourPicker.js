import React from "react";
import { ColourPalletSvg } from "../Svg";

function ColourPicker({ colours, changeProperty }) {
    return (
        <div className="colour-container">
            <a id="1" href="#1" className="colour-link">
                <ColourPalletSvg />
            </a>

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
