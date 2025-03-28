"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
    const { language, changeLanguage } = useLanguage();

    const linkStyle = {
        margin: "0 10px",
        textDecoration: "none",
        color: "#333",
        fontWeight: "500",
    };

    const buttonStyle = {
        padding: "6px 12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        backgroundColor: "#f9f9f9",
        cursor: "pointer",
        fontSize: "0.9rem",
    };

    return (
        <header style={{ padding: "20px", textAlign: "center" }}>
            <h1 style={{ marginBottom: "10px" }}>
                {language === "ru" ? "Портфолио Aida QA" : "Aida QA Portfolio"}
            </h1>
            <nav style={{ marginBottom: "15px" }}>
                <Link href="/" style={linkStyle}>
                    {language === "ru" ? "Главная" : "Home"}
                </Link>
                <Link href="/projects" style={linkStyle}>
                    {language === "ru" ? "Проекты" : "Projects"}
                </Link>
                <Link href="/resume" style={linkStyle}>
                    {language === "ru" ? "Резюме" : "Resume"}
                </Link>

                <Link href="/contact" style={linkStyle}>
                    {language === "ru" ? "Контакты" : "Contact"}
                </Link>
            </nav>
            <div>
                <button onClick={() => changeLanguage("en")} style={{ ...buttonStyle, marginRight: "10px" }}>
                    🇬🇧 EN
                </button>
                <button onClick={() => changeLanguage("ru")} style={buttonStyle}>
                    🇷🇺 RU
                </button>
            </div>
        </header>
    );
}
