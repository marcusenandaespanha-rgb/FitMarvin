import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlayerScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
            <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-black/5 dark:border-white/5 pt-safe-top">
                <div className="flex items-center p-4 pb-2 justify-between">
                    <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-slate-800 dark:text-white" style={{fontSize: '24px'}}>arrow_back</span>
                    </button>
                    <div className="flex flex-col items-center">
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Día de Pierna</h2>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">00:14:30</span>
                    </div>
                    <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-slate-800 dark:text-white" style={{fontSize: '24px'}}>more_vert</span>
                    </button>
                </div>
                <div className="px-4 pb-3">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">Progreso</span>
                        <span className="text-xs font-bold text-primary">35%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-surface-dark overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '35%'}}></div>
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
                <div className="p-4 pb-2">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-900 group" style={{backgroundImage: 'url("https://picsum.photos/seed/video1/400/225")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        <button className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-primary/90 text-background-dark hover:scale-105 transition-transform shadow-xl hover:bg-primary">
                            <span className="material-symbols-outlined" style={{fontSize: '32px', fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
                        </button>
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur text-[10px] font-medium text-white">0:15 Bucle</div>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Sentadilla con Barra</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Objetivo: Cuádriceps y Glúteos</p>
                        </div>
                        <button className="group shrink-0 relative mt-1">
                            <span className="material-symbols-outlined text-primary" style={{fontSize: '24px'}}>info</span>
                            <div className="absolute right-0 top-8 z-50 w-64 p-3 text-xs font-normal text-slate-200 bg-surface-dark border border-white/10 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                <span className="font-bold text-primary block mb-1">¿Por qué este ejercicio?</span>
                                Movimiento compuesto dirigido a cuádriceps y glúteos para una respuesta hipertrófica máxima.
                            </div>
                        </button>
                    </div>
                </div>
                <div className="px-4 py-2 space-y-4">
                    <div className="flex items-center justify-between px-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Historial</span>
                        <span className="text-xs font-medium text-slate-500">Último: 225lbs x 8</span>
                    </div>
                    <div className="bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-100 dark:border-white/5">
                        <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-white/5 pb-2">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">fitness_center</span>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Serie 2 de 4</span>
                            </div>
                            <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary font-medium">Meta: 8-10 reps</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 opacity-50">
                                <div className="w-8 text-center text-xs font-bold text-slate-400">1</div>
                                <div className="flex-1">
                                    <div className="bg-slate-100 dark:bg-black/40 h-10 rounded px-3 flex items-center justify-center text-slate-400 font-medium text-sm">
                                        215 lbs
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="bg-slate-100 dark:bg-black/40 h-10 rounded px-3 flex items-center justify-center text-slate-400 font-medium text-sm">
                                        10 reps
                                    </div>
                                </div>
                                <div className="w-8 flex justify-center">
                                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 text-center text-sm font-bold text-primary">2</div>
                                <div className="flex-1 relative group">
                                    <label className="absolute -top-2 left-2 px-1 bg-white dark:bg-surface-dark text-[10px] text-primary font-bold">Peso</label>
                                    <input className="w-full h-12 rounded-lg bg-background-light dark:bg-black/60 border-2 border-primary/50 focus:border-primary text-center text-lg font-bold text-slate-900 dark:text-white outline-none transition-colors" placeholder="0" type="number" defaultValue="225"/>
                                </div>
                                <div className="flex-1 relative group">
                                    <label className="absolute -top-2 left-2 px-1 bg-white dark:bg-surface-dark text-[10px] text-primary font-bold">Reps</label>
                                    <input className="w-full h-12 rounded-lg bg-background-light dark:bg-black/60 border-2 border-primary/50 focus:border-primary text-center text-lg font-bold text-slate-900 dark:text-white outline-none transition-colors" placeholder="-" type="number"/>
                                </div>
                                <div className="w-8 flex justify-center">
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 h-14 bg-primary hover:bg-green-400 active:scale-[0.98] rounded-xl flex items-center justify-center gap-2 text-background-dark font-bold text-lg shadow-lg shadow-primary/20 transition-all uppercase">
                            <span>Registrar Serie</span>
                            <span className="material-symbols-outlined font-bold">check</span>
                        </button>
                    </div>
                </div>
                <div className="h-4"></div>
            </main>

            <footer className="absolute bottom-0 w-full bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-white/5 p-4 z-10 safe-area-bottom">
                <div className="flex gap-3">
                    <button className="flex-1 flex flex-col items-center justify-center gap-1 p-3 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">swap_horiz</span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">Sustituir Ejercicio</span>
                    </button>
                    <button className="flex-1 flex flex-col items-center justify-center gap-1 p-3 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-orange-400 transition-colors">timelapse</span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">Acortar Entrenamiento</span>
                    </button>
                </div>
                <div className="h-4 w-full"></div>
            </footer>
        </div>
    );
};

export default PlayerScreen;