import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function AnalyticsCard({ title, value, icon, trend, color, subtitle, showSparkline, onClick }) {
    const Icon = icon;
    const colorClass = color === 'orange' ? 'text-orange-600 bg-orange-50 border border-orange-100' :
        color === 'emerald' ? 'text-emerald-600 bg-emerald-50 border border-emerald-100' :
            color === 'green' ? 'text-emerald-600 bg-emerald-50 border border-emerald-100' :
                color === 'red' ? 'text-orange-600 bg-orange-50 border border-orange-100 shadow-[0_0_15px_rgba(249,115,22,0.1)]' :
                    'text-slate-500 bg-slate-50';

    return (
        <Motion.div
            whileHover={{ scale: 1.02, translateY: -5 }}
            onClick={onClick}
            className={`p-6 glass bg-white/5 rounded-[32px] flex flex-col justify-between relative overflow-hidden transition-all duration-300 border-white/10 ${color === 'red' ? 'ring-1 ring-alert/20' : ''} ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''}`}
        >
            <div className="flex items-center justify-between mb-4 relative z-10">
                <div className={`p-3 rounded-[20px] ${colorClass}`}>
                    <Icon className="w-6 h-6" />
                </div>
                {trend && (
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${trend > 0 ? 'bg-success/10 text-success' : 'bg-alert/10 text-alert'}`}>
                        {trend > 0 ? '+' : ''}{trend}%
                    </span>
                )}
            </div>

            <div className="relative z-10">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
                    {subtitle && <span className="text-[10px] font-bold text-slate-400 uppercase">{subtitle}</span>}
                </div>
            </div>

            {showSparkline && (
                <div className="absolute bottom-0 left-0 right-0 h-12 opacity-20 flex items-end px-4 gap-1">
                    {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                        <Motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex-1 rounded-t-sm ${color === 'orange' ? 'bg-primary' : 'bg-emerald-400'}`}
                        />
                    ))}
                </div>
            )}
        </Motion.div>
    );
}
