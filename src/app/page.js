"use client";

import Header from "../components/Header";
import Image from "next/image";
import profilePic from "../../public/images/aida.jpg";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
    const { language } = useLanguage();

    const skills = {
        testing: ["Playwright", "Cypress", "Postman", "Mocha / Chai", "Sinon.js", "API Testing"],
        development: ["JS / TS", "HTML / CSS / SCSS", "React", "Next.js"],
        tools: ["SQL", "Git", "REST API", "CI/CD (GitHub Actions)"]
    };

    const skillsRu = {
        testing: ["Playwright", "Cypress", "Postman", "Mocha / Chai", "Sinon.js", "API тестирование"],
        development: ["JS / TS", "HTML / CSS / SCSS", "React", "Next.js"],
        tools: ["SQL", "Git", "REST API", "CI/CD (GitHub Actions)"]
    };

    return (
        <>
            <Header />
            <main style={{ textAlign: "center", padding: "40px" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                    {language === "ru" ? "ОБО МНЕ" : "ABOUT"}
                </h1>
                <div style={{ marginBottom: "20px" }}>
                    <Image
                        src={profilePic}
                        alt="Aida"
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%" }}
                    />
                </div>
                {language === "ru" ? (
                    <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6", fontSize: "1.1rem" }}>
                        Привет! Я QA инженер с 2 годами коммерческого опыта в ручном и автоматизированном тестировании
                        веб-приложений. Также обладаю навыками фронтенд-разработки и CI/CD процессов.
                        В этом портфолио собраны мои проекты, отражающие мой подход к тестированию и качеству.
                    </p>
                ) : (
                    <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6", fontSize: "1.1rem" }}>
                        Hi! I'm a QA Engineer with 2 years of commercial experience in manual and automated testing of
                        web applications. I also have frontend development skills and experience with CI/CD pipelines.
                        This portfolio showcases my projects and testing approach.
                    </p>
                )}

                <h2 style={{ fontSize: "2rem", marginTop: "40px" }}>
                    {language === "ru" ? "НАВЫКИ" : "SKILLS"}
                </h2>

                {Object.keys(skills).map((category, index) => (
                    <div key={index} style={{ marginTop: "30px" }}>
                        <h3 style={{ marginBottom: "10px" }}>
                            {language === "ru"
                                ? category === "testing"
                                    ? "Тестирование"
                                    : category === "development"
                                        ? "Разработка"
                                        : "Инструменты"
                                : category === "testing"
                                    ? "Testing"
                                    : category === "development"
                                        ? "Development"
                                        : "Tools"}
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "16px",
                                marginTop: "10px"
                            }}
                        >
                            {(language === "ru" ? skillsRu[category] : skills[category]).map((skill, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: "1px solid #ddd",
                                        borderRadius: "50%",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                        fontSize: "0.95rem"
                                    }}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
}
