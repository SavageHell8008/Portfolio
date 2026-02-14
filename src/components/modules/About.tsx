import { useRef, useEffect, useState } from 'react';
import { User, ShieldCheck, Hash, FileCode, Download } from 'lucide-react';

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.opacity = '1';
            containerRef.current.style.transform = 'translateY(0)';
        }
    }, []);

    return (
        <div ref={containerRef} className="opacity-0 translate-y-4 transition-all duration-500 h-full w-full flex gap-6 p-4">

            {/* Profile Image & Scan */}
            <div className="w-1/3 h-full relative group">
                <div className="absolute inset-0 bg-cyber-primary/10 border border-cyber-primary/30 rounded-lg overflow-hidden">
                    {!imgError ? (
                        <img
                            src="/me.jpg"
                            alt="Abhishek Soni"
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-cyber-primary/20">
                            <User size={120} />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-primary/20 to-transparent h-[20%] w-full animate-[scan_2s_linear_infinite] pointer-events-none" />

                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-primary" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-primary" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-primary" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-primary" />
                </div>
            </div>

            {/* Dossier Info */}
            <div className="flex-1 flex flex-col gap-4">
                <div className="border-b border-cyber-primary/30 pb-2 mb-2 flex justify-between items-end">
                    <h1 className="text-3xl font-bold text-cyber-primary tracking-tighter">IDENTITY_DOSSIER</h1>
                    <span className="text-cyber-text-dim text-xs">REF: 8A7-X29</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <InfoRow label="OPERATIVE NAME" value="ABHISHEK SONI" icon={User} />
                    <InfoRow label="CLEARANCE" value="LEVEL 5 (ADMIN)" icon={ShieldCheck} />
                    <InfoRow label="ROLE" value="FOUNDER / SECURITY ANALYST" icon={Hash} />
                    <InfoRow label="SPECIALIZATION" value="IOT / AIML / DATA" icon={FileCode} />
                </div>

                <div className="flex-1 bg-cyber-bg-dark/50 border border-cyber-primary/10 rounded p-4 text-cyber-text-dim font-mono text-sm leading-relaxed overflow-y-auto mt-4 scrollbar-thin scrollbar-thumb-cyber-primary/20">
                    <p className="mb-4">
                        &gt; B.Tech CSE (IOT, AIML)<br />
                        &gt; GLA University, Mathura (2022-2026)<br />
                        &gt; Specialization in Data Analytics & Machine Learning.
                    </p>
                    <p>
                        &gt; CERTIFICATIONS<br />
                        &gt; CCNA - Cisco Certified Network Associate<br />
                        &gt; CyberSecurity Essentials - Cisco<br />
                        &gt; Machine Learning for IIoT - Elixir Strat. Mgmt.
                    </p>
                </div>

                {/* Download Resume Button */}
                <a
                    href="/resume Abhishek.pdf"
                    download="Abhishek_Soni_Resume.pdf"
                    className="mt-4 w-full bg-cyber-primary/10 border border-cyber-primary hover:bg-cyber-primary hover:text-black transition-all py-3 px-6 flex items-center justify-center gap-3 font-bold tracking-widest group"
                >
                    <Download size={20} className="group-hover:animate-bounce" />
                    DOWNLOAD_RESUME.enc
                </a>
            </div>
        </div>
    );
}

function InfoRow({ label, value, icon: Icon }: { label: string, value: string, icon: any }) {
    return (
        <div className="bg-cyber-bg-light/50 border border-cyber-primary/10 p-3 rounded hover:border-cyber-primary/50 transition-colors group">
            <div className="text-cyber-text-dim text-[10px] tracking-widest mb-1 flex items-center gap-2">
                <Icon size={10} /> {label}
            </div>
            <div className="text-cyber-text-primary text-xl font-bold tracking-tighter group-hover:text-cyber-secondary transition-colors">
                {value}
            </div>
        </div>
    )
}
