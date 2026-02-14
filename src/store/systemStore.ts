import { create } from 'zustand';

export interface SystemState {
    isMenuOpen: boolean;
    activeModule: string | null;
    terminalHistory: string[];

    // Actions
    toggleMenu: () => void;
    setActiveModule: (module: string | null) => void;
    addHistory: (entry: string) => void;
    clearHistory: () => void;
}

export const useSystemStore = create<SystemState>((set) => ({
    isMenuOpen: true, // Default open on desktop
    activeModule: null, // Start with terminal only
    terminalHistory: [
        "Initializing SONI_SECURE_OS v4.0...",
        "System Integrity Check: PASS",
        "Network Connection: ESTABLISHED",
        "Welcome, User. Type 'help' to begin."
    ],

    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    setActiveModule: (module) => set({ activeModule: module }),
    addHistory: (entry) => set((state) => ({ terminalHistory: [...state.terminalHistory, entry] })),
    clearHistory: () => set({ terminalHistory: [] }),
}));
