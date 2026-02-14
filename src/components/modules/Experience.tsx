import { Briefcase, Calendar } from 'lucide-react';

const EXPERIENCE = [
    {
        id: 0,
        role: "Founder",
        company: "GoPwnIt",
        period: "2025 - PRESENT",
        desc: "Founded an advanced cybersecurity resource hub. Leading development of security tools and educational content."
    },
    {
        id: 1,
        role: "Freelance UI/UX Designer",
        company: "Gritty Tech",
        period: "MAR 2025 - JUNE 2025",
        desc: "Designed intuitive interfaces for product MVPs. Created user flows and wireframes in Figma, improving onboarding by 30%."
    },
    {
        id: 2,
        role: "Design Head",
        company: "Google Developer Club",
        period: "NOV 2024 - MAY 2025",
        desc: "Built community-focused tech visuals and branding. Led design initiatives for major tech events."
    },
    {
        id: 3,
        role: "Virtual Cybersecurity Intern",
        company: "ShadowFox",
        period: "OCT 2024 - NOV 2024",
        desc: "Performed penetration testing and log analysis in a simulated enterprise environment. Collaborated on remediation reporting."
    },
    {
        id: 4,
        role: "Vice President",
        company: "Cyberonites",
        period: "JULY 2024 - PRESENT",
        desc: "Leading community growth and partnerships. Organizing workshops to spread cybersecurity awareness."
    }
];

export default function Experience() {
    return (
        <div className="h-full w-full p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-primary/20">
            <h1 className="text-3xl font-bold text-cyber-primary tracking-tighter mb-8 border-b border-cyber-primary/30 pb-4">
                OPERATION_LOG
            </h1>

            <div className="relative border-l border-cyber-primary/20 ml-3 space-y-12">
                {EXPERIENCE.map((exp, index) => (
                    <div key={exp.id} className="relative pl-8 group">
                        {/* Time Marker */}
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-cyber-bg-dark border border-cyber-primary rounded-full group-hover:bg-cyber-primary transition-colors scroll-mt-24" />

                        <div className="bg-cyber-bg-light/30 border border-cyber-primary/10 p-6 rounded-br-2xl hover:border-cyber-primary/50 transition-all duration-300 hover:ml-2">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-cyber-text-primary group-hover:text-cyber-secondary transition-colors">
                                    {exp.role}
                                </h3>
                                <span className="text-xs font-mono text-cyber-text-dim bg-cyber-bg-dark px-2 py-1 rounded border border-cyber-primary/10 flex items-center gap-2">
                                    <Calendar size={12} /> {exp.period}
                                </span>
                            </div>

                            <div className="text-cyber-primary text-sm font-bold mb-4 flex items-center gap-2">
                                <Briefcase size={14} /> @ {exp.company}
                            </div>

                            <p className="text-cyber-text-dim text-sm leading-relaxed font-mono">
                                {exp.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
