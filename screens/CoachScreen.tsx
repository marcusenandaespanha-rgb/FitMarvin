import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Message {
    id: string;
    sender: 'user' | 'ai';
    text: string;
    type?: 'text' | 'map' | 'recipe' | 'analysis';
    data?: any;
    timestamp: Date;
}

const CoachScreen: React.FC = () => {
    const navigate = useNavigate();
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            sender: 'ai',
            text: '¡Hola! Soy Coach FitMarvin. ¿Cómo te sientes hoy para entrenar? Puedo ayudarte con tu técnica, buscar gimnasios cercanos o recomendarte recetas.',
            timestamp: new Date()
        }
    ]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newUserMsg: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI Response based on keywords
        setTimeout(() => {
            let aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: '',
                timestamp: new Date()
            };

            const lowerText = text.toLowerCase();

            if (lowerText.includes('gimnasio') || lowerText.includes('cercano') || lowerText.includes('donde entrenar')) {
                aiResponse.text = "He encontrado estos gimnasios cerca de tu ubicación con buenas valoraciones:";
                aiResponse.type = 'map';
                aiResponse.data = [
                    { name: 'Iron Paradise Gym', rating: 4.8, dist: '0.5 km' },
                    { name: 'City Fitness Club', rating: 4.5, dist: '1.2 km' }
                ];
            } else if (lowerText.includes('receta') || lowerText.includes('comer') || lowerText.includes('dieta')) {
                aiResponse.text = "Aquí tienes una receta alta en proteínas perfecta para el post-entreno:";
                aiResponse.type = 'recipe';
                aiResponse.data = {
                    title: 'Bowl de Pollo y Quinoa',
                    cals: 450,
                    protein: '40g',
                    img: 'https://picsum.photos/seed/food/300/200'
                };
            } else if (lowerText.includes('técnica') || lowerText.includes('forma') || lowerText.includes('video') || lowerText.includes('revisar')) {
                aiResponse.text = "Por favor, sube un video o foto de tu ejercicio. Me centraré en la alineación de tu espalda y la profundidad.";
            } else if (lowerText.includes('siento') || lowerText.includes('cansado') || lowerText.includes('motivado')) {
                if (lowerText.includes('cansado') || lowerText.includes('mal')) {
                    aiResponse.text = "Es normal tener días bajos. Si te sientes muy fatigado, considera una sesión de recuperación activa o movilidad. ¿Quieres que ajuste la rutina de hoy?";
                } else {
                    aiResponse.text = "¡Esa es la actitud! Aprovecha esa energía para intentar superar tus marcas hoy. ¿Vamos a por ese PR?";
                }
            } else {
                aiResponse.text = "Entiendo. ¿Necesitas ayuda específica con algún ejercicio de tu rutina de hoy o tienes dudas sobre nutrición?";
            }

            setIsTyping(false);
            setMessages(prev => [...prev, aiResponse]);
            
            // If checking form was requested, simulate a follow up if it was a file upload simulation
            // For simplicity, we just respond with text logic above.

        }, 1500);
    };

    const handleFileUpload = () => {
        // Simulate uploading a file
        const newUserMsg: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: '📷 [Video de Sentadilla.mp4]',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newUserMsg]);
        setIsTyping(true);

        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: "He analizado tu video. Tienes buena estabilidad, pero noto que tus talones se levantan ligeramente al final del movimiento. Intenta mejorar tu movilidad de tobillo antes de la próxima serie.",
                type: 'analysis',
                timestamp: new Date()
            };
            setIsTyping(false);
            setMessages(prev => [...prev, aiResponse]);
        }, 3000);
    };

    return (
        <div className="flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark max-w-md mx-auto shadow-2xl overflow-hidden relative">
            {/* Header */}
            <header className="bg-white/95 dark:bg-[#102216]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/5 p-4 pt-safe-top flex items-center gap-3 z-20">
                <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
                </button>
                <div className="relative">
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                        <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
                    </div>
                    <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white dark:border-background-dark"></div>
                </div>
                <div>
                    <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight">Coach FitMarvin</h1>
                    <span className="text-xs text-primary font-medium flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                        En línea
                    </span>
                </div>
            </header>

            {/* Chat Area */}
            <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-32 no-scrollbar bg-slate-50 dark:bg-[#0a160e]">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                            msg.sender === 'user' 
                            ? 'bg-primary text-background-dark rounded-br-none' 
                            : 'bg-white dark:bg-surface-dark text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-100 dark:border-white/5'
                        }`}>
                            <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                            
                            {/* Maps Integration */}
                            {msg.type === 'map' && msg.data && (
                                <div className="mt-3 space-y-2">
                                    {msg.data.map((gym: any, idx: number) => (
                                        <div key={idx} className="bg-slate-50 dark:bg-black/20 p-2 rounded-lg flex items-center justify-between border border-black/5 dark:border-white/5">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-red-500 bg-red-500/10 p-1 rounded">location_on</span>
                                                <div>
                                                    <p className="text-xs font-bold dark:text-white">{gym.name}</p>
                                                    <p className="text-[10px] text-slate-500">{gym.dist} • ⭐ {gym.rating}</p>
                                                </div>
                                            </div>
                                            <span className="material-symbols-outlined text-slate-400 text-sm">directions</span>
                                        </div>
                                    ))}
                                    <div className="h-24 bg-slate-200 dark:bg-white/10 rounded-lg w-full flex items-center justify-center text-xs text-slate-500">
                                        [Mapa Interactivo]
                                    </div>
                                </div>
                            )}

                            {/* Recipe Integration */}
                            {msg.type === 'recipe' && msg.data && (
                                <div className="mt-3 rounded-xl overflow-hidden bg-slate-50 dark:bg-black/20 border border-black/5 dark:border-white/5">
                                    <img src={msg.data.img} alt="Recipe" className="w-full h-24 object-cover" />
                                    <div className="p-2">
                                        <p className="text-xs font-bold dark:text-white">{msg.data.title}</p>
                                        <div className="flex gap-2 mt-1 text-[10px] text-slate-500">
                                            <span>🔥 {msg.data.cals} kcal</span>
                                            <span>🥩 {msg.data.protein} prot</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Analysis Feedback */}
                            {msg.type === 'analysis' && (
                                <div className="mt-2 flex gap-2">
                                    <span className="text-[10px] bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded font-bold">Estabilidad: 8/10</span>
                                    <span className="text-[10px] bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded font-bold">Movilidad: 6/10</span>
                                </div>
                            )}

                            <span className={`text-[9px] block mt-1 opacity-60 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </span>
                        </div>
                    </div>
                ))}
                
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white dark:bg-surface-dark p-3 rounded-2xl rounded-bl-none border border-slate-100 dark:border-white/5">
                            <div className="flex gap-1">
                                <span className="size-2 bg-slate-400 rounded-full animate-bounce"></span>
                                <span className="size-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                                <span className="size-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </main>

            {/* Input Area */}
            <footer className="bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-white/5 p-4 z-20 safe-area-bottom">
                {/* Suggestions Chips */}
                {!isTyping && messages.length < 3 && (
                    <div className="flex gap-2 overflow-x-auto no-scrollbar mb-3">
                        <button onClick={() => handleSendMessage("Revisar mi técnica de sentadilla")} className="whitespace-nowrap px-3 py-1.5 rounded-full bg-background-light dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary transition-colors">
                            📹 Revisar forma
                        </button>
                        <button onClick={() => handleSendMessage("Buscar gimnasios cercanos")} className="whitespace-nowrap px-3 py-1.5 rounded-full bg-background-light dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary transition-colors">
                            📍 Gimnasios cercanos
                        </button>
                        <button onClick={() => handleSendMessage("Receta saludable post-entreno")} className="whitespace-nowrap px-3 py-1.5 rounded-full bg-background-light dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary transition-colors">
                            🥗 Recetas
                        </button>
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <button onClick={handleFileUpload} className="p-3 text-slate-400 hover:text-primary transition-colors bg-slate-100 dark:bg-white/5 rounded-full shrink-0">
                        <span className="material-symbols-outlined">add_a_photo</span>
                    </button>
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                            placeholder="Escribe a FitMarvin..."
                            className="w-full bg-slate-100 dark:bg-black/20 text-slate-900 dark:text-white rounded-full py-3 pl-4 pr-10 outline-none border border-transparent focus:border-primary/50 transition-colors placeholder:text-slate-400"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">mic</span>
                        </button>
                    </div>
                    <button 
                        onClick={() => handleSendMessage(inputValue)}
                        disabled={!inputValue.trim()}
                        className={`p-3 rounded-full transition-all shrink-0 ${inputValue.trim() ? 'bg-primary text-background-dark shadow-lg shadow-primary/20 scale-100' : 'bg-slate-200 dark:bg-white/10 text-slate-400 scale-95'}`}
                    >
                        <span className="material-symbols-outlined filled">send</span>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default CoachScreen;