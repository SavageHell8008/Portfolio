import QuickLinks from './QuickLinks';

export default function InfoPanel() {
    return (
        <div className="w-72 h-full bg-cyber-bg-light/50 backdrop-blur-sm border-l border-cyber-primary/20 flex flex-col p-4 gap-4">
            {/* Quick Links Widget */}
            <QuickLinks />
        </div>
    );
}
