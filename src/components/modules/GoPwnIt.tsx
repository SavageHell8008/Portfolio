import { ExternalLink, Shield, Code, Users, Zap, Target, Trophy, Lock, Activity, Server, Brain, Rocket } from 'lucide-react';
import ModuleCloseButton from '../common/ModuleCloseButton';

export default function GoPwnIt() {
    const handleRedirect = () => {
        window.open('https://gopwnit.com', '_blank');
    };

    return (
        <div className="h-full w-full p-8 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-cyber-primary/20">
            <ModuleCloseButton />
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="border-b border-cyber-primary/30 pb-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-4xl font-bold text-cyber-primary tracking-tighter mb-2">GoPwnIt</h1>
                            <p className="text-cyber-secondary text-sm font-bold tracking-widest">MODERN CTF INFRASTRUCTURE PLATFORM</p>
                        </div>
                        <button
                            onClick={handleRedirect}
                            className="flex items-center gap-2 px-6 py-3 bg-cyber-primary/10 border border-cyber-primary hover:bg-cyber-primary hover:text-black transition-all font-bold tracking-widest group"
                        >
                            VISIT PLATFORM
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* About */}
                <div className="mb-8 p-6 bg-cyber-bg-light/30 border border-cyber-primary/20 rounded-lg">
                    <div className="flex items-start gap-3 mb-4">
                        <Brain className="text-cyber-secondary flex-shrink-0 mt-1" size={24} />
                        <h2 className="text-2xl font-bold text-cyber-secondary">About GoPwnIt</h2>
                    </div>
                    <p className="text-cyber-text-primary leading-relaxed font-mono text-sm mb-3">
                        GoPwnIt is a modern Capture The Flag (CTF) infrastructure platform built to host, manage, and scale
                        cybersecurity competitions with precision, security, and performance.
                    </p>
                    <p className="text-cyber-text-dim leading-relaxed text-sm">
                        It provides a fully controlled environment where organizers can deploy challenges, manage participants,
                        monitor activity, and run professional-grade CTF events without infrastructure complexity. Designed for
                        universities, tech communities, companies, and cybersecurity events.
                    </p>
                </div>

                {/* What Makes Different */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6 border-b border-cyber-primary/20 pb-2">
                        <Rocket className="text-cyber-primary" size={24} />
                        <h2 className="text-2xl font-bold text-cyber-primary">What Makes GoPwnIt Different</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            'Built for real-world CTF operations',
                            'High concurrency optimization',
                            'Fully managed hosting',
                            'Secure challenge deployment',
                            'Real-time monitoring',
                            'Professional reliability',
                            'Technical support included',
                            'Designed by practitioners'
                        ].map((item, i) => (
                            <div key={i} className="px-3 py-2 bg-cyber-bg-dark border border-cyber-primary/30 text-cyber-text-primary text-xs font-mono hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all">
                                ✓ {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Capabilities */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6 border-b border-cyber-primary/20 pb-2">
                        <Zap className="text-cyber-primary" size={24} />
                        <h2 className="text-2xl font-bold text-cyber-primary">Core Platform Capabilities</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CapabilityCard
                            icon={Trophy}
                            title="CTF Event Hosting"
                            description="Complete infrastructure to run online or hybrid competitions with stable performance and automated management."
                        />
                        <CapabilityCard
                            icon={Code}
                            title="Challenge Deployment"
                            description="Deploy web exploitation, cryptography, reverse engineering, forensics, binary exploitation, OSINT, and custom challenges in isolated environments."
                        />
                        <CapabilityCard
                            icon={Activity}
                            title="Real-Time Scoreboard"
                            description="Live ranking updates, dynamic scoring, tie-breaking logic, performance tracking, and public/private visibility options."
                        />
                        <CapabilityCard
                            icon={Users}
                            title="Participant Management"
                            description="Team registration, access control, identity tracking, activity monitoring, and submission logs."
                        />
                        <CapabilityCard
                            icon={Lock}
                            title="Secure Infrastructure"
                            description="Isolated challenge environments, anti-cheating monitoring, controlled network exposure, and activity logging."
                        />
                        <CapabilityCard
                            icon={Server}
                            title="Admin Dashboard"
                            description="Full operational visibility: active users, server health, challenge load, flag submissions, and suspicious activity alerts."
                        />
                    </div>
                </div>

                {/* Who It's For */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6 border-b border-cyber-primary/20 pb-2">
                        <Target className="text-cyber-primary" size={24} />
                        <h2 className="text-2xl font-bold text-cyber-primary">Who GoPwnIt Is For</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            'Universities hosting cybersecurity competitions',
                            'Tech fests and hackathons',
                            'Cybersecurity communities',
                            'Training programs and bootcamps',
                            'Corporate security teams',
                            'National or regional CTF events'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-cyber-bg-light/30 border border-cyber-primary/10 rounded hover:border-cyber-primary/50 transition-all">
                                <Shield className="text-cyber-secondary flex-shrink-0" size={16} />
                                <span className="text-cyber-text-primary text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose */}
                <div className="mb-8 p-6 bg-cyber-primary/5 border border-cyber-primary/30 rounded-lg">
                    <h3 className="text-xl font-bold text-cyber-primary mb-4 flex items-center gap-3">
                        <Trophy size={24} />
                        Why Organizers Choose GoPwnIt
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            'No infrastructure setup',
                            'Reduced operational overhead',
                            'Professional event management',
                            'Technical expertise support',
                            'Reliable performance',
                            'Fully customizable'
                        ].map((item, i) => (
                            <div key={i} className="text-cyber-text-primary text-sm font-mono">
                                <span className="text-cyber-secondary">▸</span> {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="p-8 bg-cyber-primary/5 border border-cyber-primary/30 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-cyber-primary mb-3">Host Your Event With GoPwnIt</h3>
                    <p className="text-cyber-text-dim mb-6 font-mono text-sm max-w-2xl mx-auto">
                        Launch your cybersecurity competition with a platform built for performance, security, and scale.
                    </p>
                    <p className="text-cyber-secondary font-bold tracking-widest mb-6 text-lg">
                        Host smarter. Compete harder. GoPwnIt.
                    </p>
                    <button
                        onClick={handleRedirect}
                        className="px-8 py-4 bg-cyber-primary text-black font-bold tracking-widest hover:bg-cyber-secondary transition-colors inline-flex items-center gap-3"
                    >
                        LAUNCH GOPWNIT
                        <ExternalLink size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function CapabilityCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="p-5 bg-cyber-bg-light/30 border border-cyber-primary/10 rounded hover:border-cyber-primary/50 transition-all group">
            <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyber-bg-dark flex items-center justify-center border border-cyber-primary/30 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon size={20} className="text-cyber-primary" />
                </div>
                <h3 className="text-lg font-bold text-cyber-text-primary group-hover:text-cyber-secondary transition-colors">{title}</h3>
            </div>
            <p className="text-cyber-text-dim text-sm leading-relaxed">{description}</p>
        </div>
    );
}
