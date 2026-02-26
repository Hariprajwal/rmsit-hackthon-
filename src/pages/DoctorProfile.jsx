import React, { useState, useRef } from 'react';
import { Shield, Edit3, Stethoscope, Calendar, Award, Trash2, RefreshCw, Save } from 'lucide-react';

export default function DoctorProfile() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
    const [isTwoFAEnabled, setIsTwoFAEnabled] = useState(true);

    const startDraw = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        setLastPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setIsDrawing(true);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        ctx.strokeStyle = '#f97316';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        const newPos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        ctx.lineTo(newPos.x, newPos.y);
        ctx.stroke();
        setLastPos(newPos);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    };

    return (
        <div className="space-y-6 pb-10">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Doctor Profile</h1>
                <p className="text-slate-500 text-sm mt-1">Your professional medical identity and credentials.</p>
            </div>

            {/* Identity Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-orange-50 border-2 border-orange-100 overflow-hidden flex-shrink-0">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=doctor" alt="Doctor" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl font-bold text-slate-900">Prof. Dr. Alex Richards</h2>
                    <p className="text-sm text-orange-500 font-medium mt-0.5">Chief Cardiologist</p>
                    <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">MedVault ID: MV-DOC-8821</span>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium">✓ Verified</span>
                        <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">On Duty</span>
                    </div>
                </div>
                <button className="h-10 px-4 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <Edit3 className="w-4 h-4" /> Edit Profile
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Stats */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                    <h3 className="font-semibold text-slate-800">Clinical Summary</h3>
                    {[
                        { label: 'Total Patients', value: '1,284', icon: Stethoscope },
                        { label: 'Years Experience', value: '14 years', icon: Calendar },
                        { label: 'Specialty', value: 'Cardiology & Vascular', icon: Award },
                    ].map((stat) => (
                        <div key={stat.label} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                            <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <stat.icon className="w-4 h-4 text-orange-500" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">{stat.label}</p>
                                <p className="text-sm font-semibold text-slate-800">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Digital Signature */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-800">Digital Signature</h3>
                        <button onClick={clearCanvas} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-colors">
                            <RefreshCw className="w-3 h-3" /> Clear
                        </button>
                    </div>
                    <canvas
                        ref={canvasRef}
                        width={360}
                        height={140}
                        onMouseDown={startDraw}
                        onMouseMove={draw}
                        onMouseUp={() => setIsDrawing(false)}
                        onMouseLeave={() => setIsDrawing(false)}
                        className="w-full border-2 border-dashed border-slate-200 rounded-xl bg-orange-50/30 cursor-crosshair"
                    />
                    <p className="text-xs text-slate-400 text-center">Draw your signature above</p>
                </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-slate-800">Security Settings</h3>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-orange-500" />
                        <div>
                            <p className="text-sm font-medium text-slate-800">Two-Factor Authentication</p>
                            <p className="text-xs text-slate-400">Require 2FA for all logins</p>
                        </div>
                    </div>
                    <div onClick={() => setIsTwoFAEnabled(!isTwoFAEnabled)} className={`w-12 h-6 rounded-full p-1 flex cursor-pointer transition-colors ${isTwoFAEnabled ? 'justify-end bg-orange-500' : 'justify-start bg-slate-200'}`}>
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
}
