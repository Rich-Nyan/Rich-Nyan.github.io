import React from "react";
import "./NotFound.css";
import "../colors.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate("/");
    };

    return (
        <div className="not-found">
            <div className="not-found-title">404 - Not Found</div>
            <div className="not-found-text">The page you are looking for does not exist.</div>
            <div className="head-home" onClick={handleHomeClick}>Home</div>
        </div>
    );
};
export default NotFound;