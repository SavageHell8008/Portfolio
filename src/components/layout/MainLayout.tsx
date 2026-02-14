import type { ReactNode } from 'react';
import SystemBar from './SystemBar';
import NavPanel from './NavPanel';
import InfoPanel from './InfoPanel';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen w-screen bg-cyber-bg text-cyber-text-primary font-mono overflow-hidden flex flex-col relative">
            {/* Background Grid & Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_4px,3px_100%] animate-scanline" />
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(74, 246, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 246, 38, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            {/* Top System Bar */}
            <SystemBar />

            <div className="flex-1 flex overflow-hidden z-10 relative">
                {/* Left Navigation */}
                <NavPanel />

                {/* Main Content Area */}
                <main className="flex-1 relative p-6 overflow-hidden flex flex-col">
                    {children}
                </main>

                {/* Right Info Panel */}
                <InfoPanel />
            </div>

        </div>
    );
}
