import { useState, useEffect } from 'react';
import { Wifi, Activity, Battery, Lock } from 'lucide-react';

export default function SystemBar() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="h-12 bg-cyber-bg-light/80 backdrop-blur-md border-b border-cyber-primary/20 flex items-center justify-between px-6 select-none z-50 relative">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-cyber-primary animate-pulse">
                    <Lock size={16} />
                    <span className="font-bold tracking-wider text-sm">whoami://abhishek</span>
                </div>
                <div className="h-4 w-[1px] bg-cyber-primary/30" />
                <span className="text-xs text-cyber-text-dim">v4.0.1_STABLE</span>
            </div>

            <div className="flex items-center gap-6 text-cyber-text-dim text-xs">
                <div className="flex items-center gap-2">
                    <Activity size={14} className="text-cyber-secondary" />
                    <span>sys_active</span>
                </div>
                <div className="flex items-center gap-2">
                    <Wifi size={14} className="text-cyber-primary" />
                    <span>net_secure</span>
                </div>
                <div className="flex items-center gap-2">
                    <Battery size={14} className="text-cyber-primary" />
                    <span>100%</span>
                </div>
                <div className="text-cyber-text-primary px-3 py-1 bg-cyber-bg-dark border border-cyber-primary/30 rounded text-sm font-mono">
                    {time.toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
}
