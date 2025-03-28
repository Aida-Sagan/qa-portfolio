"use client";

import Header from "../../components/Header";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <main style={{ textAlign: "center", padding: "40px" }}>
                <h1 style={{ fontSize: "2.5rem" }}>
                    {language === "ru" ? "КОНТАКТЫ" : "CONTACT"}
                </h1>
                <p style={{ marginTop: "20px" }}>
                    {language === "ru"
                        ? "Ты можешь связаться со мной по следующим каналам:"
                        : "You can contact me via:"}
                </p>
                <div style={{ marginTop: "20px", lineHeight: "2" }}>
                    <p>
                        📧 Email:{" "}
                        <a href="mailto:aidakassengaliyeva@gmail.com" style={{ color: "#0070f3" }}>
                            aidakassengaliyeva@gmail.com
                        </a>
                    </p>
                    <p>
                        📱 {language === "ru" ? "Телефон" : "Phone"}:{" "}
                        <a href="tel:+77027961695" style={{ color: "#0070f3" }}>
                            +7 702 796 1695
                        </a>
                    </p>
                    <p>
                        💬 Telegram:{" "}
                        <a href="https://t.me/aida_sgndkva" target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3" }}>
                            @aida_sgndkva
                        </a>
                    </p>
                </div>
            </main>
        </>
    );
}
