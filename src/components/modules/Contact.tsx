import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    return (
        <div className="h-full w-full p-8 flex items-center justify-center overflow-y-auto">
            <div className="w-full max-w-2xl">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="border-b border-cyber-primary/30 pb-4">
                        <h1 className="text-3xl font-bold text-cyber-primary tracking-tighter">SECURE_UPLINK</h1>
                        <p className="text-cyber-text-dim text-xs mt-2">DIRECT COMMUNICATION CHANNELS ESTABLISHED</p>
                    </div>

                    <div className="space-y-4">
                        <ContactMethod icon={Mail} label="ENCRYPTED_MAIL" value="sharmay728@gmail.com" to="mailto:sharmay728@gmail.com" />
                        <ContactMethod icon={Phone} label="VOICE_LINE" value="+91 86301 73936" to="tel:+918630173936" />
                        <ContactMethod icon={Linkedin} label="NEURAL_NET" value="linkedin.com/in/abhishek-soni" to="https://www.linkedin.com/in/abhishek-soni-89b518250/" />
                        <ContactMethod icon={Github} label="CODE_REPO" value="github.com/SavageHell8008" to="https://github.com/SavageHell8008" />
                    </div>

                    <div className="p-4 bg-cyber-primary/5 border border-cyber-primary/20 rounded text-xs font-mono text-cyber-text-dim leading-relaxed">
                        &gt; PROTOCOL: SECURE<br />
                        &gt; ENCRYPTION: AES-256<br />
                        &gt; LATENCY: 12ms<br />
                        &gt; STATUS: LISTENING...
                    </div>
                </div>

            </div>
        </div>
    );
}

function ContactMethod({ icon: Icon, label, value, to }: { icon: any, label: string, value: string, to: string }) {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-cyber-bg-light/30 border border-cyber-primary/10 rounded hover:bg-cyber-primary/10 hover:border-cyber-primary/50 transition-all group">
            <div className="w-10 h-10 rounded-full bg-cyber-bg-dark flex items-center justify-center border border-cyber-primary/20 group-hover:scale-110 transition-transform">
                <Icon size={20} className="text-cyber-primary" />
            </div>
            <div>
                <div className="text-[10px] text-cyber-text-dim tracking-widest font-bold mb-0.5">{label}</div>
                <div className="text-cyber-text-primary font-mono text-sm group-hover:text-cyber-secondary transition-colors">{value}</div>
            </div>
        </a>
    )
}
