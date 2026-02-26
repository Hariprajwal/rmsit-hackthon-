import React, { useState } from 'react';
import {
    Upload,
    FileText,
    ChevronRight,
    AlertTriangle,
    ShieldX,
    FlaskConical,
    Clock,
    BarChart3,
    CheckCircle2,
    Trash2,
    Lock,
    User
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion as Motion, AnimatePresence } from 'framer-motion';

export default function LabTechDashboard() {
    const [isUploading, setIsUploading] = useState(false);
    const [patientId, setPatientId] = useState('');
    const [category, setCategory] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);
        setTimeout(() => {
            setIsUploading(false);
            setPatientId('');
            setCategory('');
            setRemarks('');
        }, 2000);
    };

    return (
        <div className="space-y-10">
            {/* Header section with Role Badge */}
            <div className="flex justify-between items-end">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-white tracking-tight uppercase">Lab Processing Portal</h1>
                    <p className="text-sm text-white/40 font-bold uppercase tracking-widest text-primary">Diagnostic Input • Scan Processing Pipeline</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 text-primary rounded-full border border-primary/20 glow-blue">
                    <Lock className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Write-Only Node Active</span>
                </div>
            </div>

            {/* Analytics Header: 3 Action-Oriented Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Samples to Process</p>
                        <h3 className="text-3xl font-black text-white">14</h3>
                        <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase glow-blue">Awaiting Input</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-[22px] border border-white/5">
                        <FlaskConical className="w-7 h-7 text-primary" />
                    </div>
                </Motion.div>

                <Motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 flex items-center justify-between overflow-hidden">
                    <div>
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Avg. Turnaround</p>
                        <h3 className="text-3xl font-black text-white">4.2 <span className="text-sm font-black text-white/20">h</span></h3>
                        <span className="text-[10px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full uppercase">Efficiency High</span>
                    </div>
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                            <Motion.circle
                                cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent"
                                className="text-primary"
                                initial={{ strokeDasharray: "176", strokeDashoffset: "176" }}
                                animate={{ strokeDashoffset: "44" }} /* 75% efficiency example */
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                        </svg>
                        <Clock className="w-5 h-5 text-primary glow-blue absolute" />
                    </div>
                </Motion.div>

                <Motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Scans Uploaded Today</p>
                        <h3 className="text-3xl font-black text-white">28</h3>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Daily Goal: 40</span>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                        {[30, 60, 45, 90, 70].map((h, i) => (
                            <Motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                className="w-2 bg-primary/20 rounded-t-sm"
                            />
                        ))}
                        <BarChart3 className="w-6 h-6 text-primary glow-blue ml-2 mb-1" />
                    </div>
                </Motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Main Feature: Write-Only Access Portal */}
                <div className="space-y-8">
                    <div className="glass p-10 rounded-[40px] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/20 border border-primary/20 rounded-[18px] glow-blue">
                                <Upload className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-xl font-black text-white tracking-tight uppercase">New Result Upload</h2>
                        </div>

                        <div className="border-2 border-dashed border-white/10 rounded-[32px] p-12 flex flex-col items-center justify-center bg-white/2 hover:bg-white/5 hover:border-primary transition-all cursor-pointer group shadow-inner">
                            <div className="w-16 h-16 bg-white/5 rounded-[24px] shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-[#0a0f1e] text-white/20 border border-white/10">
                                <Upload className="w-8 h-8" />
                            </div>
                            <p className="text-lg font-black text-white/60 uppercase tracking-tight">Identify Scans Node</p>
                            <p className="text-xs text-white/20 mt-2 uppercase tracking-widest font-black">Authorized Sequence Only</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-4">Patient Unique Identifier</label>
                                    <Input
                                        placeholder="MV-SYNC-NODE"
                                        className="bg-white/5 border-white/10 text-white font-black uppercase h-14 rounded-[20px] focus:border-primary/50"
                                        value={patientId}
                                        onChange={(e) => setPatientId(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-4">Diagnostic Category</label>
                                    <select
                                        className="w-full h-14 px-6 rounded-[20px] bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest outline-none focus:border-primary/50 appearance-none cursor-pointer"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="" className="bg-[#0a0f1e]">Select Protocol...</option>
                                        <option value="blood" className="bg-[#0a0f1e]">Hematology Scan</option>
                                        <option value="radiology" className="bg-[#0a0f1e]">Radiology Wave</option>
                                        <option value="cardio" className="bg-[#0a0f1e]">Cardiology Neural</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-4">Diagnostic Remarks</label>
                                <textarea
                                    className="w-full p-6 rounded-[32px] bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-tight outline-none focus:border-primary/50 transition-all min-h-[120px]"
                                    placeholder="Enter precision-focused observations..."
                                    value={remarks}
                                    onChange={(e) => setRemarks(e.target.value)}
                                />
                            </div>

                            <Button
                                className="w-full py-8 bg-primary text-[#0a0f1e] pill-shape shadow-2xl shadow-primary/20 active:scale-95 transition-all text-[11px] font-black uppercase tracking-[0.2em] border-none glow-blue"
                                disabled={isUploading}
                            >
                                {isUploading ? 'Encrypting & Syncing...' : 'Submit Diagnostic Data'}
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Security Logic: Access Restricted Badge */}
                    <div className="p-8 rounded-[40px] bg-[#0a1e3b] border border-white/10 shadow-2xl shadow-black/40 space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -mr-16 -mt-16" />
                        <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/20 rounded-[18px] border border-primary/20">
                                    <ShieldX className="w-5 h-5 text-primary glow-blue" />
                                </div>
                                <h3 className="font-black text-white uppercase tracking-[0.2em] text-[10px]">Clinical Guard Active</h3>
                            </div>
                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase border border-primary/20">Tier 1 Node</span>
                        </div>
                        <p className="text-white/40 text-[11px] leading-relaxed font-black uppercase tracking-tight bg-black/20 p-6 rounded-[24px] border border-white/5 relative z-10">
                            "Access Restricted: Write-Only Mode enabled. Historical patient diagnostics and physician observations are obfuscated for your session."
                        </p>
                        <div className="space-y-4 px-2 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary glow-blue" />
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Metadata encryption active</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary glow-blue" />
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Biometric sync current</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[40px] border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
                        <h4 className="font-black text-white/20 text-[10px] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                            <BarChart3 className="w-5 h-5 text-primary" /> Session Activity Track
                        </h4>
                        <div className="space-y-4">
                            {[
                                { id: 'MV-982', category: 'Radiology', status: 'Verified', time: '12m ago' },
                                { id: 'MV-104', category: 'Blood Panel', status: 'Processing', time: '45m ago' },
                                { id: 'MV-331', category: 'MRI Scan', status: 'Failed Sync', time: '1h ago', error: true },
                            ].map(item => (
                                <div key={item.id} className="flex items-center justify-between p-5 bg-white/5 rounded-[24px] border border-white/5 hover:bg-white/10 transition-all cursor-default group">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${item.error ? 'text-primary' : 'text-primary glow-blue'}`}>
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-white uppercase tracking-tight">Node {item.id}</div>
                                            <div className="text-[9px] font-black text-white/20 uppercase tracking-widest">{item.category}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-[9px] font-black uppercase tracking-widest ${item.error ? 'text-primary/40' : 'text-primary glow-blue'}`}>
                                            {item.status}
                                        </div>
                                        <div className="text-[8px] font-black text-white/10 uppercase">{item.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
