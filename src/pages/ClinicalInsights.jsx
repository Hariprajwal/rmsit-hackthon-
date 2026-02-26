import React from 'react';
import { TrendingUp, Heart, Activity, Brain, AlertTriangle, CheckCircle2 } from 'lucide-react';

const insights = [
    { category: 'Cardiac Risk', score: 72, level: 'Moderate', color: 'text-orange-600', bg: 'bg-orange-50', bar: 'bg-orange-400', icon: Heart },
    { category: 'Neural Health', score: 88, level: 'Good', color: 'text-emerald-600', bg: 'bg-emerald-50', bar: 'bg-emerald-400', icon: Brain },
    { category: 'Metabolic Index', score: 64, level: 'Watch', color: 'text-amber-600', bg: 'bg-amber-50', bar: 'bg-amber-400', icon: Activity },
];

const alerts = [
    { type: 'warning', msg: 'Patient MV-0082: HDL cholesterol below optimal range — recommend dietary review.' },
    { type: 'info', msg: 'Patient MV-0043: Post-surgery recovery trending positively. Re-evaluation in 14 days.' },
    { type: 'critical', msg: 'Patient MV-0119: Elevated troponin markers — escalate to cardiologist immediately.' },
];

const alertStyle = {
    critical: 'bg-red-50 border-red-200 text-red-700',
    warning: 'bg-orange-50 border-orange-200 text-orange-700',
    info: 'bg-blue-50 border-blue-200 text-blue-700',
};

const alertIcon = {
    critical: <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />,
    info: <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />,
};

export default function ClinicalInsights() {
    return (
        <div className="space-y-6 pb-10">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Clinical Insights</h1>
                <p className="text-slate-500 text-sm mt-1">AI-powered analysis from your patient cohort data.</p>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {insights.map((ins) => (
                    <div key={ins.category} className="bg-white border border-slate-200 rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 ${ins.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <ins.icon className={`w-5 h-5 ${ins.color}`} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-800">{ins.category}</p>
                                <p className={`text-xs font-medium ${ins.color}`}>{ins.level}</p>
                            </div>
                        </div>
                        <div className="flex items-end justify-between mb-2">
                            <span className="text-3xl font-black text-slate-900">{ins.score}</span>
                            <span className="text-xs text-slate-400">/100</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${ins.bar} rounded-full`} style={{ width: `${ins.score}%` }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Alerts */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                    <h2 className="font-semibold text-slate-800">AI Clinical Alerts</h2>
                </div>
                <div className="p-4 space-y-3">
                    {alerts.map((alert, i) => (
                        <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${alertStyle[alert.type]}`}>
                            {alertIcon[alert.type]}
                            <p>{alert.msg}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
