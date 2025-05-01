
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/gentle-piano.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    setAudioElement(audio);

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioElement) {
      if (isMusicPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="page-container">
      <header className="py-6 md:py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-medium text-primary">
            Dear Kash
          </h1>
          <div className="mt-2 text-sm text-primary/70 italic">Thoughts from the heart</div>
        </div>
      </header>
      
      <Navigation />
      
      <main className="mt-6">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      
      <div className="fixed bottom-6 right-6">
        <Button
          onClick={toggleMusic}
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 bg-white/80 shadow-sm border-gentle-brown/20 hover:bg-white"
        >
          {isMusicPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </Button>
      </div>
      
      <footer className="mt-12 text-center text-xs text-primary/60 py-4">
        <div className="max-w-2xl mx-auto">
          For Kashish, with love and respect. Always.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
