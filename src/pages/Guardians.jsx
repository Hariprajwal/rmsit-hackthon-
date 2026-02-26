import React, { useState } from 'react';
import { User, UserPlus, ShieldAlert, Bell, Phone, Mail, ShieldCheck } from 'lucide-react';

const initialGuardians = [
    { id: '1', name: 'Emily Johnson', relation: 'Spouse', phone: '+1 (555) 012-3456', email: 'emily.j@email.com', access: 'All Records', emergency: true },
    { id: '2', name: 'Mark Johnson', relation: 'Father', phone: '+1 (555) 987-6543', email: 'mark.j88@email.com', access: 'Vitals Only', emergency: false },
];

export default function Guardians() {
    const [guardians] = useState(initialGuardians);

    return (
        <div className="space-y-6 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Guardians & Family</h1>
                    <p className="text-slate-500 text-sm mt-1">Emergency delegates and shared access control.</p>
                </div>
                <button className="h-10 px-4 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-sm">
                    <UserPlus className="w-4 h-4" /> Add Member
                </button>
            </div>

            {/* Toggle cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { label: 'Emergency Override', sub: 'Auto-share records in critical events', icon: ShieldAlert, on: true },
                    { label: 'Family Alerts', sub: 'Notify family of new lab results', icon: Bell, on: true },
                ].map((toggle) => (
                    <div key={toggle.label} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <toggle.icon className="w-5 h-5 text-orange-500" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-800">{toggle.label}</p>
                                <p className="text-xs text-slate-400 mt-0.5">{toggle.sub}</p>
                            </div>
                        </div>
                        <div className={`w-12 h-6 rounded-full p-1 flex ${toggle.on ? 'justify-end bg-orange-500' : 'justify-start bg-slate-200'} cursor-pointer transition-colors`}>
                            <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Guardian Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {guardians.map((g) => (
                    <div key={g.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-200 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${g.name}`}
                                    alt={g.name}
                                    className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100"
                                />
                                <div>
                                    <h3 className="font-semibold text-slate-900">{g.name}</h3>
                                    <p className="text-xs text-orange-500 font-medium">{g.relation}</p>
                                </div>
                            </div>
                            {g.emergency && (
                                <span className="px-2.5 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold border border-red-100">Emergency</span>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-slate-50 rounded-xl p-3">
                                <p className="text-xs text-slate-400 mb-1">Phone</p>
                                <p className="text-xs font-medium text-slate-700">{g.phone}</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-3">
                                <p className="text-xs text-slate-400 mb-1">Email</p>
                                <p className="text-xs font-medium text-slate-700 truncate">{g.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                <span className="text-xs text-slate-500">Access: <span className="font-medium text-slate-700">{g.access}</span></span>
                            </div>
                            <button className="text-xs text-red-400 hover:text-red-600 font-medium transition-colors">Revoke</button>
                        </div>
                    </div>
                ))}

                {/* Ghost card */}
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-orange-300 cursor-pointer transition-colors">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                        <UserPlus className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-400">Add Family Member</p>
                        <p className="text-xs text-slate-300">Connect a guardian to your vault</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
