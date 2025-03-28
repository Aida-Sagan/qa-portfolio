"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ProjectCard({ project }) {
    const { language } = useLanguage();

    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "250px",
            textAlign: "left",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <h2 style={{ marginBottom: "10px" }}>{project.title[language]}</h2>
            <p style={{ marginBottom: "15px", color: "#555" }}>{project.description[language]}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                textDecoration: "none",
                color: "#0070f3",
                fontWeight: "bold"
            }}>
                🔗 {language === "ru" ? "Посмотреть проект" : "View Project"}
            </a>
        </div>
    );
}
