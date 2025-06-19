import React from "react";
import { useRef } from "react";
import { MdInfoOutline } from "react-icons/md";
import "./Tooltip.css";
import ReactMarkdown from "react-markdown";

const Tooltip = ({ text }) => {

    const tooltipRef = useRef();
    return (
        <div className="info-container">
            <MdInfoOutline size={25} className="info-icon"/>
            <div className={`tooltip tooltip-right`} ref={tooltipRef}>
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    );
    };

export default Tooltip;