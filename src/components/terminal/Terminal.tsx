import { useState, useEffect, useRef } from 'react';
import { useSystemStore } from '../../store/systemStore';
import { clsx } from 'clsx';
import { Send } from 'lucide-react';

export default function Terminal() {
    const { terminalHistory, addHistory, setActiveModule } = useSystemStore();
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [terminalHistory]);

    // Focus input on click
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.trim().toLowerCase();
        addHistory(`abhishek@root:~# ${input}`);

        // Command Logic
        switch (cmd) {
            case 'help':
                addHistory("AVAILABLE COMMANDS:");
                addHistory("  about     - View Identity Dossier");
                addHistory("  skills    - View Capabilities");
                addHistory("  projects  - Access Mission Files");
                addHistory("  exp       - View Experience Log");
                addHistory("  contact   - Secure Transmission");
                addHistory("  gopwnit   - View GoPwnIt Platform");
                addHistory("  github    - View Code Repositories");
                addHistory("  linkedin  - Professional Network");
                addHistory("  email     - Send Mail Packet");
                addHistory("  resume    - Download Resume");
                addHistory("  whoami    - Display User Info");
                addHistory("  neofetch  - System Information");
                addHistory("  matrix    - Follow the White Rabbit");
                addHistory("  hack      - Try It ;)");
                addHistory("  clear     - Clear Terminal");
                break;
            case 'clear':
                useSystemStore.getState().clearHistory();
                break;
            case 'about':
            case 'whoami':
                setActiveModule('about');
                addHistory("Loading IDENTITY_DOSSIER...");
                break;
            case 'skills':
                setActiveModule('skills');
                addHistory("Accessing CAPABILITY_MATRIX...");
                break;
            case 'projects':
                setActiveModule('projects');
                addHistory("Decrypting MISSION_FILES...");
                break;
            case 'exp':
            case 'experience':
                setActiveModule('experience');
                addHistory("Retrieving OPERATION_LOG...");
                break;
            case 'contact':
                setActiveModule('contact');
                addHistory("Initializing SECURE_CHANNEL...");
                break;
            case 'achievements':
                setActiveModule('achievements');
                addHistory("Verifying AWARDS_DB...");
                break;
            case 'gopwnit':
                setActiveModule('gopwnit');
                addHistory("Loading GoPwnIt Platform Info...");
                break;
            case 'email':
            case 'mail':
                addHistory("Initiating MAIL_PROTOCOL: sharmay728@gmail.com");
                window.location.href = 'mailto:sharmay728@gmail.com';
                break;
            case 'github':
            case 'git':
                addHistory("Accessing REPO_DB: SavageHell8008...");
                window.open('https://github.com/SavageHell8008', '_blank');
                break;
            case 'resume':
            case 'cv':
                addHistory("Downloading RESUME_FILE...");
                const link = document.createElement('a');
                link.href = '/resume Abhishek.pdf';
                link.download = 'Abhishek_Soni_Resume.pdf';
                link.click();
                break;
            case 'linkedin':
                addHistory("Connecting to NEURAL_NET: Abhishek Soni...");
                window.open('https://www.linkedin.com/in/abhishek-soni-89b518250/', '_blank');
                break;
            case 'whoami':
                addHistory("╔══════════════════════════════════════╗");
                addHistory("║  ABHISHEK SONI                       ║");
                addHistory("║  Founder @ GoPwnIt                   ║");
                addHistory("║  Security Analyst | CTF Enthusiast   ║");
                addHistory("║  Top 15% Global - TryHackMe          ║");
                addHistory("╚══════════════════════════════════════╝");
                break;
            case 'neofetch':
                addHistory("     ___           abhishek@root");
                addHistory("    (.. |          ─────────────────────");
                addHistory("    (<> |          OS: whoami://Abhishek v4.0.1");
                addHistory("   / __  \\         Host: GLA University");
                addHistory("  ( /  \\ /|        Kernel: B.Tech CSE (IOT/AIML)");
                addHistory(" _/\\ __)/_)        Uptime: Since 2022");
                addHistory(" \\/-____\\/         Shell: CyberIntel Terminal");
                addHistory("                   Skills: Cybersecurity, AI, Design");
                addHistory("                   Certifications: CCNA, CyberSec");
                addHistory("                   GitHub: SavageHell8008");
                break;
            case 'matrix':
                addHistory("Wake up, Neo...");
                addHistory("The Matrix has you...");
                addHistory("Follow the white rabbit.");
                addHistory("Knock, knock, Neo.");
                setTimeout(() => {
                    addHistory("🐇 → https://gopwnit.com");
                }, 500);
                break;
            case 'hack':
            case 'hacker':
                addHistory("[INITIALIZING HACK SEQUENCE...]");
                addHistory("[████████████████] 100%");
                addHistory("[ACCESS GRANTED]");
                addHistory("Just kidding! Type 'help' for real commands 😄");
                break;
            default:
                addHistory(`ERROR: Command '${cmd}' not recognized. Type 'help'.`);
        }

        setCommandHistory(prev => [...prev, input.trim()]);
        setHistoryIndex(-1);
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length === 0) return;
            const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setInput(commandHistory[newIndex]);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex === -1) return;
            const newIndex = historyIndex + 1;
            if (newIndex >= commandHistory.length) {
                setHistoryIndex(-1);
                setInput('');
            } else {
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        }
    };

    return (
        <div className="flex-1 bg-cyber-bg-dark/90 rounded-lg border border-cyber-primary/30 p-4 font-mono text-sm overflow-hidden flex flex-col shadow-[0_0_30px_rgba(74,246,38,0.1)] min-h-[300px] backdrop-blur-md relative group" onClick={() => inputRef.current?.focus()}>
            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyber-primary/5 to-transparent h-[20%] w-full animate-[scan_3s_linear_infinite] opacity-50" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-primary/50" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-primary/50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-primary/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-primary/50" />

            {/* Title Bar */}
            <div className="flex justify-between items-center mb-4 border-b border-cyber-primary/20 pb-2 relative z-10">
                <span className="text-cyber-text-dim text-xs">secure-shell // bash</span>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyber-error/20 border border-cyber-error/50" />
                    <div className="w-3 h-3 rounded-full bg-cyber-alert/20 border border-cyber-alert/50" />
                    <div className="w-3 h-3 rounded-full bg-cyber-primary/20 border border-cyber-primary/50" />
                </div>
            </div>

            {/* History */}
            <div className="flex-1 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-cyber-primary/20 scrollbar-track-transparent pr-2 relative z-10">
                {terminalHistory.map((line, i) => (
                    <div key={i} className={clsx(
                        "break-words leading-relaxed",
                        line.startsWith("ERROR") ? "text-cyber-error font-bold" :
                            line.startsWith("admin@") ? "text-cyber-secondary" :
                                line.startsWith("AVAILABLE COMMANDS") || line.startsWith("╔") || line.startsWith("║") || line.startsWith("╚") ? "text-cyber-primary" :
                                    line.includes("→") || line.includes("🐇") ? "text-cyber-secondary animate-pulse" :
                                        "text-cyber-text-primary"
                    )}>
                        {line}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Input Line */}
            <form onSubmit={handleCommand} className="mt-2 flex items-center gap-2 border-t border-cyber-primary/30 pt-2 relative z-10 bg-cyber-bg-dark/50 -mx-4 px-4 -mb-4 pb-4">
                <span className="text-cyber-primary font-bold drop-shadow-[0_0_5px_rgba(74,246,38,0.5)]">abhishek@root:~#</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-cyber-text-primary placeholder-cyber-text-dim/30 hover:cursor-text caret-cyber-primary"
                    autoFocus
                    spellCheck={false}
                />
                <button type="submit" className="text-cyber-primary hover:text-cyber-secondary transition-colors">
                    <Send size={16} />
                </button>
            </form>
        </div>
    );
}
