import MainLayout from './components/layout/MainLayout';
import Terminal from './components/terminal/Terminal';
import About from './components/modules/About';
import Skills from './components/modules/Skills';
import Projects from './components/modules/Projects';
import Experience from './components/modules/Experience';
import Contact from './components/modules/Contact';
import Achievements from './components/modules/Achievements';
import Certifications from './components/modules/Certifications';
import Gallery from './components/modules/Gallery';
import GoPwnIt from './components/modules/GoPwnIt';
import { useSystemStore } from './store/systemStore';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
    const { activeModule } = useSystemStore();

    return (
        <MainLayout>
            <div className="relative w-full h-full flex flex-col gap-4">

                {/* Main Terminal (Desktop) */}
                <div className={`transition-all duration-500 ease-in-out ${activeModule ? 'h-[40%] opacity-50 blur-[1px] pointer-events-none' : 'h-full opacity-100'}`}>
                    <Terminal />
                </div>

                {/* Module Overlay */}
                <AnimatePresence>
                    {activeModule && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 z-20 p-4 pt-10 md:pt-4"
                        >
                            <div className="h-full w-full bg-cyber-bg-light/95 backdrop-blur-xl border border-cyber-primary/30 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden relative">
                                {activeModule === 'about' && <About />}
                                {activeModule === 'skills' && <Skills />}
                                {activeModule === 'projects' && <Projects />}
                                {activeModule === 'experience' && <Experience />}
                                {activeModule === 'certifications' && <Certifications />}
                                {activeModule === 'achievements' && <Achievements />}
                                {activeModule === 'gallery' && <Gallery />}
                                {activeModule === 'gopwnit' && <GoPwnIt />}
                                {activeModule === 'contact' && <Contact />}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </MainLayout>
    )
}

export default App
