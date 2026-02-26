import React, { useState } from 'react';
import { Upload, ShieldAlert, FileText, CheckCircle2, X } from 'lucide-react';

export default function ResultUpload() {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [patientId, setPatientId] = useState('');
    const [testType, setTestType] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    const handleUpload = () => {
        setUploadProgress(0);
        const t = setInterval(() => {
            setUploadProgress(p => {
                if (p >= 100) { clearInterval(t); setUploaded(true); return 100; }
                return p + 10;
            });
        }, 150);
    };

    return (
        <div className="space-y-6 pb-10">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Result Upload</h1>
                <p className="text-slate-500 text-sm mt-1">Upload diagnostic results securely to the patient's vault.</p>
            </div>

            {/* Privacy banner */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-orange-700">Write-only mode — you cannot view existing patient records. Results are encrypted immediately on upload.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Form */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                    <h2 className="font-semibold text-slate-800 mb-2">Result Details</h2>
                    <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1.5">Patient ID</label>
                        <input
                            value={patientId}
                            onChange={e => setPatientId(e.target.value)}
                            placeholder="e.g. MV-0082"
                            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1.5">Test Type</label>
                        <select
                            value={testType}
                            onChange={e => setTestType(e.target.value)}
                            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                        >
                            <option value="">Select test type...</option>
                            <option>MRI Scan</option>
                            <option>Blood Panel</option>
                            <option>X-Ray</option>
                            <option>Urine Test</option>
                            <option>ECG</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1.5">Notes</label>
                        <textarea
                            placeholder="Add any relevant clinical notes..."
                            rows={3}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
                        />
                    </div>
                </div>

                {/* File drop zone */}
                <div className="space-y-4">
                    <div
                        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={() => setIsDragging(false)}
                        className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 cursor-pointer transition-colors ${isDragging ? 'border-orange-400 bg-orange-50' : 'border-slate-200 hover:border-orange-300 hover:bg-orange-50/30'}`}
                    >
                        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center">
                            <Upload className="w-7 h-7 text-orange-500" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-700">Drop files here</p>
                            <p className="text-sm text-slate-400 mt-1">PDF, DICOM, PNG, JPG up to 50MB</p>
                        </div>
                        <button className="px-4 h-9 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors">Browse Files</button>
                    </div>

                    {uploadProgress > 0 && (
                        <div className="bg-white border border-slate-200 rounded-2xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-slate-400" />
                                    <span className="text-sm font-medium text-slate-700">result_scan.pdf</span>
                                </div>
                                {uploaded
                                    ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    : <span className="text-xs text-slate-400">{uploadProgress}%</span>
                                }
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 rounded-full transition-all duration-150" style={{ width: `${uploadProgress}%` }} />
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handleUpload}
                        className="w-full h-12 bg-orange-500 text-white rounded-2xl font-semibold text-sm hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                        <Upload className="w-4 h-4" /> Encrypt & Upload
                    </button>
                </div>
            </div>
        </div>
    );
}
