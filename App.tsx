import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingScreen from './screens/OnboardingScreen';
import DashboardScreen from './screens/DashboardScreen';
import PlayerScreen from './screens/PlayerScreen';
import CommunityScreen from './screens/CommunityScreen';
import RoutinesScreen from './screens/RoutinesScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import CoachScreen from './screens/CoachScreen';

// Placeholder component for new routes
const PlaceholderScreen: React.FC<{title: string}> = ({title}) => (
    <div className="flex h-screen w-full items-center justify-center bg-background-light dark:bg-background-dark text-slate-900 dark:text-white flex-col gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-slate-500">Próximamente...</p>
        <a href="#/dashboard" className="text-primary hover:underline">Volver al Inicio</a>
    </div>
);

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<OnboardingScreen />} />
                <Route path="/dashboard" element={<DashboardScreen />} />
                <Route path="/player" element={<PlayerScreen />} />
                <Route path="/community" element={<CommunityScreen />} />
                <Route path="/routines" element={<RoutinesScreen />} />
                <Route path="/achievements" element={<AchievementsScreen />} />
                <Route path="/coach" element={<CoachScreen />} />
                <Route path="/settings" element={<PlaceholderScreen title="Configuraciones" />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </HashRouter>
    );
};

export default App;