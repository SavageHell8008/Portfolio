import { Download, Github, Linkedin, Mail, Zap, ExternalLink } from 'lucide-react';
import { useSystemStore } from '../../store/systemStore';

export default function QuickLinks() {
    const { setActiveModule } = useSystemStore();

    const links = [
        {
            icon: Download,
            label: 'Resume Download',
            action: () => {
                const link = document.createElement('a');
                link.href = '/resume Abhishek.pdf';
                link.download = 'Abhishek_Soni_Resume.pdf';
                link.click();
            }
        },
        {
            icon: Github,
            label: 'GitHub Profile',
            action: () => window.open('https://github.com/SavageHell8008', '_blank')
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            action: () => window.open('https://www.linkedin.com/in/abhishek-soni-89b518250/', '_blank')
        },
        {
            icon: Zap,
            label: 'GoPwnIt Platform',
            action: () => setActiveModule('gopwnit')
        },
        {
            icon: Mail,
            label: 'Email Contact',
            action: () => window.location.href = 'mailto:sharmay728@gmail.com'
        }
    ];

    return (
        <div className="bg-cyber-bg-light/30 backdrop-blur-sm border border-cyber-primary/20 rounded p-4">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 border-b border-cyber-primary/20 pb-2">
                <ExternalLink size={16} className="text-cyber-primary" />
                <h3 className="text-cyber-primary font-bold text-xs tracking-widest">QUICK ACCESS</h3>
            </div>

            {/* Links */}
            <div className="space-y-2">
                {links.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <button
                            key={index}
                            onClick={link.action}
                            className="w-full flex items-center gap-3 px-3 py-2 bg-cyber-bg-dark/50 border border-cyber-primary/10 hover:border-cyber-primary/50 hover:bg-cyber-primary/10 transition-all group text-left rounded"
                        >
                            <Icon size={14} className="text-cyber-secondary group-hover:text-cyber-primary transition-colors flex-shrink-0" />
                            <span className="text-cyber-text-dim text-xs group-hover:text-cyber-text-primary transition-colors">
                                {link.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
