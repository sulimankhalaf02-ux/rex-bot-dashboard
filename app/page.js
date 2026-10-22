
"use client";

import { useState } from "react";
import {
  LayoutDashboard, Shield, Users, Settings, Activity,
  Terminal, Menu, X, Bot, MessageSquare, Lock, Zap,
  ChevronRight
} from "lucide-react";

const items = [
  ["لوحة التحكم", LayoutDashboard],
  ["إدارة السيرفر", Shield],
  ["الأعضاء", Users],
  ["السجلات", Activity],
  ["الأوامر", Terminal],
  ["الإعدادات", Settings],
];

export default function Home() {
  const [active, setActive] = useState("لوحة التحكم");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main dir="rtl" className="min-h-screen bg-[#080c12] text-slate-100">
      <aside className={`fixed inset-y-0 right-0 z-30 w-72 border-l border-white/10 bg-[#0c121b] p-6 transition-transform md:translate-x-0 ${menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}>
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-xl font-black text-slate-950">R</div>
          <div>
            <h1 className="text-xl font-black tracking-widest">REX BOT</h1>
            <p className="text-xs text-slate-500">CONTROL CENTER</p>
          </div>
          <button className="mr-auto md:hidden" onClick={() => setMenuOpen(false)}><X /></button>
        </div>

        <p className="mb-4 text-xs font-bold text-slate-500">القائمة الرئيسية</p>
        <nav className="space-y-2">
          {items.map(([label, Icon]) => (
            <button key={label} onClick={() => { setActive(label); setMenuOpen(false); }}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${active === label ? "bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20" : "text-slate-400 hover:bg-white/5"}`}>
              <Icon size={19} />
              <span>{label}</span>
              {active === label && <ChevronRight className="mr-auto" size={16} />}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-2 flex items-center gap-2 text-cyan-200">
            <Lock size={16} /><span className="text-sm font-bold">حماية REX</span>
          </div>
          <p className="text-xs leading-6 text-slate-400">لوحة موحدة لإدارة أدوات البوت ومتابعة حالة النظام.</p>
        </div>
      </aside>

      {menuOpen && <button aria-label="إغلاق القائمة" className="fixed inset-0 z-20 bg-black/60 md:hidden" onClick={() => setMenuOpen(false)} />}

      <section className="min-h-screen md:mr-72">
        <header className="flex h-20 items-center justify-between border-b border-white/10 px-5 md:px-10">
          <div className="flex items-center gap-3">
            <button className="md:hidden" onClick={() => setMenuOpen(true)}><Menu /></button>
            <div>
              <p className="text-xs text-slate-500">REX BOT / DASHBOARD</p>
              <h2 className="mt-1 font-bold">{active}</h2>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="text-xs text-slate-300">لم يتم ربط البوت بعد</span>
          </div>
        </header>

        <div className="p-5 md:p-10">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-bl from-[#12303b] via-[#10202b] to-[#101722] p-7 md:p-10">
            <div className="absolute -left-10 -top-16 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-200">
                <Zap size={14} /> REX CONTROL CENTER
              </div>
              <h1 className="text-3xl font-black leading-tight md:text-5xl">تحكّم بسيرفرك.<br />بأسلوب مختلف.</h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
                لوحة تحكم عربية لإدارة بوت REX ومتابعة أدوات الحماية والأعضاء والسجلات من مكان واحد.
              </p>
              <button onClick={() => setActive("إدارة السيرفر")} className="mt-7 rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200">
                استكشف لوحة التحكم ←
              </button>
            </div>
            <Bot className="absolute bottom-7 left-7 hidden text-cyan-200/10 md:block" size={150} />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              [Users, "الأعضاء", "—", "بانتظار ربط Discord"],
              [Shield, "أنظمة الحماية", "غير متصل", "تحتاج إعداد البوت"],
              [Activity, "حالة البوت", "غير مربوط", "لا توجد بيانات مباشرة"],
              [MessageSquare, "السجلات", "—", "بانتظار ربط السجلات"],
            ].map(([Icon, label, value, note]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-[#0d141e] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">{label}</span>
                  <Icon size={20} className="text-cyan-200" />
                </div>
                <p className="mt-5 text-xl font-bold">{value}</p>
                <p className="mt-2 text-xs text-slate-500">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d141e] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-200"><Settings /></div>
              <div>
                <h3 className="font-bold">الخطوة القادمة</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">هذه واجهة الموقع الأولية. تسجيل دخول Discord والتحكم الحقيقي يحتاجان إعداد OAuth وربط خادم البوت وقاعدة بيانات.</p>
              </div>
            </div>
          </div>

          <footer className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-slate-600">
            REX BOT © 2026 · POWER IN SILENCE. LEGACY IN TIME.
          </footer>
        </div>
      </section>
    </main>
  );
}
