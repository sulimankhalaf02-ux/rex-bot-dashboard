
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#071b1b",
        color: "#e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "36px 24px",
          border: "1px solid #3b7775",
          borderRadius: "20px",
          background: "#0c2727",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            letterSpacing: "4px",
            color: "#8edbd5",
            marginBottom: "8px",
          }}
        >
          REX BOT
        </h1>

        <p style={{ color: "#b7c9c9" }}>
          POWER IN SILENCE. LEGACY IN TIME.
        </p>

        <h2 style={{ marginTop: "32px" }}>
          تسجيل الدخول
        </h2>

        <p style={{ color: "#b7c9c9", marginBottom: "24px" }}>
          سجّل دخولك باستخدام حساب Discord للمتابعة إلى لوحة التحكم.
        </p>

        <button
          onClick={() => signIn("discord", { callbackUrl: "/" })}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: "#5865F2",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          تسجيل الدخول عبر Discord
        </button>

        <p style={{ color: "#829b9b", fontSize: "12px", marginTop: "24px" }}>
          REX BOT · SECURE ACCESS
        </p>
      </section>
    </main>
  );
}
