import { Wifi, ShieldAlert, Activity } from 'lucide-react';
import QuickLinks from './QuickLinks';

export default function InfoPanel() {
    return (
        <div className="w-72 h-full bg-cyber-bg-light/50 backdrop-blur-sm border-l border-cyber-primary/20 flex flex-col p-4 gap-4">

            {/* System Status Widget */}
            <div className="glass-panel p-4 rounded-md">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-cyber-text-dim flex items-center gap-2">
                        <Activity size={12} className="text-cyber-alert animate-pulse" /> SYSTEM STATUS
                    </span>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                        <span>CPU LOAD</span>
                        <span className="text-cyber-primary">12%</span>
                    </div>
                    <div className="h-1 bg-cyber-bg-dark rounded-full overflow-hidden">
                        <div className="h-full bg-cyber-primary w-[12%] animate-pulse" />
                    </div>

                    <div className="flex justify-between text-xs">
                        <span>MEMORY</span>
                        <span className="text-cyber-secondary">48%</span>
                    </div>
                    <div className="h-1 bg-cyber-bg-dark rounded-full overflow-hidden">
                        <div className="h-full bg-cyber-secondary w-[48%]" />
                    </div>
                </div>
            </div>

            {/* Network Widget */}
            <div className="glass-panel p-4 rounded-md">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-cyber-text-dim flex items-center gap-2">
                        <Wifi size={12} className="text-cyber-primary" /> NETWORK
                    </span>
                    <span className="text-[10px] text-cyber-text-dim">SECURE</span>
                </div>
                <div className="h-16 flex items-end justify-between gap-1 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 bg-cyber-primary/50 hover:bg-cyber-primary transition-colors"
                            style={{ height: `${Math.random() * 100}%` }}
                        />
                    ))}
                </div>
            </div>

            {/* Quick Links Widget */}
            <QuickLinks />

            {/* Threat Monitor */}
            <div className="glass-panel p-4 rounded-md flex-1">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-cyber-text-dim flex items-center gap-2">
                        <ShieldAlert size={12} className="text-cyber-error" /> THREAT MONITOR
                    </span>
                </div>
                <div className="h-full overflow-hidden text-[10px] font-mono space-y-1 text-cyber-text-dim">
                    <div className="text-cyber-error">&gt; DETECTED PORT SCAN: IP 192.168.X.X</div>
                    <div className="text-cyber-primary">&gt; FIREWALL BLOCKED CONNECTION</div>
                    <div className="text-cyber-text-dim">&gt; SYSTEM INTEGRITY VERIFIED</div>
                    <div className="text-cyber-text-dim">&gt; DAEMON STARTED: PID 4590</div>
                    <div className="text-cyber-text-dim">&gt; UPDATING SECURITY DEFINITIONS...</div>
                </div>
            </div>

        </div>
    );
}
