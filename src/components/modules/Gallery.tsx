import { Image, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ModuleCloseButton from '../common/ModuleCloseButton';

const GALLERY_IMAGES = [
    {
        id: 1,
        src: '/gallery/event (1).JPG',
        title: 'Cybersecurity Event',
        date: '2024',
        description: 'Community engagement and networking'
    },
    {
        id: 2,
        src: '/gallery/event (2).JPG',
        title: 'Technical Workshop',
        date: '2024',
        description: 'Hands-on security training session'
    },
    {
        id: 3,
        src: '/gallery/event (3).JPG',
        title: 'CTF Competition',
        date: '2024',
        description: 'Capture the flag challenge event'
    },
    {
        id: 4,
        src: '/gallery/event (4).jpg',
        title: 'Conference Talk',
        date: '2024',
        description: 'Speaking engagement on cybersecurity'
    }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (id: number) => setSelectedImage(id);
    const closeLightbox = () => setSelectedImage(null);

    const goToNext = () => {
        if (selectedImage !== null) {
            const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedImage);
            const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
            setSelectedImage(GALLERY_IMAGES[nextIndex].id);
        }
    };

    const goToPrev = () => {
        if (selectedImage !== null) {
            const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedImage);
            const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
            setSelectedImage(GALLERY_IMAGES[prevIndex].id);
        }
    };

    const selectedImg = GALLERY_IMAGES.find(img => img.id === selectedImage);

    return (
        <div className="h-full w-full p-8 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-cyber-primary/20">
            <ModuleCloseButton />
            {/* Header */}
            <div className="border-b border-cyber-primary/30 pb-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Image className="text-cyber-primary" size={32} />
                    <h1 className="text-4xl font-bold text-cyber-primary tracking-tighter">EVENT_GALLERY</h1>
                </div>
                <p className="text-cyber-text-dim text-sm">MOMENTS FROM CYBERSECURITY EVENTS & COMPETITIONS</p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {GALLERY_IMAGES.map((image) => (
                    <div
                        key={image.id}
                        onClick={() => openLightbox(image.id)}
                        className="group relative cursor-pointer"
                    >
                        {/* Outer Frame with Glow */}
                        <div className="relative p-2 bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20 rounded-lg hover:from-cyber-primary/40 hover:to-cyber-secondary/40 transition-all duration-300">

                            {/* Inner Border */}
                            <div className="relative border-2 border-cyber-primary/30 group-hover:border-cyber-primary/60 transition-all rounded overflow-hidden">

                                {/* Image Container */}
                                <div className="aspect-video bg-cyber-bg-dark overflow-hidden relative">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            // Fallback if image fails to load
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = '<div class="absolute inset-0 bg-gradient-to-br from-cyber-primary/20 via-cyber-bg-dark to-cyber-secondary/20 flex items-center justify-center"><svg class="text-cyber-primary/30" width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
                                        }}
                                    />

                                    {/* Dark Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Text Overlay */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <h3 className="text-cyber-primary font-bold text-lg mb-2 drop-shadow-[0_0_10px_rgba(74,246,38,0.8)]">{image.title}</h3>
                                        <p className="text-cyber-text-primary text-xs mb-1">{image.description}</p>
                                        <span className="text-cyber-secondary text-xs font-mono">{image.date}</span>
                                    </div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Outer Glow Effect */}
                            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl bg-cyber-primary/20 -z-10" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage !== null && selectedImg && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 w-12 h-12 bg-cyber-bg-dark border border-cyber-primary/30 hover:border-cyber-primary flex items-center justify-center transition-all z-10"
                    >
                        <X className="text-cyber-primary" size={24} />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                        className="absolute left-4 w-12 h-12 bg-cyber-bg-dark border border-cyber-primary/30 hover:border-cyber-primary flex items-center justify-center transition-all"
                    >
                        <ChevronLeft className="text-cyber-primary" size={24} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                        className="absolute right-4 w-12 h-12 bg-cyber-bg-dark border border-cyber-primary/30 hover:border-cyber-primary flex items-center justify-center transition-all"
                    >
                        <ChevronRight className="text-cyber-primary" size={24} />
                    </button>

                    {/* Image Container */}
                    <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-cyber-bg-light border-2 border-cyber-primary/40 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(74,246,38,0.3)]">
                            {/* Image with Frame */}
                            <div className="relative p-4 bg-gradient-to-br from-cyber-primary/10 to-cyber-secondary/10">
                                <div className="border-2 border-cyber-primary/30 rounded overflow-hidden">
                                    <img
                                        src={selectedImg.src}
                                        alt={selectedImg.title}
                                        className="w-full h-auto max-h-[70vh] object-contain bg-cyber-bg-dark"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = '<div class="aspect-video bg-gradient-to-br from-cyber-primary/20 via-cyber-bg-dark to-cyber-secondary/20 flex items-center justify-center"><svg class="text-cyber-primary/30" width="128" height="128" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Image Info */}
                            <div className="p-6 border-t-2 border-cyber-primary/20 bg-cyber-bg-dark/50">
                                <h2 className="text-2xl font-bold text-cyber-primary mb-2">{selectedImg.title}</h2>
                                <p className="text-cyber-text-primary text-sm mb-2">{selectedImg.description}</p>
                                <span className="text-cyber-secondary text-xs font-mono">{selectedImg.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
