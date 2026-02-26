import React, { useState } from 'react';
import { Search, Eye, Users, Calendar, AlertCircle, CheckCircle2, ChevronRight, TrendingUp, FileText, Activity } from 'lucide-react';

const initialPatients = [
    { id: '1', name: 'John Doe', risk: 'Low', lastVisit: '2024-02-15', status: 'Stable' },
    { id: '2', name: 'Jane Smith', risk: 'High', lastVisit: '2024-02-10', status: 'Critical' },
    { id: '3', name: 'Robert Brown', risk: 'Medium', lastVisit: '2024-02-18', status: 'Stable' },
    { id: '4', name: 'Alice Wilson', risk: 'Low', lastVisit: '2024-02-12', status: 'Recovering' },
];

const riskColor = { Low: 'text-emerald-600 bg-emerald-50', Medium: 'text-orange-600 bg-orange-50', High: 'text-red-600 bg-red-50' };
const statusColor = { Stable: 'text-emerald-600 bg-emerald-50', Critical: 'text-red-600 bg-red-50', Recovering: 'text-orange-600 bg-orange-50' };

export default function DoctorDashboard({ onViewPatient, setActiveTab }) {
    const [searchTerm, setSearchTerm] = useState('');
    const filtered = initialPatients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="space-y-8 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Doctor Portal</h1>
                    <p className="text-slate-500 text-sm mt-1">Manage your patient list and appointments.</p>
                </div>
                <button
                    onClick={() => setActiveTab('appointments')}
                    className="h-10 px-4 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-sm"
                >
                    <Calendar className="w-4 h-4" /> View Schedule
                </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Total Patients', value: '142', icon: Users, color: 'text-orange-500', bg: 'bg-orange-50' },
                    {
                        label: "Today's Appointments", value: '8', icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-50'
                    },
                    { label: 'Pending Reviews', value: '3', icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50' },
                    { label: 'Resolved Today', value: '5', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
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

            {/* Patient List */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">Patient List</h2>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            placeholder="Search patients..."
                            className="w-full pl-9 pr-4 h-9 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-400 transition-colors"
                        />
                    </div>
                </div>

                <div className="divide-y divide-slate-100">
                    {filtered.map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 font-bold text-sm flex items-center justify-center">
                                    {patient.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">{patient.name}</p>
                                    <p className="text-xs text-slate-400">Last visit: {patient.lastVisit}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${riskColor[patient.risk]}`}>{patient.risk} Risk</span>
                                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColor[patient.status]}`}>{patient.status}</span>
                                <button
                                    onClick={() => onViewPatient(patient)}
                                    className="flex items-center gap-1 text-orange-500 hover:text-orange-700 text-xs font-semibold transition-colors"
                                >
                                    <Eye className="w-3.5 h-3.5" /> View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
