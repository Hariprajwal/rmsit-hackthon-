import React from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children, userRole, activeTab, setActiveTab, onLogout }) {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex">
            <Sidebar
                userRole={userRole}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onLogout={onLogout}
            />
            <main className="flex-1 ml-64 p-8 min-h-screen">
                <div className="page-enter">
                    {children}
                </div>
            </main>
        </div>
    );
}
