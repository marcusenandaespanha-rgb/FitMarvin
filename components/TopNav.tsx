import React from 'react';
import { Link } from 'react-router-dom';

interface TopNavProps {
    active: string;
}

const TopNav: React.FC<TopNavProps> = ({ active }) => {
    const getIconClass = (name: string) => active === name ? "text-primary" : "text-slate-400 dark:text-[#9db9a6] hover:text-slate-600 dark:hover:text-white";
    const getFillClass = (name: string) => active === name ? "filled" : "";
    const getTextClass = (name: string) => active === name ? "text-slate-900 dark:text-white font-semibold" : "text-slate-400 dark:text-[#9db9a6] font-medium";
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#102216]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 mx-auto max-w-md w-full pt-safe-top">
            <div className="flex justify-around items-center h-20 relative">
                <Link to="/dashboard" className={`flex flex-col items-center gap-1 p-2 w-16 transition-colors ${getIconClass('home')}`}>
                    <span className={`material-symbols-outlined ${getFillClass('home')}`}>home</span>
                    <span className={`text-[9px] uppercase tracking-wide ${getTextClass('home')}`}>Inicio</span>
                </Link>
                
                <Link to="/routines" className={`flex flex-col items-center gap-1 p-2 w-16 transition-colors ${getIconClass('routines')}`}>
                    <span className={`material-symbols-outlined ${getFillClass('routines')}`}>fitness_center</span>
                    <span className={`text-[9px] uppercase tracking-wide ${getTextClass('routines')}`}>Rutinas</span>
                </Link>
                
                {/* AI Coach Floating Action Button */}
                <div className="relative top-5 z-50">
                    <Link to="/coach" className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black shadow-lg shadow-primary/30 transition-transform active:scale-95 border-4 border-white dark:border-background-dark group">
                        <span className="material-symbols-outlined text-[28px] group-hover:rotate-12 transition-transform">smart_toy</span>
                    </Link>
                </div>

                <Link to="/achievements" className={`flex flex-col items-center gap-1 p-2 w-16 transition-colors ${getIconClass('achievements')}`}>
                    <span className={`material-symbols-outlined ${getFillClass('achievements')}`}>emoji_events</span>
                    <span className={`text-[9px] uppercase tracking-wide ${getTextClass('achievements')}`}>Logros</span>
                </Link>

                <Link to="/community" className={`flex flex-col items-center gap-1 p-2 w-16 transition-colors ${getIconClass('community')}`}>
                    <span className={`material-symbols-outlined ${getFillClass('community')}`}>groups</span>
                    <span className={`text-[9px] uppercase tracking-wide ${getTextClass('community')}`}>Social</span>
                </Link>
            </div>
        </nav>
    );
};

export default TopNav;