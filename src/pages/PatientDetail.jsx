import React, { useState } from 'react';
import {
    ArrowLeft,
    Activity,
    Droplet,
    Thermometer,
    Clock,
    AlertCircle,
    Heart,
    FileText,
    ShieldCheck,
    ShieldAlert,
    Calendar,
    Zap
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const pastRecords = [
    { id: 1, date: '2024-01-15', type: 'Annual Checkup', doctor: 'Dr. Sarah Smith', notes: 'Patient is in good health. BP slightly elevated.' },
    { id: 2, date: '2023-11-20', type: 'MRI Scan', doctor: 'Radiology Dept', notes: 'No abnormalities found in brain scan.' },
    { id: 3, date: '2023-08-05', type: 'Flu Treatment', doctor: 'Dr. James Wilson', notes: 'Prescribed Tamiflu and bed rest.' },
];

export default function PatientDetail({ patient, onBack }) {
    const [hasAccess, setHasAccess] = useState(false);
    const [isRequesting, setIsRequesting] = useState(false);

    // Default score if not provided
    const healthScore = patient.healthScore || 75;

    const handleRequestAccess = () => {
        setIsRequesting(true);
        setTimeout(() => {
            setHasAccess(true);
            setIsRequesting(false);
        }, 1500);
    };

    if (!patient) return null;

    return (
        <div className="space-y-10 pb-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div className="flex items-center gap-6">
                    <button
                        onClick={onBack}
                        className="p-3 bg-white/5 border border-white/10 rounded-[20px] shadow-sm hover:bg-white/10 transition-all text-white/40 hover:text-primary active:scale-95"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex-1">
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase">{patient.name}</h1>
                        <div className="flex items-center gap-4 text-white/20 mt-1">
                            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest"><Calendar className="w-3 h-3" /> {patient.age} YRS SEQUENCE</span>
                            <span className="w-1 h-1 bg-white/10 rounded-full" />
                            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary"><Droplet className="w-3 h-3" /> {patient.bloodGroup} GROUP</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-2 rounded-[24px] glass pr-6 border border-white/10 shadow-2xl shadow-black/40">
                    <div className={`w-12 h-12 rounded-[18px] flex items-center justify-center font-black text-[#0a0f1e] shadow-lg ${healthScore > 80 ? 'bg-primary shadow-primary/20 glow-blue' :
                        healthScore > 60 ? 'bg-primary/60 shadow-primary/10' : 'bg-red-400 shadow-red-500/20'
                        }`}>
                        {healthScore}
                    </div>
                    <div>
                        <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Health Index</div>
                        <div className="text-[9px] font-black text-primary uppercase tracking-widest">Neural Parameter sync</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-6 glass bg-white/5 rounded-[32px] border border-white/10 shadow-2xl shadow-black/40">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-red-400/10 border border-red-400/20 rounded-[18px]">
                            <Heart className="w-5 h-5 text-red-400" />
                        </div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Heart Rate</span>
                    </div>
                    <div className="text-3xl font-black text-white tracking-tight">72 <span className="text-sm font-black text-white/10">BPM</span></div>
                    <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 w-3/4" />
                    </div>
                </Motion.div>

                <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 glass bg-white/5 rounded-[32px] border border-white/10 shadow-2xl shadow-black/40">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 border border-primary/20 rounded-[18px]">
                            <Activity className="w-5 h-5 text-primary glow-blue" />
                        </div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Blood Pressure</span>
                    </div>
                    <div className="text-3xl font-black text-white tracking-tight">120/80 <span className="text-sm font-black text-white/10">mmHg</span></div>
                    <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/40 w-1/2" />
                    </div>
                </Motion.div>

                <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 glass bg-white/5 rounded-[32px] border border-white/10 shadow-2xl shadow-black/40">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-emerald-400/10 border border-emerald-400/20 rounded-[18px]">
                            <Thermometer className="w-5 h-5 text-emerald-400 glow-blue" />
                        </div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Temperature</span>
                    </div>
                    <div className="text-3xl font-black text-white tracking-tight">98.6 <span className="text-sm font-black text-white/10">°F</span></div>
                    <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400/40 w-2/3" />
                    </div>
                </Motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-red-400 glow-red" /> Allergic Sensitivity
                        </h2>
                        <span className="text-[9px] font-black text-red-400 bg-red-400/10 px-3 py-1 rounded-full uppercase border border-red-400/20">Critical Level</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {['Peanuts', 'Penicillin', 'Dust Mites'].map(allergy => (
                            <span key={allergy} className="px-5 py-2.5 bg-white/5 glass rounded-[20px] font-black text-[10px] text-white/40 border border-white/10 uppercase tracking-widest">
                                {allergy}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-3 mt-12">
                        <Clock className="w-5 h-5 text-primary glow-blue" /> Diagnostic Timeline
                    </h2>
                    <div className="space-y-6 relative ml-4">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />
                        {pastRecords.map((record) => (
                            <div key={record.id} className="relative pl-10">
                                <div className="absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/20" />
                                <div className="glass bg-white/5 p-6 rounded-[28px] border border-white/5 hover:border-primary/20 transition-all group shadow-2xl shadow-black/20">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-white/20">{record.date}</span>
                                        <div className="p-2 bg-white/5 border border-white/10 rounded-xl group-hover:bg-primary/10 transition-colors">
                                            <FileText className="w-3 h-3 text-white/20 group-hover:text-primary transition-all" />
                                        </div>
                                    </div>
                                    <h4 className="font-black text-white uppercase tracking-tight border-l-2 border-primary/30 pl-3 mb-2 text-sm">{record.type}</h4>
                                    <p className="text-[10px] text-white/40 font-black uppercase tracking-tight leading-relaxed">{record.doctor} • Checked diagnostics and patient history.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                        <Zap className="w-5 h-5 text-primary glow-blue" /> Clinical Intelligence
                    </h2>
                    <div className={`relative min-h-[450px] rounded-[48px] overflow-hidden border transition-all duration-700 shadow-2xl shadow-black/40 ${hasAccess ? 'border-primary/20 bg-primary/2' : 'border-white/5 bg-white/2 glass shadow-inner'
                        }`}>
                        <AnimatePresence mode="wait">
                            {!hasAccess ? (
                                <Motion.div
                                    key="denied"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
                                >
                                    <div className="w-24 h-24 bg-red-400/10 border border-red-400/20 rounded-[36px] flex items-center justify-center mb-10 shadow-inner">
                                        <ShieldAlert className="w-12 h-12 text-red-400 glow-red" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Access Restricted</h3>
                                    <p className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-12 leading-relaxed">
                                        Physician notes and sensitive neurological diagnostics are currently encrypted for patient privacy.
                                    </p>
                                    <Button
                                        onClick={handleRequestAccess}
                                        disabled={isRequesting}
                                        className="w-full max-w-xs py-8 bg-primary text-[#0a0f1e] pill-shape border-none shadow-2xl shadow-primary/20 font-black uppercase tracking-[0.2em] text-[11px] glow-blue active:scale-95"
                                    >
                                        {isRequesting ? 'Authorizing Sequence...' : 'Request Authorization'}
                                    </Button>
                                </Motion.div>
                            ) : (
                                <Motion.div
                                    key="granted"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-10 space-y-10"
                                >
                                    <div className="flex items-center gap-4 text-emerald-400 bg-emerald-400/10 w-fit px-5 py-2 rounded-full border border-emerald-400/20">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Decryption Successful</span>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-black text-white uppercase text-[10px] tracking-[0.2em]">Dr. Sarah Smith</h4>
                                            <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Feb 15, 2024</span>
                                        </div>
                                        <p className="text-white/40 leading-relaxed text-[11px] font-black uppercase tracking-tight bg-white/5 p-6 rounded-[24px] border border-white/5">
                                            Patient reports persistent mild headaches. Neurological exam normal. BP is 135/85.
                                            Suspected tension headache due to elevated stress markers.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-black text-white uppercase text-[10px] tracking-[0.2em]">Dr. Robert Chen</h4>
                                            <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Jan 22, 2024</span>
                                        </div>
                                        <p className="text-white/40 leading-relaxed text-[11px] font-black uppercase tracking-tight bg-white/5 p-6 rounded-[24px] border border-white/5">
                                            Follow-up on minor knee injury. Swelling subsided. Range of motion restored.
                                            Physiotherapy recommended for ligament maintenance.
                                        </p>
                                    </div>
                                </Motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
