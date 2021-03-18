import React from "react";
import { MenuSvg } from "../Helpers/Svg";
import logo from "../../images/logo.png";
import { useLabel } from "../../ContextProviders/LabelContext";

export function Header() {
    const { selectedLabel } = useLabel();

    return (
        <div className="header">
            <div className="menu-icon">
                <MenuSvg />
            </div>
            {selectedLabel === "" ? (
                <div className="home-heading">
                    <img className="logo" src={logo} alt="Logo" />
                    <span className="label-heading">Note Deck</span>
                </div>
            ) : (
                <div className="label-heading">{selectedLabel}</div>
            )}
        </div>
    );
}
