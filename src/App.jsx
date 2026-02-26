import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Auth from './pages/Auth';
import Layout from './components/Layout';
import DoctorDashboard from './pages/DoctorDashboard';
import LabTechDashboard from './pages/LabTechDashboard';
import PatientDetail from './pages/PatientDetail';
import Appointments from './pages/Appointments';
import HealthRecords from './pages/HealthRecords';
import ClinicalInsights from './pages/ClinicalInsights';
import DoctorProfile from './pages/DoctorProfile';
import TechnicianDashboard from './pages/TechnicianDashboard';
import ResultUpload from './pages/ResultUpload';
import ScansArchive from './pages/ScansArchive';
import TechnicianProfile from './pages/TechnicianProfile';
import PatientDashboard from './pages/PatientDashboard';
import AccessControl from './pages/AccessControl';
import MedicalHistory from './pages/MedicalHistory';
import Guardians from './pages/Guardians';

function App() {
  const [user, setUser] = useState(null); // { role: 'doctor' | 'lab' | 'admin' }
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleLogin = (role) => {
    setUser({ role });
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedPatient(null);
    setActiveTab('dashboard');
  };

  const navigateToPatient = (patient) => {
    setSelectedPatient(patient);
    setActiveTab('patients');
  };

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  const renderContent = () => {
    if (selectedPatient && activeTab === 'patients') {
      return (
        <PatientDetail
          patient={selectedPatient}
          onBack={() => setSelectedPatient(null)}
        />
      );
    }
    switch (activeTab) {
      case 'dashboard':
        return user.role === 'doctor' ? (
          <DoctorDashboard onViewPatient={navigateToPatient} setActiveTab={setActiveTab} />
        ) : user.role === 'lab' ? (
          <TechnicianDashboard onBeginUpload={() => setActiveTab('upload')} />
        ) : (
          <PatientDashboard setActiveTab={setActiveTab} />
        );
      case 'appointments':
        return <Appointments />;
      case 'ehr':
        return user.role === 'doctor' ? <HealthRecords /> : <ScansArchive />;
      case 'insights':
        return user.role === 'doctor' ? <ClinicalInsights /> : <ResultUpload />;
      case 'upload':
        return <ResultUpload />;
      case 'archive':
        return <ScansArchive />;
      case 'history':
        return <MedicalHistory />;
      case 'access':
        return <AccessControl />;
      case 'family':
        return <Guardians />;
      case 'profile':
        if (user.role === 'doctor') return <DoctorProfile />;
        if (user.role === 'lab') return <TechnicianProfile />;
        return <DoctorProfile />; // Fallback for patient placeholder
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <Layout
      userRole={user.role}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onLogout={handleLogout}
    >
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </Layout>
  );
}

export default App;