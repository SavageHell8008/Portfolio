import { useSystemStore } from '../../store/systemStore';
import { Terminal, User, Cpu, Folder, Briefcase, Trophy, Mail, Zap, Shield, Image } from 'lucide-react';
import { clsx } from 'clsx';

const NAV_ITEMS = [
    { id: 'terminal', label: 'SYSTEM', icon: Terminal },
    { id: 'about', label: 'PROFILE', icon: User },
    { id: 'skills', label: 'SKILLS', icon: Cpu },
    { id: 'projects', label: 'PROJECTS', icon: Folder },
    { id: 'experience', label: 'EXP_LOG', icon: Briefcase },
    { id: 'certifications', label: 'CERTS', icon: Shield },
    { id: 'achievements', label: 'AWARDS', icon: Trophy },
    { id: 'gallery', label: 'GALLERY', icon: Image },
    { id: 'gopwnit', label: 'GOPWNIT', icon: Zap },
    { id: 'contact', label: 'CONTACT', icon: Mail },
];

export default function NavPanel() {
    const { activeModule, setActiveModule } = useSystemStore();

    return (
        <div className="w-64 h-full bg-cyber-bg-light/50 backdrop-blur-sm border-r border-cyber-primary/20 flex flex-col py-8 gap-2">
            {NAV_ITEMS.map((item) => {
                const isActive = activeModule === item.id || (activeModule === null && item.id === 'terminal');
                const Icon = item.icon;

                return (
                    <button
                        key={item.id}
                        onClick={() => setActiveModule(item.id === 'terminal' ? null : item.id)}
                        className={clsx(
                            "group relative px-6 py-3 flex items-center gap-4 transition-all duration-300 w-full text-left",
                            isActive
                                ? "bg-cyber-primary/10 text-cyber-primary border-l-2 border-cyber-primary"
                                : "text-cyber-text-dim hover:text-cyber-text-primary hover:bg-white/5 border-l-2 border-transparent"
                        )}
                    >
                        <Icon size={18} className={clsx("transition-transform duration-300", isActive && "scale-110 drop-shadow-[0_0_5px_rgba(74,246,38,0.8)]")} />
                        <span className="font-mono text-sm tracking-widest">{item.label}</span>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-cyber-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                );
            })}
        </div>
    );
}
