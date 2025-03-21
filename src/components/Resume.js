import React from "react";
import Header from "./Header";
import "../colors.css";
import "./Resume.css";
import resume from "../assets/ChinRyan-resume.pdf";

const Resume = () => {
    return (
        <>
        <Header />
        <div className="resume">
            <div className="resume-title">Resume</div>
            <iframe src={resume} className="resume-iframe"></iframe>
        </div>
        </>
    );
}
export default Resume;