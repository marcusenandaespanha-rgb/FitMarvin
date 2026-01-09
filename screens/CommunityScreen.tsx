import React from 'react';
import TopNav from '../components/TopNav';

const CommunityScreen: React.FC = () => {
    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden pb-8 max-w-md mx-auto bg-background-light dark:bg-background-dark">
            <TopNav active="community" />

            {/* Adjust padding for top nav */}
            <div className="pt-24 flex-1 flex flex-col h-full overflow-hidden">
                <header className="sticky top-20 z-20 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 border-b border-gray-200 dark:border-white/5">
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Mis Círculos</h2>
                    <button className="flex items-center justify-center rounded-full bg-surface-highlight hover:bg-primary/20 text-primary w-10 h-10 transition-colors">
                        <span className="material-symbols-outlined" style={{fontSize: '24px'}}>add_circle</span>
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto px-4 pt-6 space-y-8 no-scrollbar">
                    <section className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-text-secondary text-sm font-medium uppercase tracking-wider">Tu Círculo Cercano</h3>
                        </div>
                        <div className="rounded-xl bg-white dark:bg-surface-dark shadow-sm ring-1 ring-black/5 dark:ring-white/5 overflow-hidden">
                            <div className="relative h-24 w-full">
                                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://picsum.photos/seed/community1/400/200")'}}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
                                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                                    <div>
                                        <h4 className="text-white text-lg font-bold flex items-center gap-2">
                                            Escuadrón de Sentadillas
                                            <span className="material-symbols-outlined text-text-secondary" style={{fontSize: '16px'}}>lock</span>
                                        </h4>
                                        <p className="text-text-secondary text-xs">Grupo Privado • 4 Miembros</p>
                                    </div>
                                    <button className="bg-surface-highlight/80 hover:bg-surface-highlight backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors">
                                        <span className="material-symbols-outlined" style={{fontSize: '16px'}}>settings</span>
                                        Gestionar
                                    </button>
                                </div>
                            </div>
                            <div className="px-4 py-4 border-b border-white/5">
                                <div className="flex items-center justify-start -space-x-2">
                                    <div className="relative ring-2 ring-surface-dark rounded-full">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://picsum.photos/seed/u1/100/100")'}}></div>
                                        <div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-surface-dark"></div>
                                    </div>
                                    <div className="relative ring-2 ring-surface-dark rounded-full">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://picsum.photos/seed/u2/100/100")'}}></div>
                                        <div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-surface-dark"></div>
                                    </div>
                                    <div className="relative ring-2 ring-surface-dark rounded-full">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://picsum.photos/seed/u3/100/100")'}}></div>
                                    </div>
                                    <div className="relative ring-2 ring-surface-dark rounded-full flex items-center justify-center bg-surface-highlight size-10 text-xs text-text-secondary font-medium">
                                        +1
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-2">
                                <div className="flex gap-3 py-4">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0" style={{backgroundImage: 'url("https://picsum.photos/seed/u4/100/100")'}}></div>
                                        <div className="w-0.5 bg-surface-highlight h-full mt-2 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 pb-2">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-white text-sm font-medium leading-normal">¡Marcos acaba de establecer un nuevo récord en Sentadillas!</p>
                                            <span className="text-text-secondary text-xs whitespace-nowrap ml-2">hace 2 min</span>
                                        </div>
                                        <p className="text-primary text-xs font-bold mb-3">315 lbs x 1 Rep</p>
                                        <div className="flex gap-2">
                                            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-highlight hover:bg-primary/20 text-primary transition-colors border border-transparent hover:border-primary/30 group">
                                                <span className="material-symbols-outlined filled group-hover:scale-110 transition-transform" style={{fontSize: '18px', fontVariationSettings: "'FILL' 1"}}>local_fire_department</span>
                                                <span className="text-xs font-bold">8</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-highlight hover:bg-white/10 text-text-secondary transition-colors border border-transparent">
                                                <span className="material-symbols-outlined" style={{fontSize: '18px'}}>waving_hand</span>
                                                <span className="text-xs font-bold">Aplausos</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-4">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0" style={{backgroundImage: 'url("https://picsum.photos/seed/u5/100/100")'}}></div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-white text-sm font-medium leading-normal">¡Sarah completó una carrera de 5k!</p>
                                            <span className="text-text-secondary text-xs whitespace-nowrap ml-2">hace 12 min</span>
                                        </div>
                                        <p className="text-text-secondary text-xs mb-3">Sesión de trote matutina</p>
                                        <div className="flex gap-2">
                                            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary transition-colors border border-primary/30">
                                                <span className="material-symbols-outlined filled" style={{fontSize: '18px', fontVariationSettings: "'FILL' 1"}}>waving_hand</span>
                                                <span className="text-xs font-bold">12</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-highlight hover:bg-white/10 text-text-secondary transition-colors border border-transparent">
                                                <span className="material-symbols-outlined" style={{fontSize: '18px'}}>local_fire_department</span>
                                                <span className="text-xs font-bold">Reaccionar</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-text-secondary text-sm font-medium uppercase tracking-wider">Otros Grupos</h3>
                            <button className="text-primary text-xs font-bold">Ver todo</button>
                        </div>
                        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                            <div className="shrink-0 w-48 p-4 rounded-xl bg-surface-dark border border-white/5 flex flex-col justify-between h-32 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-primary" style={{fontSize: '20px'}}>hiking</span>
                                        <h4 className="text-white font-bold text-sm">Senderistas de Fin de Semana</h4>
                                    </div>
                                    <p className="text-text-secondary text-xs">3 Miembros</p>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6 ring-1 ring-surface-dark" style={{backgroundImage: 'url("https://picsum.photos/seed/hike1/100/100")'}}></div>
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6 ring-1 ring-surface-dark" style={{backgroundImage: 'url("https://picsum.photos/seed/hike2/100/100")'}}></div>
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6 ring-1 ring-surface-dark" style={{backgroundImage: 'url("https://picsum.photos/seed/hike3/100/100")'}}></div>
                                </div>
                            </div>
                            <div className="shrink-0 w-48 p-4 rounded-xl bg-surface-dark border border-white/5 flex flex-col justify-between h-32 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-blue-400" style={{fontSize: '20px'}}>pool</span>
                                        <h4 className="text-white font-bold text-sm">Equipo de Natación</h4>
                                    </div>
                                    <p className="text-text-secondary text-xs">6 Miembros</p>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6 ring-1 ring-surface-dark" style={{backgroundImage: 'url("https://picsum.photos/seed/swim1/100/100")'}}></div>
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6 ring-1 ring-surface-dark flex items-center justify-center bg-surface-highlight text-[10px] text-text-secondary font-bold">+5</div>
                                </div>
                            </div>
                            <button className="shrink-0 w-32 p-4 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center h-32 gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all group">
                                <span className="material-symbols-outlined text-text-secondary group-hover:text-primary transition-colors" style={{fontSize: '24px'}}>add</span>
                                <span className="text-text-secondary text-xs font-medium">Unirse</span>
                            </button>
                        </div>
                    </section>

                    <section className="flex flex-col gap-3 pb-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-text-secondary text-sm font-medium uppercase tracking-wider">Desafíos Comunitarios</h3>
                        </div>
                        <div className="rounded-xl bg-surface-dark p-5 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-primary" style={{fontSize: '120px'}}>fitness_center</span>
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-white text-lg font-bold mb-1">El Desafío de 1 Millón de Flexiones</h4>
                                <p className="text-text-secondary text-sm mb-4">Desafío Comunitario de Octubre</p>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-3xl font-bold text-white tracking-tight">745.000</span>
                                    <span className="text-text-secondary text-xs font-medium mb-1">/ 1.000.000 completadas</span>
                                </div>
                                <div className="h-3 w-full bg-surface-highlight rounded-full overflow-hidden mb-5">
                                    <div className="h-full bg-primary rounded-full" style={{width: '74.5%'}}></div>
                                </div>
                                <button className="w-full bg-primary text-background-dark font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-400 transition-colors">
                                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>add_task</span>
                                    Registrar Contribución
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default CommunityScreen;