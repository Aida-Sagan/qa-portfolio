"use client";

import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <main style={{ textAlign: "center", padding: "40px" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                    {language === "ru" ? "МОИ ПРОЕКТЫ" : "MY PROJECTS"}
                </h1>
                <p style={{ marginBottom: "30px" }}>
                    {language === "ru"
                        ? "Здесь можно ознакомиться с моими проектами QA."
                        : "Here you can see my QA projects."}
                </p>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px"
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </main>
        </>
    );
}
