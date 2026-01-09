import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingScreen: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isGenerating, setIsGenerating] = useState(false);
    
    // Form State
    const [formData, setFormData] = useState({
        goal: '',
        gender: '',
        age: '',
        weight: '',
        height: '',
        frequency: 3,
        username: ''
    });

    const totalSteps = 4;
    const progress = (step / totalSteps) * 100;

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            finishOnboarding();
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const updateData = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const finishOnboarding = () => {
        setIsGenerating(true);
        // Save name for dashboard
        localStorage.setItem('fitmarvin_user', formData.username || 'Atleta');
        
        // Simulate AI generation
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    };

    if (isGenerating) {
        return (
            <div className="flex h-screen w-full flex-col items-center justify-center bg-background-dark px-6 text-center max-w-md mx-auto">
                <div className="relative mb-8">
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-20"></div>
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-surface-dark border border-primary/30 shadow-[0_0_30px_rgba(19,236,91,0.2)]">
                        <span className="material-symbols-outlined text-4xl text-primary animate-pulse">smart_toy</span>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Diseñando tu Plan</h2>
                <p className="text-slate-400 text-sm mb-8">La IA está analizando tus datos corporales y objetivos...</p>
                
                <div className="w-full bg-surface-dark rounded-full h-1.5 overflow-hidden">
                    <div className="h-full bg-primary animate-[loading_2s_ease-in-out_infinite] w-1/3 rounded-full"></div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4 w-full opacity-60">
                    <div className="bg-surface-dark/50 p-3 rounded-lg border border-white/5">
                        <div className="h-2 w-12 bg-white/10 rounded mb-2"></div>
                        <div className="h-2 w-20 bg-white/5 rounded"></div>
                    </div>
                    <div className="bg-surface-dark/50 p-3 rounded-lg border border-white/5">
                        <div className="h-2 w-16 bg-white/10 rounded mb-2"></div>
                        <div className="h-2 w-10 bg-white/5 rounded"></div>
                    </div>
                </div>
                <style>{`
                    @keyframes loading {
                        0% { transform: translateX(-100%); }
                        50% { width: 60%; }
                        100% { transform: translateX(300%); }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
            {/* Header / Progress */}
            <div className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm pt-safe-top">
                <div className="flex items-center justify-between px-4 py-3">
                    {step > 1 ? (
                        <button onClick={handleBack} className="flex items-center justify-center size-10 rounded-full text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined" style={{fontSize: '24px'}}>arrow_back</span>
                        </button>
                    ) : <div className="size-10"></div>}
                    
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-primary tracking-wide uppercase">Configuración Inicial</span>
                    </div>
                    <div className="size-10"></div> 
                </div>
                <div className="px-6 pb-4">
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-surface-dark rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(19,236,91,0.5)]" style={{width: `${progress}%`}}></div>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 flex flex-col px-6 pt-4 pb-32 overflow-y-auto no-scrollbar">
                
                {/* STEP 1: OBJECTIVE */}
                {step === 1 && (
                    <div className="animate-[fadeIn_0.5s_ease-out]">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">¿Cuál es tu objetivo?</h1>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">Selecciona tu meta principal para optimizar tu plan.</p>
                        
                        <div className="flex flex-col gap-3">
                            {[
                                { id: 'fuerza', label: 'Fuerza', desc: 'Aumentar fuerza máxima y potencia', icon: 'fitness_center' },
                                { id: 'hipertrofia', label: 'Hipertrofia', desc: 'Desarrollo y volumen muscular', icon: 'accessibility_new' },
                                { id: 'peso', label: 'Pérdida de Peso', desc: 'Quema de grasa y definición', icon: 'monitor_weight' }
                            ].map((opt) => (
                                <label key={opt.id} className={`group relative flex items-center p-4 gap-4 rounded-xl cursor-pointer bg-white dark:bg-surface-dark border-2 transition-all duration-200 ${formData.goal === opt.id ? 'border-primary shadow-lg shadow-primary/5 bg-primary/5' : 'border-transparent hover:border-primary/30'}`}>
                                    <input className="peer sr-only" type="radio" checked={formData.goal === opt.id} onChange={() => updateData('goal', opt.id)} />
                                    <div className={`size-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${formData.goal === opt.id ? 'bg-primary text-background-dark' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'}`}>
                                        <span className={`material-symbols-outlined ${formData.goal === opt.id ? 'filled' : ''}`}>{opt.icon}</span>
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="text-lg font-bold text-slate-900 dark:text-white">{opt.label}</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">{opt.desc}</span>
                                    </div>
                                    <div className={`size-6 rounded-full border-2 flex items-center justify-center ${formData.goal === opt.id ? 'border-primary bg-primary text-background-dark' : 'border-slate-300 dark:border-white/20'}`}>
                                        {formData.goal === opt.id && <span className="material-symbols-outlined text-sm font-bold">check</span>}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {/* STEP 2: BODY DATA */}
                {step === 2 && (
                    <div className="animate-[fadeIn_0.5s_ease-out]">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Datos Corporales</h1>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">Necesarios para calcular tus cargas y calorías.</p>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Género</label>
                                <div className="flex gap-3">
                                    {['Hombre', 'Mujer', 'Otro'].map(g => (
                                        <button 
                                            key={g}
                                            onClick={() => updateData('gender', g)}
                                            className={`flex-1 py-3 rounded-xl font-medium text-sm transition-all ${formData.gender === g ? 'bg-primary text-background-dark font-bold shadow-lg shadow-primary/20' : 'bg-white dark:bg-surface-dark text-slate-500 dark:text-slate-400 border border-transparent hover:border-primary/30'}`}
                                        >
                                            {g}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Edad</label>
                                    <div className="relative">
                                        <input 
                                            type="number" 
                                            value={formData.age}
                                            onChange={(e) => updateData('age', e.target.value)}
                                            placeholder="25"
                                            className="w-full bg-white dark:bg-surface-dark border-2 border-transparent focus:border-primary rounded-xl py-3 px-4 text-slate-900 dark:text-white outline-none font-display font-bold text-lg placeholder:font-normal"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">años</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Peso</label>
                                    <div className="relative">
                                        <input 
                                            type="number" 
                                            value={formData.weight}
                                            onChange={(e) => updateData('weight', e.target.value)}
                                            placeholder="75"
                                            className="w-full bg-white dark:bg-surface-dark border-2 border-transparent focus:border-primary rounded-xl py-3 px-4 text-slate-900 dark:text-white outline-none font-display font-bold text-lg placeholder:font-normal"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">kg</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Altura</label>
                                <div className="relative">
                                    <input 
                                        type="number" 
                                        value={formData.height}
                                        onChange={(e) => updateData('height', e.target.value)}
                                        placeholder="175"
                                        className="w-full bg-white dark:bg-surface-dark border-2 border-transparent focus:border-primary rounded-xl py-3 px-4 text-slate-900 dark:text-white outline-none font-display font-bold text-lg placeholder:font-normal"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">cm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 3: FREQUENCY */}
                {step === 3 && (
                    <div className="animate-[fadeIn_0.5s_ease-out]">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Frecuencia</h1>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">¿Cuántos días a la semana puedes entrenar?</p>

                        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-slate-100 dark:border-white/5 text-center">
                            <span className="text-6xl font-bold text-primary block mb-2">{formData.frequency}</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Días / Semana</span>
                            
                            <input 
                                type="range" 
                                min="2" 
                                max="7" 
                                step="1" 
                                value={formData.frequency} 
                                onChange={(e) => updateData('frequency', parseInt(e.target.value))}
                                className="w-full mt-8 h-2 bg-surface-darker rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                                <span>2</span>
                                <span>7</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 flex gap-3 items-center justify-center p-4 bg-primary/10 rounded-xl border border-primary/20">
                            <span className="material-symbols-outlined text-primary">info</span>
                            <p className="text-xs text-primary font-medium leading-relaxed">
                                {formData.frequency < 3 ? "Recomendamos rutina Full Body." : 
                                 formData.frequency < 5 ? "Recomendamos rutina Upper/Lower." : 
                                 "Recomendamos rutina Push/Pull/Legs."}
                            </p>
                        </div>
                    </div>
                )}

                {/* STEP 4: IDENTITY */}
                {step === 4 && (
                    <div className="animate-[fadeIn_0.5s_ease-out]">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Identidad</h1>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">¿Cómo quieres que te llame tu asistente?</p>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">badge</span>
                            </div>
                            <input 
                                type="text" 
                                value={formData.username}
                                onChange={(e) => updateData('username', e.target.value)}
                                placeholder="Tu nombre"
                                className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-surface-dark border-2 border-transparent focus:border-primary rounded-xl text-slate-900 dark:text-white placeholder-slate-400 outline-none font-bold text-xl transition-all"
                            />
                        </div>

                        <div className="mt-8 bg-surface-dark/50 border border-white/5 p-4 rounded-xl">
                            <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">summarize</span>
                                Resumen
                            </h3>
                            <ul className="text-sm space-y-2 text-slate-400">
                                <li className="flex justify-between"><span>Objetivo:</span> <span className="text-white capitalize">{formData.goal}</span></li>
                                <li className="flex justify-between"><span>Días:</span> <span className="text-white">{formData.frequency} / semana</span></li>
                                <li className="flex justify-between"><span>Peso:</span> <span className="text-white">{formData.weight} kg</span></li>
                            </ul>
                        </div>
                    </div>
                )}

            </div>
            
            <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-background-dark border-t border-slate-100 dark:border-white/5 pt-4 pb-8 px-6 z-10 safe-area-bottom">
                <button 
                    onClick={handleNext} 
                    disabled={step === 4 && !formData.username}
                    className={`w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#0fd650] active:scale-[0.98] transition-all duration-200 text-surface-darker font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_-5px_rgba(19,236,91,0.4)] ${step === 4 && !formData.username ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {step === 4 ? 'Finalizar Configuración' : 'Siguiente'}
                    <span className="material-symbols-outlined" style={{fontWeight: 600}}>arrow_forward</span>
                </button>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default OnboardingScreen;