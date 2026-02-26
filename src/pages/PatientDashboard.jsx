import React from 'react';
import { Heart, Activity, ShieldCheck, QrCode, Share2, FileText, ChevronRight, User, Droplets, Clock } from 'lucide-react';

export default function PatientDashboard({ setActiveTab }) {
    return (
        <div className="space-y-8 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Good morning, Alex 👋</h1>
                    <p className="text-slate-500 text-sm mt-1">Your health vault is synced and secure.</p>
                </div>
                <div className="flex gap-2">
                    <button className="h-10 px-4 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                        <Share2 className="w-4 h-4" /> Share
                    </button>
                    <button className="h-10 px-4 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-sm">
                        <QrCode className="w-4 h-4" /> Emergency ID
                    </button>
                </div>
            </div>

            {/* Vitals Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Health Index', value: '98/100', icon: Heart, color: 'text-orange-500', bg: 'bg-orange-50' },
                    { label: 'Blood Group', value: 'O+ Positive', icon: Droplets, color: 'text-red-500', bg: 'bg-red-50' },
                    { label: 'Last Sync', value: '4 min ago', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Vault Status', value: 'Secured', icon: ShieldCheck, color: 'text-slate-600', bg: 'bg-slate-100' },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
                        <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
                            <p className="text-sm font-bold text-slate-900 mt-0.5">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Patient Profile Card */}
                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=patient"
                            alt="Alex"
                            className="w-16 h-16 rounded-2xl border-2 border-orange-100 bg-orange-50"
                        />
                        <div>
                            <h2 className="font-bold text-slate-900">Alex Johnson</h2>
                            <p className="text-xs text-slate-400">DOB: 12 May 1995 • Gender: Male</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />
                                <span className="text-xs text-emerald-600 font-medium">Active & Healthy</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-sm font-semibold text-slate-700 mb-3">Recent Activity</h3>
                    <div className="space-y-2">
                        {[
                            { action: 'Prescription uploaded', target: 'Dr. Sarah — Cardiologist', time: '4m ago', icon: Activity, color: 'text-orange-500' },
                            { action: 'AI Insights generated', target: 'MedSync Engine', time: '12m ago', icon: ShieldCheck, color: 'text-emerald-500' },
                            { action: 'Vault sync complete', target: 'Encrypted backup', time: '1h ago', icon: Share2, color: 'text-slate-400' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-700 truncate">{item.action}</p>
                                    <p className="text-xs text-slate-400 truncate">{item.target}</p>
                                </div>
                                <span className="text-xs text-slate-400 flex-shrink-0">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick navigation */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-slate-700">Quick Access</h3>
                    {[
                        { label: 'Medical History', sub: 'AI-powered record archive', icon: FileText, tab: 'history', color: 'bg-orange-50 text-orange-600' },
                        { label: 'Access Control', sub: 'Delegated permissions', icon: ShieldCheck, tab: 'access', color: 'bg-emerald-50 text-emerald-600' },
                        { label: 'Guardians', sub: 'Family & emergency access', icon: User, tab: 'family', color: 'bg-blue-50 text-blue-600' },
                    ].map((card) => (
                        <button
                            key={card.tab}
                            onClick={() => setActiveTab(card.tab)}
                            className="w-full text-left bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 hover:border-orange-200 hover:bg-orange-50/30 transition-colors"
                        >
                            <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <card.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-slate-800">{card.label}</p>
                                <p className="text-xs text-slate-400 mt-0.5">{card.sub}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-300" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
