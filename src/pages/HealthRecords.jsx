import React, { useState } from 'react';
import { Search, Eye, Lock, ChevronRight, FileText, ShieldCheck, Calendar } from 'lucide-react';

const allRecords = [
    { id: 'MV-0082', name: 'Alex Johnson', type: 'Cardiology', date: '2024-02-15', status: 'Authorized' },
    { id: 'MV-0043', name: 'Sarah Chen', type: 'Neurology', date: '2024-02-10', status: 'Restricted' },
    { id: 'MV-0119', name: 'David Kim', type: 'Orthopedics', date: '2024-02-08', status: 'Authorized' },
    { id: 'MV-0055', name: 'Emma Davis', type: 'Oncology', date: '2024-01-30', status: 'Emergency' },
];

export default function HealthRecords() {
    const [search, setSearch] = useState('');
    const filtered = allRecords.filter(r =>
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.name.toLowerCase().includes(search.toLowerCase())
    );

    const statusColor = {
        Authorized: 'bg-emerald-50 text-emerald-600',
        Restricted: 'bg-slate-100 text-slate-500',
        Emergency: 'bg-red-50 text-red-600',
    };

    return (
        <div className="space-y-6 pb-10">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Health Records</h1>
                <p className="text-slate-500 text-sm mt-1">Patient clinical records — access controlled per session.</p>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search by Patient ID or name..."
                    className="w-full pl-9 pr-4 h-10 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                />
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800 text-sm">Patient Records</h2>
                </div>
                <div className="divide-y divide-slate-100">
                    {filtered.map((rec) => (
                        <div key={rec.id} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center">
                                    {rec.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">{rec.name}</p>
                                    <p className="text-xs text-slate-400">{rec.id} — {rec.type}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{rec.date}</span>
                                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColor[rec.status]}`}>{rec.status}</span>
                                {rec.status === 'Authorized' ? (
                                    <button className="text-orange-500 hover:text-orange-700 text-xs font-medium flex items-center gap-1 transition-colors">
                                        <Eye className="w-3.5 h-3.5" /> View
                                    </button>
                                ) : (
                                    <Lock className="w-4 h-4 text-slate-300" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
