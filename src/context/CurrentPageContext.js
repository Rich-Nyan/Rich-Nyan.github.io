import { createContext, useState, useContext, useEffect } from "react";

const CurrentPageContext = createContext();

export const CurrentPageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(() => {
        return localStorage.getItem("currentPage") || "";
    });

    useEffect(() => {
        if (currentPage === "coursework") {
            document.documentElement.classList.add("coursework");
            document.documentElement.classList.remove("projects");
        } else if (currentPage === "projects") {
            document.documentElement.classList.add("projects");
            document.documentElement.classList.remove("coursework");
        } else {
            document.documentElement.classList.remove("coursework");
            document.documentElement.classList.remove("projects");
        }
        localStorage.setItem("currentPage", currentPage);
    }, [currentPage]);

    return (
        <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </CurrentPageContext.Provider>
    );
};

export const useCurrentPage = () => useContext(CurrentPageContext);
