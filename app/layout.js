
import "./globals.css";

export const metadata = {
  title: "REX BOT | Control Center",
  description:
    "لوحة التحكم الرسمية لبوت REX BOT — POWER IN SILENCE. LEGACY IN TIME.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
