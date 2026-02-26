import React from 'react';
import {
    LayoutDashboard,
    Calendar,
    FileSpreadsheet,
    Pill,
    LineChart,
    LogOut,
    UserCircle,
    Stethoscope,
    FlaskConical,
    ShieldCheck,
    Bell,
    UploadCloud,
    User
} from 'lucide-react';
import logo from '../assets/logo.png';

const doctorMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'ehr', label: 'Health Records', icon: FileSpreadsheet },
    { id: 'insights', label: 'Clinical Insights', icon: LineChart },
    { id: 'profile', label: 'Profile', icon: UserCircle },
];

const labMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'upload', label: 'Result Upload', icon: UploadCloud },
    { id: 'ehr', label: 'Scans Archive', icon: FileSpreadsheet },
    { id: 'profile', label: 'Profile', icon: UserCircle },
];

const patientMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'history', label: 'Medical History', icon: FileSpreadsheet },
    { id: 'access', label: 'Access Control', icon: ShieldCheck },
    { id: 'family', label: 'Guardians', icon: User },
    { id: 'profile', label: 'Profile', icon: UserCircle },
];

export default function Sidebar({ userRole, activeTab, setActiveTab, onLogout }) {
    const menu = userRole === 'doctor' ? doctorMenu : userRole === 'lab' ? labMenu : patientMenu;

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 flex flex-col z-50 shadow-sm">
            {/* Logo */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                    <img src={logo} alt="MedVault" className="w-7 h-7 object-contain" />
                </div>
                <div>
                    <h2 className="font-bold text-slate-900 text-sm leading-tight">MedVault</h2>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-orange-500">{userRole} Portal</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {menu.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeTab === item.id
                                ? 'bg-orange-50 text-orange-600 border border-orange-100'
                                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                            }`}
                    >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Footer */}
            <div className="px-3 py-4 border-t border-slate-100 space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-colors">
                    <Bell className="w-4 h-4" /> Notifications
                </button>
                <button
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors"
                >
                    <LogOut className="w-4 h-4" /> Logout
                </button>
            </div>
        </aside>
    );
}
