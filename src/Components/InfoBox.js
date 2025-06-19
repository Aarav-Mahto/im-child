import React from "react";
import "./InfoBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const InfoBox = ({ text }) => {
    return (
        <div className="info-box">
        <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
        <span className="info-text">{text}</span>
        </div>
    );
};

export default InfoBox;