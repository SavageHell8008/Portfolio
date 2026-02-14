import { X } from 'lucide-react';
import { useSystemStore } from '../../store/systemStore';

export default function ModuleCloseButton() {
    const setActiveModule = useSystemStore((state) => state.setActiveModule);

    const handleClose = () => {
        setActiveModule('terminal');
    };

    return (
        <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-cyber-bg-dark/80 border border-cyber-primary/30 rounded hover:bg-cyber-error hover:border-cyber-error transition-all group"
            title="Close and return to terminal"
        >
            <X size={16} className="text-cyber-primary group-hover:text-white transition-colors" />
        </button>
    );
}
