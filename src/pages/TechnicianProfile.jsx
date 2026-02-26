import React from 'react';
import { FlaskConical, Award, Calendar, Shield, CheckCircle2, Clock } from 'lucide-react';

const activityLog = [
    { id: 1, action: 'Blood Panel uploaded', patient: 'MV-0082', time: '10:04 AM', status: 'Success' },
    { id: 2, action: 'MRI scan processed', patient: 'MV-0043', time: '09:30 AM', status: 'Success' },
    { id: 3, action: 'Upload failed — format error', patient: 'MV-0119', time: '08:15 AM', status: 'Failed' },
];

export default function TechnicianProfile() {
    return (
        <div className="space-y-6 pb-10">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Technician Profile</h1>
                <p className="text-slate-500 text-sm mt-1">Your laboratory identity and operational log.</p>
            </div>

            {/* Identity Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-orange-50 border-2 border-orange-100 overflow-hidden flex-shrink-0">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=technician" alt="Technician" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl font-bold text-slate-900">Jordan Lee</h2>
                    <p className="text-sm text-orange-500 font-medium mt-0.5">Senior Lab Technician</p>
                    <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">MedVault ID: MV-LAB-4421</span>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium">✓ Certified</span>
                        <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">Node: MRI-Alpha</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Stats */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                    <h3 className="font-semibold text-slate-800">Operational Summary</h3>
                    {[
                        { label: 'Tests Processed', value: '4,102', icon: FlaskConical },
                        { label: 'Certifications', value: 'ASCP, AMT', icon: Award },
                        { label: 'Department', value: 'Radiology & Pathology', icon: Shield },
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

                {/* Activity Log */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                    <h3 className="font-semibold text-slate-800">Audit Log</h3>
                    <div className="space-y-3">
                        {activityLog.map((log) => (
                            <div key={log.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                                <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${log.status === 'Success' ? 'bg-emerald-500' : 'bg-red-400'}`} />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-700 truncate">{log.action}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">Patient {log.patient}</p>
                                </div>
                                <span className="text-xs text-slate-400 flex-shrink-0 flex items-center gap-1"><Clock className="w-3 h-3" />{log.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
