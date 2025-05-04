
import React, { useState, useEffect } from 'react';
import { Heart, GalleryVertical, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Memory {
  id: number;
  title: string;
  image: string;
}

const HomePage: React.FC = () => {
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

  const memories: Memory[] = [{
    id: 1,
    title: "Road Trips Together",
    image: "/lovable-uploads/c585b04d-ec6b-414a-9ce2-7c191820f907.png"
  }, {
    id: 2,
    title: "Golden Hour Views",
    image: "/lovable-uploads/3f386413-f62e-4a8e-9e00-27f6780c15aa.png"
  }, {
    id: 3,
    title: "Special Moments",
    image: "/lovable-uploads/1cea1c27-5d6d-4368-ad66-7f9add11e1a9.png"
  }, {
    id: 4,
    title: "Magical Rainbows",
    image: "/lovable-uploads/977262b6-b082-458f-976b-1c4758b7fc97.png"
  }, {
    id: 5,
    title: "Golden Temple Visit",
    image: "/lovable-uploads/e56cb35f-13d4-4586-834c-345a9ec1b420.png"
  }, {
    id: 6,
    title: "Festival Celebrations",
    image: "/lovable-uploads/09646070-d890-421d-98bb-3655ce98e854.png"
  }, {
    id: 7,
    title: "Home Warmth",
    image: "/lovable-uploads/4eaff987-9bac-425b-ae0b-1040ea1b648b.png"
  }, {
    id: 8,
    title: "Tight Hugs",
    image: "/lovable-uploads/37f97211-a016-477b-a6f1-48149bf3070f.png"
  }, {
    id: 9,
    title: "Evening Walks",
    image: "/lovable-uploads/2cec92cf-a8d2-4351-9c0a-450324c44538.png"
  }, {
    id: 10,
    title: "You as My Guide",
    image: "/lovable-uploads/86a28104-0aca-4bb6-98a1-afb1637a9ac3.png"
  }, {
    id: 11,
    title: "Mirror Selfies",
    image: "/lovable-uploads/43eea911-0951-4677-95d5-52535dd7901f.png"
  }, {
    id: 12,
    title: "Stadium Adventures",
    image: "/lovable-uploads/c69ec858-9d4d-479a-a21f-9ef1cc801351.png"
  }];

  const sharedActivities = ["Concerts we attended together: Peter Cat Recording Co., Diljit Dosanjh, Coldplay, Ed Sheeran", "Trips we took: Amritsar, Mumbai", "Playing FIFA and chess together", "Making websites side by side", "Exploring restaurants and eating together"];

  return <div className="min-h-screen bg-gradient-to-br from-soft-beige via-soft-lavender to-deep-rose/30">
      {/* Header */}
      <header className="pt-10 pb-6 text-center">
        <h1 className="text-5xl font-playfair font-medium text-deep-rose animate-fade-in drop-shadow-lg">
          Dear Kash
        </h1>
        <div className="mt-2 text-sm text-deep-rose/80 italic">your baby loves you</div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pb-20">
        {/* Image Carousel */}
        <div className="mb-10">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {memories.map(memory => <CarouselItem key={memory.id}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg shadow-lg bg-black/10 backdrop-blur-sm">
                      <div className="relative aspect-video overflow-hidden">
                        <img src={memory.image} alt={memory.title} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Letter Section */}
        <div className="mt-6 p-8 bg-white/70 backdrop-blur-sm rounded-lg shadow-md animate-fade-in">
          {/* Shared Memories List */}
          <div className="mt-4 mb-8">
            <h2 className="text-2xl font-playfair mb-6 text-center text-deep-rose flex items-center justify-center gap-2">
              <List className="h-6 w-6" /> 
              <span>Some of our fondest memories together</span>
            </h2>
            
            <ul className="space-y-3 max-w-2xl mx-auto">
              {sharedActivities.map((activity, index) => <li key={index} className="py-2 px-4 bg-gradient-to-r from-soft-beige to-soft-lavender/50 rounded-lg shadow-sm text-deep-rose/90 font-lora animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {activity}
                </li>)}
            </ul>
          </div>

          {/* Poem Section */}
          <div className="my-8 px-4 py-6 bg-soft-beige/40 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-playfair mb-4 text-center text-deep-rose">Poem</h3>
            <div className="text-deep-rose/90 font-lora space-y-4">
              <p>I don't get you,<br/>
              But I can tell how your day went,<br/>
              By the sound of your hello.</p>

              <p>I don't get you,<br/>
              But I know the days you have classes,<br/>
              The dates of your family's birthdays.<br/>
              I know how your week looks,<br/>
              And how you feel about it.</p>

              <p>I don't get you,<br/> 
              But I know when I ask you to smile,<br/>
              The first is fake,<br/>
              And the second is you calling me stupid,<br/>
              And genuinely laughing</p>

              <p>I don't get you,<br/>
              But I know how you like your coffee, cold and dark.<br/>
              But I know how you like your parantha, without ajwain.<br/>
              But I know the recipe to making you happy.</p>

              <p>I don't get you,<br/>
              At times.<br/>
              And neither do you,<br/>
              At times.<br/>
              That's why we have words,<br/>
              And tongues to express. (And explore)</p>

              <p>I don't get you,<br/>
              But I hear you,<br/>
              But I learn,<br/>
              But I understand.</p>

              <p>I don't get you,<br/>
              But I am willing to learn,<br/>
              And keep learning,<br/>
              Till eternity.</p>
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-12 pt-8 border-t border-soft-lavender/50 text-center">
            <p className="text-lg italic text-deep-rose mb-3">
              I love you Kash, always your baby.
            </p>
            <p className="text-md text-deep-rose/80">
              You are my boyfriend, you also play the role of a sibling, a parent, and my bestfriend.
            </p>
            <div className="mt-4 animate-pulse flex justify-center">
              <Heart className="text-deep-rose h-8 w-8" fill="#c65060" />
            </div>
          </div>
        </div>
      </main>
      
      {/* Music Toggle */}
      <div className="fixed bottom-6 right-6">
        <Button onClick={toggleMusic} variant="outline" size="icon" className="rounded-full w-10 h-10 bg-white/80 shadow-sm border-soft-lavender hover:bg-white">
          {isMusicPlaying ? <span className="text-deep-rose">♪</span> : <span className="text-deep-rose">♫</span>}
        </Button>
      </div>
    </div>;
};

export default HomePage;
