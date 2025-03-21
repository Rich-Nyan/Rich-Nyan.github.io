import React, { useState } from "react";
import "./Header.css";
import "../colors.css";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { useCurrentPage } from "../context/CurrentPageContext";
const Header = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    const { currentPage, setCurrentPage } = useCurrentPage();
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate("/");
        setCurrentPage(null);
    };
    const handleCourseworkClick = () => {
        navigate("/coursework");
        setCurrentPage("coursework");
    };
    const handleProjectsClick = () => {
        navigate("/projects");
        setCurrentPage("projects");
    };
    const handleDarkModeClick = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className="header">
            <div className="left">
                <div onClick={handleHomeClick} className="name">Ryan Chin</div>
            </div>
            <div className="right">
                {/* <div onClick={handleCourseworkClick} className="coursework-name">
                    {currentPage === "coursework" ? (
                        <div className="coursework-name-active">Coursework</div>
                    ) : (
                        <div className="coursework-name-inactive">Coursework</div>
                    )}
                </div>
                <div onClick={handleProjectsClick} className="projects-name">
                    {currentPage === "projects" ? (
                        <div className="projects-name-active">Projects</div>
                    ) : (
                        <div className="projects-name-inactive">Projects</div>
                    )}
                </div> */}
                <div onClick={handleDarkModeClick} className="dark-mode">
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="dark-mode-icon" viewBox="0 0 16 16">
                            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="light-mode-icon" viewBox="0 0 16 16">
                            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    )
                    }
                </div>
            </div>
        </div>
    );
};
export default Header;