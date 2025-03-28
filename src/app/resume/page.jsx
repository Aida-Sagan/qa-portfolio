"use client";

import Header from "../../components/Header";
import { useLanguage } from "../../context/LanguageContext";

export default function Resume() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <main style={{ textAlign: "center", padding: "40px" }}>
                <h1 style={{ fontSize: "2.5rem" }}>
                    {language === "ru" ? "РЕЗЮМЕ" : "RESUME"}
                </h1>
                <p style={{ marginTop: "20px" }}>
                    {language === "ru"
                        ? "Здесь ты можешь скачать моё резюме."
                        : "Here you can download my resume."}
                </p>
                <div style={{ marginTop: "30px" }}>
                    <a
                        href="https://drive.google.com/file/d/160pfUbAtobYq1yHJ-AB9gKP6nhxISNFi/view?usp=sharing"
                        download
                        style={{
                            padding: "10px 20px",
                            borderRadius: "8px",
                            backgroundColor: "#0070f3",
                            color: "#fff",
                            textDecoration: "none",
                            fontWeight: "500"
                        }}
                        target={"_blank"}
                    >
                        {language === "ru" ? "Посмотреть резюме (АНГЛ)" : "Show CV (ENG)"}
                    </a>
                </div>

                <div style={{ marginTop: "30px" }}>
                    <a
                        href="https://drive.google.com/file/d/1405A0oAtw53vm_BAJNfJgjMLj6st_YUx/view?usp=sharing"
                        download
                        style={{
                            padding: "10px 20px",
                            borderRadius: "8px",
                            backgroundColor: "#405e7e",
                            color: "#fff",
                            textDecoration: "none",
                            fontWeight: "500"
                        }}
                        target={"_blank"}
                    >
                        {language === "ru" ? "Посмотреть резюме (РУС)" : "Show CV (RU)"}
                    </a>
                </div>
            </main>
        </>
    );
}
