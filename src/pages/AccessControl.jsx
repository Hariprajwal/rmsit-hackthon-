import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, UserPlus, Lock, Unlock, Clock, Search, Trash2 } from 'lucide-react';

const initialPermissions = [
    { id: '1', name: 'Dr. Sarah Smith', role: 'Cardiologist', hospital: 'St. Mary Oncology', access: 'Permanent', status: 'Authorized' },
    { id: '2', name: 'Technician Alex', role: 'Radiology Tech', hospital: 'Lab Node MRI-Alpha', access: '24 Hours', status: 'Authorized' },
    { id: '3', name: 'Dr. Robert Brown', role: 'General Physician', hospital: 'Express Clinic', access: 'Expired', status: 'Revoked' },
];

export default function AccessControl() {
    const [permissions, setPermissions] = useState(initialPermissions);
    const [isGranting, setIsGranting] = useState(false);

    const revoke = (id) => setPermissions(prev => prev.map(p => p.id === id ? { ...p, status: 'Revoked' } : p));

    return (
        <div className="space-y-6 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Access Control</h1>
                    <p className="text-slate-500 text-sm mt-1">Manage who can view your encrypted medical records.</p>
                </div>
                <button
                    onClick={() => setIsGranting(true)}
                    className="h-10 px-4 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-sm"
                >
                    <UserPlus className="w-4 h-4" /> Grant Access
                </button>
            </div>

            {/* Privacy banner */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                    <p className="text-sm font-semibold text-orange-800">Privacy Protocol Active</p>
                    <p className="text-xs text-orange-600 mt-0.5">Doctors cannot view your records until you explicitly grant access through this portal.</p>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">Authorized Entities</h2>
                </div>

                <div className="divide-y divide-slate-100">
                    {permissions.map((p) => (
                        <div key={p.id} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${p.status === 'Authorized' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'}`}>
                                    {p.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">{p.name}</p>
                                    <p className="text-xs text-slate-400">{p.role} — {p.hospital}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 text-xs text-slate-400">
                                    <Clock className="w-3 h-3" /> {p.access}
                                </div>
                                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${p.status === 'Authorized' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                    {p.status === 'Authorized' ? <><Unlock className="w-3 h-3 inline mr-1" />Authorized</> : <><Lock className="w-3 h-3 inline mr-1" />Revoked</>}
                                </span>
                                {p.status === 'Authorized' && (
                                    <button onClick={() => revoke(p.id)} className="text-red-400 hover:text-red-600 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Grant Modal */}
            {isGranting && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-6" onClick={() => setIsGranting(false)}>
                    <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Grant New Access</h2>
                        <p className="text-sm text-slate-500 mb-6">Authorize a doctor to view your vault records.</p>
                        <input
                            placeholder="Doctor ID (e.g. MV-DOC-8821)"
                            className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors mb-4"
                        />
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button className="h-11 bg-slate-100 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">24 Hour Session</button>
                            <button className="h-11 bg-orange-500 text-white rounded-xl text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm">Permanent Access</button>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => setIsGranting(false)} className="flex-1 h-11 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">Cancel</button>
                            <button onClick={() => setIsGranting(false)} className="flex-1 h-11 bg-orange-500 text-white rounded-xl text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm">Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
