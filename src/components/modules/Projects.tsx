import { useState } from 'react';
import { Folder, FileText, Lock, ExternalLink } from 'lucide-react';
import { clsx } from 'clsx';
import ModuleCloseButton from '../common/ModuleCloseButton';

const PROJECTS = [
    {
        id: 'SEC-TOOL-01',
        name: 'Mac_Spoofer',
        type: 'PRIVACY_TOOL',
        status: 'PUBLIC',
        desc: 'A powerful Python-based command-line utility designed to spoof MAC addresses on Linux systems, enhancing digital anonymity and privacy. This tool automates the process of changing network interface MAC addresses, providing users with the ability to mask their hardware identity. Features include automatic interface detection, random MAC generation, validation checks, and restoration capabilities. Built with security researchers and privacy-conscious users in mind, it includes error handling, root privilege verification, and support for multiple network interfaces. The tool is particularly useful for penetration testing, privacy protection, and network security assessments.',
        tech: ['Python', 'Linux', 'Networking'],
        url: 'https://github.com/SavageHell8008/MACSpoofer'
    },
    {
        id: 'AI-BOT-02',
        name: 'Law_Bot_AI',
        type: 'LEGAL_ASSISTANT',
        status: 'PROTOTYPE',
        desc: 'An intelligent AI-powered legal assistant chatbot leveraging LangChain and OpenAI GPT models to provide accessible legal guidance and document navigation. This prototype system uses Retrieval-Augmented Generation (RAG) to process legal documents, statutes, and case law, enabling users to ask natural language questions and receive contextually relevant legal information. Features include document parsing, semantic search across legal databases, citation tracking, and conversational memory for multi-turn interactions. Designed to democratize legal knowledge, the bot helps users understand complex legal terminology, navigate regulatory frameworks, and identify relevant precedents. Built with Python, it demonstrates the potential of AI in legal tech while maintaining transparency about its limitations as a supplementary tool, not a replacement for professional legal counsel.',
        tech: ['LangChain', 'OpenAI', 'Python'],
        url: 'https://github.com/SavageHell8008/Law-Bot'
    },
    {
        id: 'SYS-OS-03',
        name: 'Soni_Secure_OS',
        type: 'WEB_PORTFOLIO',
        status: 'LIVE',
        desc: 'A cutting-edge interactive portfolio designed to simulate a secure operating system environment, showcasing cybersecurity expertise through an immersive terminal-based interface. Built with React, TypeScript, and Tailwind CSS, this project features a fully functional command-line terminal, modular navigation system, and glassmorphism UI with neon cyber aesthetics. The portfolio includes dynamic modules for skills, projects, experience, achievements, and contact information, all accessible through both GUI navigation and terminal commands. Technical highlights include Zustand state management, Framer Motion animations, custom scrollbar styling, and responsive design optimized for both desktop and mobile. The interface incorporates CRT scan effects, glowing borders, and real-time system monitoring widgets to create an authentic hacker workstation experience. This project demonstrates proficiency in modern web development, UI/UX design, and creative technical storytelling.',
        tech: ['React', 'TypeScript', 'Tailwind'],
        url: 'https://github.com/SavageHell8008/Portfolio'
    }
];

export default function Projects() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="h-full w-full flex gap-4 p-4">
            <ModuleCloseButton />
            {/* File Explorer List */}
            <div className="w-1/3 border-r border-cyber-primary/20 pr-4 flex flex-col gap-2">
                <div className="text-cyber-text-dim text-xs tracking-widest mb-4 border-b border-cyber-primary/10 pb-2">
                    MISSIONFILES://ROOT/PROJECTS
                </div>

                {PROJECTS.map(project => (
                    <button
                        key={project.id}
                        onClick={() => setSelected(project.id)}
                        className={clsx(
                            "w-full text-left p-3 border border-transparent hover:bg-cyber-primary/5 hover:border-cyber-primary/30 transition-all font-mono text-sm flex items-center justify-between group",
                            selected === project.id ? "bg-cyber-primary/10 border-cyber-primary text-cyber-primary" : "text-cyber-text-dim"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            {selected === project.id ? <Folder className="text-cyber-secondary" size={16} /> : <FileText size={16} />}
                            <span>{project.name}</span>
                        </div>
                        {project.status === 'CLASSIFIED' && <Lock size={12} className="text-cyber-alert" />}
                    </button>
                ))}
            </div>

            {/* Details Panel */}
            <div className="flex-1 bg-cyber-bg-dark/50 border border-cyber-primary/10 p-6 relative overflow-hidden">
                {selected ? (
                    <div className="animate-fade-in h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-cyber-primary mb-1">{PROJECTS.find(p => p.id === selected)?.name}</h1>
                                <div className="flex gap-2">
                                    <span className="text-[10px] bg-cyber-secondary/10 text-cyber-secondary px-2 py-0.5 rounded border border-cyber-secondary/30">
                                        {PROJECTS.find(p => p.id === selected)?.type}
                                    </span>
                                    <span className="text-[10px] bg-cyber-bg-light border border-cyber-text-dim/30 text-cyber-text-dim px-2 py-0.5 rounded">
                                        ID: {selected}
                                    </span>
                                </div>
                            </div>
                            <a
                                href={PROJECTS.find(p => p.id === selected)?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyber-primary hover:text-white cursor-pointer transition-colors"
                            >
                                <ExternalLink size={20} />
                            </a>
                        </div>

                        <p className="text-cyber-text-primary mb-6 font-mono leading-relaxed border-l-2 border-cyber-primary/30 pl-4">
                            {PROJECTS.find(p => p.id === selected)?.desc}
                        </p>

                        <div className="mt-auto">
                            <h3 className="text-cyber-text-dim text-xs tracking-widest mb-3">TECH_STACK_DETECTED:</h3>
                            <div className="flex gap-2">
                                {PROJECTS.find(p => p.id === selected)?.tech.map(t => (
                                    <span key={t} className="text-xs font-bold text-cyber-text-primary px-3 py-1 bg-cyber-bg-light border border-cyber-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute right-0 bottom-0 text-[100px] text-cyber-primary/5 font-bold pointer-events-none select-none">
                            {selected}
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex items-center justify-center text-cyber-text-dim/30 flex-col gap-4">
                        <Folder size={64} strokeWidth={1} />
                        <p className="tracking-widest text-sm">SELECT_FILE_TO_DECRYPT</p>
                    </div>
                )}
            </div>
        </div>
    );
}
