import React, { useState } from 'react';
import { Calendar, Clock, User, Plus, ChevronRight, CheckCircle2, AlertCircle, X } from 'lucide-react';

const days = ['Mon 19', 'Tue 20', 'Wed 21', 'Thu 22', 'Fri 23', 'Sat 24', 'Sun 25'];

const initialAppts = [
    { id: '1', patient: 'John Doe', time: '09:00 AM', type: 'Cardiology Consult', status: 'Confirmed', day: 'Mon 19' },
    { id: '2', patient: 'Jane Smith', time: '11:30 AM', type: 'Follow-up Review', status: 'Pending', day: 'Mon 19' },
    { id: '3', patient: 'Robert Brown', time: '02:00 PM', type: 'Pre-surgery Evaluation', status: 'Confirmed', day: 'Wed 21' },
];

export default function Appointments() {
    const [selectedDay, setSelectedDay] = useState('Mon 19');
    const [isBooking, setIsBooking] = useState(false);
    const [appointments, setAppointments] = useState(initialAppts);

    const todayAppts = appointments.filter(a => a.day === selectedDay);

    return (
        <div className="space-y-6 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Appointments</h1>
                    <p className="text-slate-500 text-sm mt-1">Manage your patient schedule.</p>
                </div>
                <button
                    onClick={() => setIsBooking(true)}
                    className="h-10 px-4 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-sm"
                >
                    <Plus className="w-4 h-4" /> New Appointment
                </button>
            </div>

            {/* Day selector */}
            <div className="flex gap-2 overflow-x-auto pb-1">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${selectedDay === day
                                ? 'bg-orange-500 text-white shadow-sm'
                                : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-200'
                            }`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Appointments for selected day */}
            <div className="space-y-3">
                {todayAppts.length === 0 ? (
                    <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
                        <Calendar className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                        <p className="text-slate-400 text-sm">No appointments for {selectedDay}</p>
                    </div>
                ) : (
                    todayAppts.map((appt) => (
                        <div key={appt.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 hover:border-orange-200 transition-colors">
                            <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <User className="w-5 h-5 text-orange-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-slate-900 text-sm">{appt.patient}</p>
                                <div className="flex items-center gap-3 mt-1">
                                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" />{appt.time}</span>
                                    <span className="text-xs text-slate-400">{appt.type}</span>
                                </div>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${appt.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                                {appt.status === 'Confirmed' ? <CheckCircle2 className="w-3 h-3 inline mr-1" /> : <AlertCircle className="w-3 h-3 inline mr-1" />}
                                {appt.status}
                            </span>
                        </div>
                    ))
                )}
            </div>

            {/* Booking Modal */}
            {isBooking && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-6" onClick={() => setIsBooking(false)}>
                    <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-slate-900">New Appointment</h2>
                            <button onClick={() => setIsBooking(false)} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="space-y-4">
                            <input placeholder="Patient name" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                            <input type="time" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                            <input placeholder="Appointment type" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setIsBooking(false)} className="flex-1 h-11 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">Cancel</button>
                            <button
                                onClick={() => {
                                    setAppointments(prev => [...prev, { id: Date.now().toString(), patient: 'New Patient', time: '10:00 AM', type: 'General Consult', status: 'Pending', day: selectedDay }]);
                                    setIsBooking(false);
                                }}
                                className="flex-1 h-11 bg-orange-500 text-white rounded-xl text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
