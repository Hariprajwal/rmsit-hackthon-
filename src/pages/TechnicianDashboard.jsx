import React from 'react';
import { FlaskConical, Upload, Clock, CheckCircle2, AlertTriangle, ChevronRight, Database } from 'lucide-react';

const queue = [
    { id: 'MV-982', type: 'Contrast MRI', priority: 'Emergency', time: '12m ago' },
    { id: 'MV-104', type: 'Blood Panel', priority: 'Routine', time: '45m ago' },
    { id: 'MV-331', type: 'Neural Scan', priority: 'Emergency', time: '1h ago' },
    { id: 'MV-210', type: 'Lipid Profile', priority: 'Routine', time: '2h ago' },
];

export default function TechnicianDashboard({ onBeginUpload }) {
    return (
        <div className="space-y-8 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Operations Center</h1>
                    <p className="text-slate-500 text-sm mt-1">Diagnostic processing queue — Lab sync active.</p>
                </div>
                <button
                    onClick={onBeginUpload}
                    className="h-10 px-4 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-sm"
                >
                    <Upload className="w-4 h-4" /> Upload Result
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Active Queue', value: '4', icon: FlaskConical, color: 'text-orange-500', bg: 'bg-orange-50' },
                    { label: 'Processed Today', value: '17', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                    { label: 'Pending Upload', value: '2', icon: Upload, color: 'text-blue-500', bg: 'bg-blue-50' },
                    { label: 'Vault Storage', value: '62%', icon: Database, color: 'text-slate-500', bg: 'bg-slate-100' },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
                        <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
                            <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Queue Table */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">Live Queue</h2>
                    <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold border border-orange-100">4 Active</span>
                </div>

                <div className="divide-y divide-slate-100">
                    {queue.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 font-bold text-xs flex items-center justify-center">
                                    {item.id.replace('MV-', '')}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">{item.type}</p>
                                    <p className="text-xs text-slate-400">ID: {item.id}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${item.priority === 'Emergency' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                                    {item.priority}
                                </span>
                                <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" />{item.time}</span>
                                <button
                                    onClick={onBeginUpload}
                                    className="text-orange-500 hover:text-orange-700 text-xs font-semibold flex items-center gap-1 transition-colors"
                                >
                                    Process <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
