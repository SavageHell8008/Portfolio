import { clsx } from 'clsx';
import { Database, Layout, Shield, Cloud } from 'lucide-react';

const SKILLS_DATA = [
    { category: "CYBER_SEC", icon: Shield, skills: ["VAPT", "Bug Hunting", "OWASP Top 10", "Burp Suite", "Wireshark", "Hashcat"] },
    { category: "GEN_AI", icon: Database, skills: ["LangChain", "Gemini API", "OpenAI", "Transformers", "Python", "RAG"] },
    { category: "DESIGN", icon: Layout, skills: ["Figma", "Adobe Illustrator", "UI/UX", "Wireframing", "User Flows"] },
    { category: "LEADERSHIP", icon: Cloud, skills: ["Team Leadership", "Event Planning", "Public Speaking", "Problem Solving", "Mentoring"] }
];

export default function Skills() {
    return (
        <div className="h-full w-full p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-primary/20">
            <div className="border-b border-cyber-primary/30 pb-2 mb-6 flex justify-between items-end">
                <h1 className="text-3xl font-bold text-cyber-primary tracking-tighter">CAPABILITY_MATRIX</h1>
                <span className="text-cyber-text-dim text-xs">STATUS: OPTIMAL</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILLS_DATA.map((group) => (
                    <div key={group.category} className="bg-cyber-bg-light/30 border border-cyber-primary/20 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-4 text-cyber-secondary border-b border-cyber-primary/10 pb-2">
                            <group.icon size={18} />
                            <span className="font-bold tracking-widest">{group.category}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {group.skills.map(skill => (
                                <SkillChip key={skill} label={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SkillChip({ label }: { label: string }) {
    return (
        <div className={clsx(
            "relative px-3 py-1 bg-cyber-bg-dark border border-cyber-primary/30 rounded cursor-default transition-all duration-300",
            "hover:bg-cyber-primary/20 hover:border-cyber-primary hover:shadow-[0_0_10px_rgba(74,246,38,0.3)] hover:scale-105",
            "group"
        )}>
            <span className="text-sm font-mono text-cyber-text-primary group-hover:text-white">{label}</span>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-1 h-1 bg-cyber-primary opacity-50" />
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-cyber-primary opacity-50" />
        </div>
    )
}
