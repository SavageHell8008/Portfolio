import { Trophy, Award, Star, Shield, Mic, Users } from 'lucide-react';

const AWARDS = [
    { title: "Top 15% Global Rank", issuer: "TryHackMe", date: "2024", icon: Star },
    { title: "Event Organizer", issuer: "ExcalateX / IntrusionX", date: "2023-24", icon: Trophy },
    { title: "Vice President", issuer: "Cyberonites", date: "2024-25", icon: Award },
    { title: "Technavya Advisor", issuer: "Technavya 2025 & 2026", date: "2025-26", icon: Users },
    { title: "CEH Certified", issuer: "EC-Council", date: "2024", icon: Shield },
    { title: "Speaker", issuer: "Cybersecurity Events", date: "2024-25", icon: Mic },
    { title: "Mentor", issuer: "CTF & Security Training", date: "2024-25", icon: Users }
];

export default function Achievements() {
    return (
        <div className="h-full w-full p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-primary/20">
            <h1 className="text-3xl font-bold text-cyber-primary tracking-tighter mb-8 border-b border-cyber-primary/30 pb-4">
                AWARDS_DB
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {AWARDS.map((award, i) => (
                    <div key={i} className="bg-cyber-bg-light/30 border border-cyber-primary/20 p-6 flex flex-col items-center text-center gap-4 hover:border-cyber-primary/60 transition-colors group relative overflow-hidden">
                        <div className="w-16 h-16 bg-cyber-bg-dark rounded-full flex items-center justify-center border border-cyber-primary/30 group-hover:scale-110 transition-transform z-10">
                            <award.icon size={32} className="text-cyber-secondary" />
                        </div>

                        <div className="z-10">
                            <h3 className="text-lg font-bold text-cyber-text-primary mb-1">{award.title}</h3>
                            <p className="text-cyber-text-dim text-xs tracking-widest">{award.issuer}</p>
                            <p className="text-cyber-primary text-[10px] mt-2 border border-cyber-primary/20 px-2 py-0.5 inline-block">{award.date}</p>
                        </div>

                        {/* Scanline bg */}
                        <div className="absolute inset-0 bg-cyber-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                ))}
            </div>
        </div>
    )
}
