
import React, { useState, useEffect } from 'react';
import { Heart, GalleryVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Memory {
  id: number;
  title: string;
  image: string;
}

const HomePage: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("letter");

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

  const memories: Memory[] = [
    {
      id: 1,
      title: "Road Trips Together",
      image: "/lovable-uploads/c585b04d-ec6b-414a-9ce2-7c191820f907.png"
    },
    {
      id: 2,
      title: "Golden Hour Views",
      image: "/lovable-uploads/3f386413-f62e-4a8e-9e00-27f6780c15aa.png"
    },
    {
      id: 3,
      title: "Special Moments",
      image: "/lovable-uploads/1cea1c27-5d6d-4368-ad66-7f9add11e1a9.png"
    },
    {
      id: 4,
      title: "Magical Rainbows",
      image: "/lovable-uploads/977262b6-b082-458f-976b-1c4758b7fc97.png"
    },
    {
      id: 5,
      title: "Golden Temple Visit",
      image: "/lovable-uploads/e56cb35f-13d4-4586-834c-345a9ec1b420.png"
    },
    {
      id: 6,
      title: "Festival Celebrations",
      image: "/lovable-uploads/09646070-d890-421d-98bb-3655ce98e854.png"
    },
    {
      id: 7,
      title: "Home Warmth",
      image: "/lovable-uploads/4eaff987-9bac-425b-ae0b-1040ea1b648b.png"
    },
    {
      id: 8,
      title: "Tight Hugs",
      image: "/lovable-uploads/37f97211-a016-477b-a6f1-48149bf3070f.png"
    },
    {
      id: 9,
      title: "Evening Walks",
      image: "/lovable-uploads/2cec92cf-a8d2-4351-9c0a-450324c44538.png"
    },
    {
      id: 10,
      title: "You as My Guide",
      image: "/lovable-uploads/86a28104-0aca-4bb6-98a1-afb1637a9ac3.png"
    },
    {
      id: 11,
      title: "Mirror Selfies",
      image: "/lovable-uploads/43eea911-0951-4677-95d5-52535dd7901f.png"
    },
    {
      id: 12,
      title: "Stadium Adventures",
      image: "/lovable-uploads/c69ec858-9d4d-479a-a21f-9ef1cc801351.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* Header */}
      <header className="pt-10 pb-6 text-center">
        <h1 className="text-5xl font-playfair font-medium text-purple-800 animate-fade-in">
          Dear Kash
        </h1>
        <div className="mt-2 text-sm text-purple-600 italic">memories to keep</div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pb-20">
        {/* Letter Section */}
        <div className="mt-6 p-8 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm animate-fade-in">
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-800 font-lora">
            Dear Kash, I made a mistake. I can't erase that pain or undo that moment but I want you to know that I have immense respect for you. I respect your decision to leave, but I'd like to share this with you: some happy memories that you can keep.
          </p>

          {/* Photo Gallery */}
          <div className="mt-10">
            <h2 className="text-2xl font-playfair mb-6 text-center text-purple-700 flex items-center justify-center gap-2">
              <GalleryVertical className="h-6 w-6" /> 
              <span>Our Memories</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {memories.map((memory) => (
                <div key={memory.id} className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="overflow-hidden rounded-lg shadow-sm bg-white h-full flex flex-col">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={memory.image} 
                        alt={memory.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                    </div>
                    <div className="p-4 flex-grow bg-gradient-to-r from-purple-50 to-pink-50">
                      <h3 className="font-medium text-purple-800 font-playfair text-lg">
                        {memory.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-12 pt-8 border-t border-purple-100 text-center">
            <p className="text-lg italic text-purple-800 mb-3">
              I love you Kash, always your baby.
            </p>
            <p className="text-md text-purple-700">
              You have been a boyfriend, a sibling, a parent, and my bestfriend. You'll always remain a best friend :)
            </p>
            <div className="mt-4 animate-pulse flex justify-center">
              <Heart className="text-pink-500 h-8 w-8" fill="#ec4899" />
            </div>
          </div>
        </div>
      </main>
      
      {/* Music Toggle */}
      <div className="fixed bottom-6 right-6">
        <Button
          onClick={toggleMusic}
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 bg-white/80 shadow-sm border-purple-200 hover:bg-white"
        >
          {isMusicPlaying ? (
            <span className="text-purple-800">♪</span>
          ) : (
            <span className="text-purple-800">♫</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
