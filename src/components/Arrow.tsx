import React from "react";
import { ArrowProps } from "../utils/interfaces";

const Arrow: React.FC<ArrowProps> = ({ iconType }) => {
    const color =
        iconType === "like"
            ? "#2196F3"
            : iconType === "love"
            ? "red"
            : iconType === "insight"
            ? "#edd528"
            : iconType === "celebrate"
            ? "green"
            : "purple";

    return (
        <div className="arrow-container" style={{ color: color }}>
            <div className="arrow" style={{ borderTopColor: color }}></div>
            <div className="leg" style={{ backgroundColor: color }}></div>
        </div>
    );
};

export default Arrow;
