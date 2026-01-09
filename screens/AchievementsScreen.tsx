import React from 'react';
import TopNav from '../components/TopNav';

const AchievementsScreen: React.FC = () => {
    return (
        <div className="mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-8 relative shadow-2xl">
            <TopNav active="achievements" />

            <div className="pt-24 px-6 pb-20">
                <header className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Sala de Trofeos</h1>
                        <p className="text-sm text-slate-500 dark:text-[#9db9a6]">Tu legado fitness.</p>
                    </div>
                    <div className="text-right">
                        <span className="text-xs text-slate-400 uppercase font-bold">Nivel 12</span>
                        <div className="w-24 h-2 bg-surface-dark rounded-full mt-1 overflow-hidden border border-white/5">
                            <div className="h-full bg-primary w-2/3"></div>
                        </div>
                    </div>
                </header>

                {/* Main Stats */}
                <section className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-900/20 border border-yellow-600/30 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                        <div className="size-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 mb-2">
                            <span className="material-symbols-outlined filled text-2xl">local_fire_department</span>
                        </div>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">14</span>
                        <span className="text-xs font-bold text-yellow-600 uppercase tracking-wide">Racha Actual</span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-600/30 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                        <div className="size-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
                            <span className="material-symbols-outlined filled text-2xl">fitness_center</span>
                        </div>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">12.5T</span>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">Volumen Total</span>
                    </div>
                </section>

                {/* Categories */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Medallas Desbloqueadas</h3>
                
                <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-slate-100 dark:border-white/5 flex gap-4 items-center">
                        <div className="size-16 shrink-0 relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
                            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/1st%20Place%20Medal.png" alt="Medal" className="w-full h-full object-contain relative z-10" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white">Iniciador Feroz</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Completa tu primer mes sin fallar ningún entrenamiento programado.</p>
                            <div className="mt-2 text-[10px] text-primary font-bold bg-primary/10 inline-block px-2 py-0.5 rounded">Completado el 12 Oct</div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-slate-100 dark:border-white/5 flex gap-4 items-center">
                        <div className="size-16 shrink-0 relative">
                            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Flexed%20Biceps.png" alt="Biceps" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white">Club de las 200lbs</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Supera la barrera de las 200 libras en Sentadilla o Peso Muerto.</p>
                             <div className="mt-2 text-[10px] text-primary font-bold bg-primary/10 inline-block px-2 py-0.5 rounded">Completado el 20 Oct</div>
                        </div>
                    </div>

                    {/* Item 3 (Locked) */}
                    <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-slate-100 dark:border-white/5 flex gap-4 items-center opacity-60 grayscale">
                        <div className="size-16 shrink-0 flex items-center justify-center bg-slate-100 dark:bg-white/5 rounded-full">
                            <span className="material-symbols-outlined text-3xl text-slate-400">lock</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white">Madrugador</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Entrena antes de las 7:00 AM durante 5 días consecutivos.</p>
                            <div className="w-full bg-slate-200 dark:bg-black/40 h-1.5 rounded-full mt-2">
                                <div className="bg-slate-400 h-full rounded-full w-2/5"></div>
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 block">2/5 días</span>
                        </div>
                    </div>
                     {/* Item 4 (Locked) */}
                     <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-slate-100 dark:border-white/5 flex gap-4 items-center opacity-60 grayscale">
                        <div className="size-16 shrink-0 flex items-center justify-center bg-slate-100 dark:bg-white/5 rounded-full">
                            <span className="material-symbols-outlined text-3xl text-slate-400">lock</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white">Maratonista</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Acumula 10 horas de actividad cardio en un mes.</p>
                            <div className="w-full bg-slate-200 dark:bg-black/40 h-1.5 rounded-full mt-2">
                                <div className="bg-slate-400 h-full rounded-full w-1/5"></div>
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 block">1.5/10 horas</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsScreen;