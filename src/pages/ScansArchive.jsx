import React, { useState } from 'react';
import { Search, Lock, Eye, Calendar, X, Image, Download, Shield, Activity, FlaskConical, Cpu } from 'lucide-react';

const scans = [
    {
        id: '1', type: 'Brain MRI', date: '2024-02-14', doctor: 'Dr. Neural — Neurology',
        status: 'Reviewed', size: '218 MB', modality: 'MRI 3T', slices: 128,
        findings: 'No acute intracranial abnormality. Ventricles and sulci are age-appropriate. No midline shift or mass effect.',
        technician: 'Jordan Lee', duration: '42 min', contrast: 'No', facility: 'MRI-Alpha Unit'
    },
    {
        id: '2', type: 'Chest X-Ray', date: '2024-01-28', doctor: 'Lab: Radiology Alpha',
        status: 'Pending', size: '4.2 MB', modality: 'X-Ray CR', slices: 1,
        findings: 'Pending radiologist review. Preliminary: Lungs clear bilaterally. No cardiomegaly.',
        technician: 'Sam Rivera', duration: '8 min', contrast: 'No', facility: 'X-Ray-01 Unit'
    },
    {
        id: '3', type: 'Abdominal CT', date: '2023-12-09', doctor: 'Dr. Carter — Gastro',
        status: 'Reviewed', size: '512 MB', modality: 'CT 64-slice', slices: 256,
        findings: 'Liver, spleen, pancreas, and adrenal glands appear normal. No free fluid or lymphadenopathy.',
        technician: 'Jordan Lee', duration: '18 min', contrast: 'IV', facility: 'CT-Beta Unit'
    },
    {
        id: '4', type: 'Spinal MRI', date: '2023-11-22', doctor: 'Dr. Singh — Ortho',
        status: 'Archived', size: '340 MB', modality: 'MRI 1.5T', slices: 96,
        findings: 'Mild disc desiccation at L4-L5. No significant central canal stenosis. Conus terminates at T12-L1.',
        technician: 'Alex May', duration: '35 min', contrast: 'GAD', facility: 'MRI-Alpha Unit'
    },
];

const equipment = [
    { name: 'MRI-Alpha', status: 'Online', load: 78, scans: 14 },
    { name: 'CT-Beta', status: 'Online', load: 42, scans: 8 },
    { name: 'X-Ray-01', status: 'Offline', load: 0, scans: 0 },
];

const monthlyData = [
    { month: 'Sep', count: 8 },
    { month: 'Oct', count: 14 },
    { month: 'Nov', count: 11 },
    { month: 'Dec', count: 9 },
    { month: 'Jan', count: 16 },
    { month: 'Feb', count: 12 },
];
const maxCount = Math.max(...monthlyData.map(d => d.count));

const typeBreakdown = [
    { label: 'MRI', count: 22, color: 'bg-orange-400' },
    { label: 'CT', count: 14, color: 'bg-blue-400' },
    { label: 'X-Ray', count: 18, color: 'bg-emerald-400' },
    { label: 'Blood', count: 10, color: 'bg-amber-400' },
];
const totalScans = typeBreakdown.reduce((a, b) => a + b.count, 0);

const statusColor = {
    Reviewed: 'bg-emerald-50 text-emerald-600',
    Pending: 'bg-orange-50 text-orange-600',
    Archived: 'bg-slate-100 text-slate-500',
};

