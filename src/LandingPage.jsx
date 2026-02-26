import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Shield,
  Activity,
  ShieldAlert,
  User,
  QrCode,
  Share2,
  Download,
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white p-8 md:p-12 selection:bg-primary selection:text-[#0a0f1e] overflow-x-hidden">

      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Welcome Back, <span className="text-primary glow-blue">Bhavana</span> 👋</h1>
            <p className="text-sm text-white/40 font-black uppercase tracking-[0.3em]">Patient Identity: MV-8821-BHA • Vault Sync Active</p>
          </div>
          <Motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-6 glass bg-white/5 p-3 rounded-[32px] border-white/10"
          >
            <div className="text-right hidden md:block px-4">
              <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Active Session</p>
              <p className="text-sm font-bold">Bhavana Dash</p>
            </div>
            <img src="https://i.pravatar.cc/100" alt="profile" className="w-16 h-16 rounded-[24px] border-2 border-primary shadow-lg shadow-primary/20" />
          </Motion.div>
        </header>

        {/* Vital Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Blood Group", value: "B Positive", icon: Activity, color: "text-primary" },
            { label: "Allergies", value: "Pollen", icon: ShieldAlert, color: "text-red-400" },
            { label: "Age", value: "20 Years", icon: User, color: "text-primary" },
            { label: "Risk Score", value: "Low", icon: ShieldCheck, color: "text-emerald-400" },
          ].map((stat, idx) => (
            <Motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass bg-white/5 p-8 rounded-[40px] border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon className="w-12 h-12" />
              </div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">{stat.label}</p>
              <h3 className={`text-2xl font-black uppercase tracking-tight ${stat.color}`}>{stat.value}</h3>
              <div className="mt-4 h-1 w-12 bg-white/10 rounded-full group-hover:w-full transition-all duration-500" />
            </Motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Household Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.3em]">Verified Guardians</h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline flex items-center gap-2">
                Manage Access <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Shreya", relation: "Primary", img: "101" },
                { name: "Arya", relation: "Secondary", img: "102" }
              ].map((guardian) => (
                <div key={guardian.name} className="glass bg-white/5 p-6 rounded-[32px] border-white/10 flex items-center gap-6 group hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 bg-[#0a0f1e] rounded-[24px] overflow-hidden border-2 border-white/5 group-hover:border-primary/40 transition-all">
                    <img src={`https://i.pravatar.cc/100?u=${guardian.img}`} alt={guardian.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-tight">{guardian.name}</h4>
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">{guardian.relation}</p>
                  </div>
                  <div className="ml-auto w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secure Sharing Section */}
          <div className="glass bg-primary/5 border border-primary/20 p-10 rounded-[48px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Shield className="w-32 h-32 text-primary" />
            </div>
            <div className="space-y-4 relative z-10">
              <h2 className="text-xl font-black uppercase tracking-tight">Vault Delegation</h2>
              <p className="text-xs font-bold text-white/40 leading-relaxed uppercase">Securely share encrypted medical fragments with verified personnel.</p>
            </div>

            <div className="space-y-4 pt-10 relative z-10">
              <Motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full h-14 bg-primary text-[#0a0f1e] rounded-[24px] font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl shadow-primary/20 glow-blue"
              >
                <Share2 className="w-4 h-4" /> Generate Access Link
              </Motion.button>
              <div className="grid grid-cols-2 gap-4">
                <button className="h-14 bg-white/5 border border-white/10 rounded-[24px] font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                  <QrCode className="w-4 h-4" /> QR Key
                </button>
                <button className="h-14 bg-white/5 border border-white/10 rounded-[24px] font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                  <Download className="w-4 h-4" /> Export
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Security Footer */}
        <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-widest">End-to-End Cryptographic Encryption Active</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest">MedVault Systems v2.0.4 • ISO 27001 Certified</p>
        </footer>

      </div>
    </div>
  );
};

export default LandingPage;
