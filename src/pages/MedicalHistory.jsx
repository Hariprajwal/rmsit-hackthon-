import React, { useState } from 'react';
import { Search, FileText, Calendar, ChevronRight, Filter } from 'lucide-react';

const records = [
    { id: '1', date: '2024-02-15', type: 'Cardiology', doctor: 'Dr. Sarah Smith', summary: 'Annual heart checkup — ECG normal, BP 120/80.', status: 'Completed' },
    { id: '2', date: '2024-01-28', type: 'General', doctor: 'Dr. Robert Brown', summary: 'Flu symptoms — prescribed antibiotics for 5 days.', status: 'Completed' },
    { id: '3', date: '2023-12-10', type: 'Radiology', doctor: 'Lab: MRI-Alpha', summary: 'Brain MRI — no abnormalities detected.', status: 'Archived' },
    { id: '4', date: '2023-11-05', type: 'Blood Test', doctor: 'Lab: Blood Panel', summary: 'CBC normal. Vitamin D slightly low — supplement recommended.', status: 'Completed' },
];

export default function MedicalHistory() {
    const [search, setSearch] = useState('');

    const filtered = records.filter(r =>
        r.type.toLowerCase().includes(search.toLowerCase()) ||
        r.summary.toLowerCase().includes(search.toLowerCase()) ||
        r.doctor.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Medical History</h1>
                    <p className="text-slate-500 text-sm mt-1">Your encrypted clinical interaction log.</p>
                </div>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search by type, doctor, or summary..."
                    className="w-full pl-9 pr-4 h-10 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                />
            </div>

            {/* Records */}
            <div className="space-y-3">
                {filtered.map((rec) => (
                    <div key={rec.id} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-orange-200 transition-colors">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <FileText className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-slate-900 text-sm">{rec.type}</span>
                                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-medium">{rec.status}</span>
                                    </div>
                                    <p className="text-xs text-orange-500 font-medium mb-2">{rec.doctor}</p>
                                    <p className="text-sm text-slate-600">{rec.summary}</p>
                                </div>
                            </div>
                            <div className="text-xs text-slate-400 flex items-center gap-1 flex-shrink-0">
                                <Calendar className="w-3 h-3" />
                                {rec.date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