export default function ScansArchive() {
    const [search, setSearch] = useState('');
    const [selectedScan, setSelectedScan] = useState(null);
    const filtered = scans.filter(s => s.type.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-6 pb-10">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Scans Archive</h1>
                <p className="text-slate-500 text-sm mt-1">Your encrypted diagnostic imaging vault — {scans.length} total scans.</p>
            </div>

            {/* ── Analytics Row ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Monthly Volume Chart */}
                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4">6-Month Scan Volume</h3>
                    <div className="flex items-end gap-2 h-24">
                        {monthlyData.map((d) => (
                            <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                                <span className="text-[10px] text-slate-400 font-medium">{d.count}</span>
                                <div className="w-full rounded-t-lg bg-orange-100 relative overflow-hidden" style={{ height: `${(d.count / maxCount) * 72}px` }}>
                                    <div className="absolute inset-0 bg-orange-400 opacity-80" />
                                </div>
                                <span className="text-[10px] text-slate-400">{d.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Type Breakdown */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4">Scan Type Breakdown</h3>
                    <div className="space-y-3">
                        {typeBreakdown.map((item) => (
                            <div key={item.label} className="space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-xs font-medium text-slate-600">{item.label}</span>
                                    <span className="text-xs text-slate-400">{item.count} ({Math.round(item.count / totalScans * 100)}%)</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${item.color} rounded-full`}
                                        style={{ width: `${(item.count / totalScans) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6">
                {/* Scan List */}
                <div className="space-y-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search scans..."
                            className="w-full pl-9 pr-4 h-10 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                        />
                    </div>

                    {filtered.map((scan) => (
                        <div key={scan.id} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-orange-200 transition-colors flex items-center gap-4">
                            {/* Thumbnail placeholder */}
                            <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-900" />
                                <Image className="w-5 h-5 text-slate-500 relative z-10" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="font-semibold text-slate-900 text-sm">{scan.type}</p>
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[scan.status]}`}>
                                        {scan.status}
                                    </span>
                                </div>
                                <p className="text-xs text-orange-500 font-medium mb-1">{scan.doctor}</p>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{scan.date}</span>
                                    <span className="text-xs text-slate-400">{scan.modality}</span>
                                    <span className="text-xs text-slate-400">{scan.size}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                    onClick={() => setSelectedScan(scan)}
                                    className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-orange-50 text-orange-600 border border-orange-200 text-xs font-semibold hover:bg-orange-100 transition-colors"
                                >
                                    <Eye className="w-3.5 h-3.5" /> View
                                </button>
                                <button className="h-8 w-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
                                    <Download className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Equipment sidebar */}
                <div className="space-y-4">
                    {/* Quick Stats */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                        <h3 className="font-semibold text-slate-800 text-sm">Vault Quick Stats</h3>
                        {[
                            { label: 'Total Scans', value: totalScans, icon: Image, color: 'text-orange-500', bg: 'bg-orange-50' },
                            { label: 'Reviewed', value: scans.filter(s => s.status === 'Reviewed').length, icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                            { label: 'Pending', value: scans.filter(s => s.status === 'Pending').length, icon: FlaskConical, color: 'text-amber-500', bg: 'bg-amber-50' },
                        ].map(stat => (
                            <div key={stat.label} className="flex items-center gap-3">
                                <div className={`w-8 h-8 ${stat.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-400">{stat.label}</p>
                                </div>
                                <span className="text-sm font-bold text-slate-800">{stat.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Equipment Status */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5">
                        <h3 className="font-semibold text-slate-800 text-sm mb-3">Lab Equipment</h3>
                        <div className="space-y-3">
                            {equipment.map((eq) => (
                                <div key={eq.name} className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Cpu className="w-3.5 h-3.5 text-slate-400" />
                                            <span className="text-xs font-medium text-slate-700">{eq.name}</span>
                                            <span className={`w-1.5 h-1.5 rounded-full ${eq.status === 'Online' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                                        </div>
                                        <span className="text-xs text-slate-400">{eq.load}%</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${eq.load > 70 ? 'bg-orange-400' : 'bg-emerald-400'}`}
                                            style={{ width: `${eq.load}%` }}
                                        />
                                    </div>
                                    <p className="text-[10px] text-slate-400">{eq.scans} scans today</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── View Modal ── */}
            {selectedScan && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6"
                    onClick={() => setSelectedScan(null)}
                >
                    <div
                        className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
                            <div>
                                <h2 className="font-bold text-slate-900 text-lg">{selectedScan.type}</h2>
                                <p className="text-xs text-orange-500 font-medium mt-0.5">{selectedScan.doctor}</p>
                            </div>
                            <button
                                onClick={() => setSelectedScan(null)}
                                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Scan Viewer Placeholder */}
                        <div className="mx-8 mt-6 h-48 bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
                            {/* Simulated scan grid lines */}
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 20px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 20px)'
                            }} />
                            <div className="relative z-10 text-center space-y-2">
                                <Image className="w-10 h-10 text-slate-500 mx-auto" />
                                <p className="text-slate-400 text-sm font-medium">{selectedScan.modality} • {selectedScan.slices} slices</p>
                                <p className="text-slate-500 text-xs">Encrypted DICOM viewer — {selectedScan.size}</p>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="px-8 py-5 grid grid-cols-2 gap-3">
                            {[
                                { label: 'Date', value: selectedScan.date },
                                { label: 'Facility', value: selectedScan.facility },
                                { label: 'Technician', value: selectedScan.technician },
                                { label: 'Duration', value: selectedScan.duration },
                                { label: 'Modality', value: selectedScan.modality },
                                { label: 'Contrast', value: selectedScan.contrast },
                            ].map(detail => (
                                <div key={detail.label} className="bg-slate-50 rounded-xl p-3">
                                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-1">{detail.label}</p>
                                    <p className="text-sm font-semibold text-slate-800">{detail.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Findings */}
                        <div className="px-8 pb-5">
                            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                                <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1.5">Radiologist Findings</p>
                                <p className="text-sm text-slate-700 leading-relaxed">{selectedScan.findings}</p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-8 py-4 border-t border-slate-100 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                                End-to-end encrypted
                            </div>
                            <div className="flex gap-3">
                                <button className="h-9 px-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
                                    <Download className="w-4 h-4" /> Download
                                </button>
                                <button
                                    onClick={() => setSelectedScan(null)}
                                    className="h-9 px-4 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
