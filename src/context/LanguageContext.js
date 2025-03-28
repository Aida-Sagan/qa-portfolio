"use client";

import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) setLanguage(lang);
    }, []);

    const changeLanguage = (lang) => {
        localStorage.setItem("lang", lang);
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);