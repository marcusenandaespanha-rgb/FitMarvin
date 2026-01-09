import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';

const DashboardScreen: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('Atleta');

    useEffect(() => {
        const storedName = localStorage.getItem('fitmarvin_user');
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    return (
        <div className="mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-8 relative shadow-2xl">
            {/* Top Navigation */}
            <TopNav active="home" />

            {/* Content padded from top to avoid overlap with nav */}
            <div className="pt-20">
                <header className="flex px-6 py-4 items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                        <p className="text-slate-500 dark:text-[#9db9a6] text-xs font-bold tracking-wide uppercase">Plan Generado por IA</p>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Hola, <span className="text-primary capitalize">{userName}</span></h1>
                    </div>
                    <div className="relative shrink-0 cursor-pointer" onClick={() => navigate('/settings')}>
                        <div className="h-10 w-10 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-white font-bold">
                            {userName.charAt(0).toUpperCase()}
                        </div>
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-primary border-2 border-background-dark"></div>
                    </div>
                </header>

                {/* KEY STATS ROW */}
                <section className="px-6 mb-4">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white dark:bg-surface-dark p-3 rounded-xl border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center text-center shadow-sm">
                            <span className="material-symbols-outlined text-primary text-xl mb-1">fitness_center</span>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">Volumen</span>
                            <span className="text-lg font-bold text-slate-900 dark:text-white">12.5T</span>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-3 rounded-xl border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center text-center shadow-sm">
                            <span className="material-symbols-outlined text-blue-400 text-xl mb-1">monitor_weight</span>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">Peso</span>
                            <span className="text-lg font-bold text-slate-900 dark:text-white">75.2<span className="text-xs font-normal">kg</span></span>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-3 rounded-xl border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center text-center shadow-sm">
                            <span className="material-symbols-outlined text-orange-400 text-xl mb-1">timer</span>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">Activo</span>
                            <span className="text-lg font-bold text-slate-900 dark:text-white">4.5<span className="text-xs font-normal">h</span></span>
                        </div>
                    </div>
                </section>

                {/* READINESS / PR CARD */}
                <section className="px-6 mb-4">
                    <div className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2e22] to-[#0a160e] p-5 shadow-lg border border-primary/20">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-white" style={{fontSize: '80px'}}>battery_charging_full</span>
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase border border-primary/20">Readiness: Alta</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">¿Listo para un PR?</h3>
                            <p className="text-sm text-slate-400 mb-4 w-3/4">Tu recuperación es óptima hoy. Es un buen día para intentar maximizar tu Sentadilla.</p>
                            <button onClick={() => navigate('/player')} className="bg-primary text-background-dark px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-green-400 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                                Iniciar Sesión PR
                            </button>
                        </div>
                    </div>
                </section>

                {/* LOAD PROGRESSION */}
                <section className="px-6 mb-4">
                    <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border border-slate-100 dark:border-white/5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">Progresión de Cargas</h3>
                            <span className="text-xs font-medium text-primary cursor-pointer">Ver detalle</span>
                        </div>
                        {/* Simple CSS Chart Simulation */}
                        <div className="h-32 flex items-end justify-between gap-2 px-1">
                            {[40, 55, 45, 65, 60, 80, 75, 95].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                                    <div className="w-full bg-primary/20 dark:bg-primary/10 rounded-t-sm relative group-hover:bg-primary/40 transition-colors" style={{height: `${h}%`}}>
                                        <div className="absolute top-0 w-full h-1 bg-primary rounded-t-sm"></div>
                                        {i === 7 && (
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-highlight text-white text-[10px] font-bold px-1.5 py-0.5 rounded opacity-100 shadow-md">
                                                +5%
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-[9px] text-slate-400 font-medium">S{i+1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONSISTENCY */}
                <section className="px-6 mb-8">
                    <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border border-slate-100 dark:border-white/5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">Constancia</h3>
                            <span className="text-xs text-slate-500">Últimos 30 días</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 justify-center">
                            {Array.from({length: 30}).map((_, i) => {
                                // Simulate random heatmap
                                const active = Math.random() > 0.3;
                                const opacity = active ? (Math.random() > 0.7 ? 'bg-primary' : 'bg-primary/50') : 'bg-slate-100 dark:bg-white/5';
                                return (
                                    <div key={i} className={`h-3 w-3 rounded-sm ${opacity}`} title={`Día ${i+1}`}></div>
                                );
                            })}
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                            <div className="h-3 w-3 rounded-sm bg-primary"></div>
                            <span>Entrenado</span>
                            <div className="h-3 w-3 rounded-sm bg-slate-100 dark:bg-white/5 ml-2"></div>
                            <span>Descanso</span>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="mt-auto py-8 text-center border-t border-slate-100 dark:border-white/5 mx-6">
                    <p className="text-[10px] text-slate-400 dark:text-slate-600 font-medium tracking-wide uppercase">
                        Creado por Marcus de Araujo en 2026
                    </p>
                    <p className="text-[9px] text-slate-300 dark:text-slate-700 mt-1">
                        v2.0.1 • FitMarvin AI
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default DashboardScreen;