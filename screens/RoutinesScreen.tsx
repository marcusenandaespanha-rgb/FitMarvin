import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';

interface Routine {
    id: string;
    title: string;
    level: 'Principiante' | 'Intermedio' | 'Avanzado';
    days: number;
    duration: string;
    type: string;
    description: string;
    image: string;
    tags: string[];
}

const routinesData: Routine[] = [
    // PRINCIPIANTE
    {
        id: '1',
        title: 'Adaptación Full Body',
        level: 'Principiante',
        days: 3,
        duration: '45 min',
        type: 'Fuerza General',
        description: 'Ideal para tus primeras 4-6 semanas. Trabaja todo el cuerpo en cada sesión para aprender técnica y crear base.',
        image: 'https://picsum.photos/seed/routine1/400/200',
        tags: ['En Casa o Gym', 'Poco Equipo']
    },
    {
        id: '2',
        title: 'Pérdida de Grasa Básica',
        level: 'Principiante',
        days: 4,
        duration: '40 min',
        type: 'Cardio + Tono',
        description: 'Circuito de alta intensidad diseñado para elevar el ritmo cardíaco y mantener masa muscular.',
        image: 'https://picsum.photos/seed/routine2/400/200',
        tags: ['Sin Equipo', 'Alta Intensidad']
    },
    // INTERMEDIO
    {
        id: '3',
        title: 'Torso / Pierna',
        level: 'Intermedio',
        days: 4,
        duration: '60 min',
        type: 'Hipertrofia',
        description: 'Divide el entrenamiento en días de tren superior e inferior. Permite mayor volumen por grupo muscular.',
        image: 'https://picsum.photos/seed/routine3/400/200',
        tags: ['Gimnasio', 'Estética']
    },
    {
        id: '4',
        title: 'Push Pull Legs (PPL)',
        level: 'Intermedio',
        days: 6,
        duration: '50 min',
        type: 'Híbrido',
        description: 'Frecuencia alta. Día de empuje, día de tirón y día de pierna. La favorita para ganar masa.',
        image: 'https://picsum.photos/seed/routine4/400/200',
        tags: ['Gimnasio', 'Popular']
    },
    // AVANZADO
    {
        id: '5',
        title: 'PHAT Power Hypertrophy',
        level: 'Avanzado',
        days: 5,
        duration: '75 min',
        type: 'Fuerza + Tamaño',
        description: 'Combina días de fuerza máxima (bajas reps) con días de hipertrofia (altas reps). Muy exigente.',
        image: 'https://picsum.photos/seed/routine5/400/200',
        tags: ['Gimnasio Completo', 'Experto']
    },
    {
        id: '6',
        title: 'Especialización de Glúteos',
        level: 'Avanzado',
        days: 5,
        duration: '60 min',
        type: 'Específico',
        description: 'Rutina de alta frecuencia enfocada en el desarrollo del tren inferior con mantenimiento del superior.',
        image: 'https://picsum.photos/seed/routine6/400/200',
        tags: ['Bandas y Pesas', 'Focalizado']
    }
];

const RoutinesScreen: React.FC = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState<'Todos' | 'Principiante' | 'Intermedio' | 'Avanzado'>('Todos');

    const filteredRoutines = filter === 'Todos' 
        ? routinesData 
        : routinesData.filter(r => r.level === filter);

    return (
        <div className="mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-8 relative shadow-2xl">
            <TopNav active="routines" />

            <div className="pt-20 px-6">
                <header className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Catálogo de Rutinas</h1>
                    <p className="text-sm text-slate-500 dark:text-[#9db9a6]">Encuentra el plan perfecto para tu nivel.</p>
                </header>

                {/* Filters */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
                    {['Todos', 'Principiante', 'Intermedio', 'Avanzado'].map((lvl) => (
                        <button
                            key={lvl}
                            onClick={() => setFilter(lvl as any)}
                            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                                filter === lvl 
                                ? 'bg-primary text-background-dark shadow-lg shadow-primary/20' 
                                : 'bg-white dark:bg-surface-dark text-slate-500 border border-slate-200 dark:border-white/10'
                            }`}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="space-y-6 pb-20">
                    {filteredRoutines.map((routine) => (
                        <div key={routine.id} className="group relative bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
                            
                            {/* Card Image Header */}
                            <div className="h-32 w-full relative">
                                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("${routine.image}")`}}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-90"></div>
                                
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide text-white
                                        ${routine.level === 'Principiante' ? 'bg-green-500/80' : 
                                          routine.level === 'Intermedio' ? 'bg-orange-500/80' : 'bg-red-500/80'}`}>
                                        {routine.level}
                                    </span>
                                </div>
                                
                                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                                    <h3 className="text-lg font-bold text-white leading-tight">{routine.title}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3 border-b border-slate-100 dark:border-white/5 pb-3">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                        <span>{routine.days} días/sem</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                                        <span>{routine.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
                                        <span className="text-primary font-medium">{routine.type}</span>
                                    </div>
                                </div>
                                
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                    {routine.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {routine.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-background-light dark:bg-black/20 rounded text-[10px] font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <button 
                                    onClick={() => navigate('/player')}
                                    className="w-full py-3 rounded-xl bg-surface-darker hover:bg-black dark:bg-white dark:hover:bg-slate-200 text-white dark:text-background-dark font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                                >
                                    <span>Ver Rutina</span>
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    ))}
                    
                    {filteredRoutines.length === 0 && (
                        <div className="py-10 text-center text-slate-500">
                            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">search_off</span>
                            <p>No hay rutinas para este filtro.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoutinesScreen;