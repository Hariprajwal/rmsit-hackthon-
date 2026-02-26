import React, { useState } from 'react';
import { User, Lock, Mail, ChevronRight, Stethoscope, FlaskConical, ShieldCheck, Heart } from 'lucide-react';
import logo from '../assets/logo.png';

const roles = [
    { id: 'patient', name: 'Patient', icon: User },
    { id: 'doctor', name: 'Doctor', icon: Stethoscope },
    { id: 'lab', name: 'Lab Tech', icon: FlaskConical },
];

export default function Auth({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const [selectedRole, setSelectedRole] = useState('patient');

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">

                {/* Left Panel: Branding */}
                <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-b from-orange-500 to-orange-600 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <img src={logo} alt="MedVault" className="w-7 h-7 object-contain" />
                        </div>
                        <h2 className="font-bold text-lg">MedVault</h2>
                    </div>

                    <div className="space-y-6">
                        <Heart className="w-12 h-12 text-white/60" />
                        <h1 className="text-4xl font-black leading-tight">Your Health.<br />Your Data.<br />Your Control.</h1>
                        <p className="text-white/70 text-sm leading-relaxed">A secure, AI-powered medical vault that puts patient autonomy first — with encrypted records and instant sharing.</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs font-semibold">🔒 End-to-End Encrypted</span>
                        <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs font-semibold">🤖 AI Insights</span>
                        <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs font-semibold">📋 ISO 27001</span>
                    </div>
                </div>

                {/* Right Panel: Form */}
                <div className="p-10 flex flex-col justify-center space-y-8">
                    <div>
                        <h2 className="text-2xl font-black text-slate-900">{isLogin ? 'Welcome back' : 'Create account'}</h2>
                        <p className="text-slate-500 text-sm mt-1">{isLogin ? 'Sign in to your secure vault' : 'Register your medical vault'}</p>
                    </div>

                    {/* Tab toggle */}
                    <div className="flex gap-1 bg-slate-100 rounded-xl p-1">
                        {['Login', 'Signup'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setIsLogin(tab === 'Login')}
                                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${(isLogin && tab === 'Login') || (!isLogin && tab === 'Signup')
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {tab === 'Login' ? 'Sign In' : 'Sign Up'}
                            </button>
                        ))}
                    </div>

                    {/* Role selector */}
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">I am a...</p>
                        <div className="grid grid-cols-3 gap-3">
                            {roles.map((role) => (
                                <button
                                    key={role.id}
                                    type="button"
                                    onClick={() => setSelectedRole(role.id)}
                                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-xs font-semibold transition-all ${selectedRole === role.id
                                            ? 'border-orange-500 bg-orange-50 text-orange-600'
                                            : 'border-slate-200 text-slate-500 hover:border-slate-300'
                                        }`}
                                >
                                    <role.icon className="w-5 h-5" />
                                    {role.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Form fields */}
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(selectedRole); }}>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full pl-10 pr-4 h-12 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-orange-400 focus:bg-white transition-colors"
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 h-12 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-orange-400 focus:bg-white transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </form>

                    <p className="text-center text-xs text-slate-400">
                        {isLogin ? 'Forgot password? ' : 'Already have an account? '}
                        <button onClick={() => setIsLogin(!isLogin)} className="text-orange-500 font-semibold hover:underline">
                            {isLogin ? 'Reset it' : 'Sign in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
