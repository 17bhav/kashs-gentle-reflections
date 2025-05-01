
import React from 'react';
import Layout from '../components/Layout';
import { Music, Plane, Gamepad, Code, Utensils } from 'lucide-react';

interface Memory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const Memories: React.FC = () => {
  const memories: Memory[] = [
    {
      id: 1,
      title: "Peter Cat Recording Co. Concert",
      description: "Dancing together under the lights, lost in the music. The way you smiled when they played your favorite song.",
      icon: <Music className="w-5 h-5" />,
      category: "Concerts"
    },
    {
      id: 2,
      title: "Diljit Dosanjh Show",
      description: "Singing along to every lyric. I'll never forget how you knew all the words, and how alive we both felt.",
      icon: <Music className="w-5 h-5" />,
      category: "Concerts"
    },
    {
      id: 3,
      title: "Coldplay Experience",
      description: "The colors, the energy, that moment during 'Fix You' when you squeezed my hand. Pure magic.",
      icon: <Music className="w-5 h-5" />,
      category: "Concerts"
    },
    {
      id: 4,
      title: "Ed Sheeran Live",
      description: "Swaying together under the stars. How we both got emotional during 'Photograph'.",
      icon: <Music className="w-5 h-5" />,
      category: "Concerts"
    },
    {
      id: 5,
      title: "Amritsar Trip",
      description: "Exploring the Golden Temple at dawn. The peace we found there. Eating the best kulchas of our lives.",
      icon: <Plane className="w-5 h-5" />,
      category: "Travel"
    },
    {
      id: 6,
      title: "Mumbai Adventure",
      description: "Getting lost in the narrow streets. Finding that tiny café by the sea. The sunset at Marine Drive.",
      icon: <Plane className="w-5 h-5" />,
      category: "Travel"
    },
    {
      id: 7,
      title: "FIFA Tournaments",
      description: "Our intense competitions that always ended in laughter. How seriously you took each match.",
      icon: <Gamepad className="w-5 h-5" />,
      category: "Everyday Joy"
    },
    {
      id: 8,
      title: "Chess Battles",
      description: "Teaching me your strategies. Your patience when I struggled. The triumph in your eyes when you won.",
      icon: <Gamepad className="w-5 h-5" />,
      category: "Everyday Joy"
    },
    {
      id: 9,
      title: "Coding Together",
      description: "Building websites side by side. How we'd help each other solve problems. Your clever solutions.",
      icon: <Code className="w-5 h-5" />,
      category: "Everyday Joy"
    },
    {
      id: 10,
      title: "Food Adventures",
      description: "Trying new restaurants every weekend. Your excitement about discovering new cuisines. Our shared love for desserts.",
      icon: <Utensils className="w-5 h-5" />,
      category: "Everyday Joy"
    }
  ];

  const categories = [...new Set(memories.map(memory => memory.category))];

  return (
    <Layout>
      <div className="letter-container">
        <h2 className="letter-heading">Our Moments</h2>
        
        <p className="letter-paragraph">
          Each memory with you holds a special place in my heart. These are just a few of the beautiful moments we created together—fragments of joy, connection, and shared experience that I'll always treasure.
        </p>

        {categories.map(category => (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-playfair mb-4 text-primary/90">{category}</h3>
            <div className="memories-grid">
              {memories
                .filter(memory => memory.category === category)
                .map(memory => (
                  <div key={memory.id} className="memory-card">
                    <div className="flex items-center mb-2">
                      <span className="bg-gentle-blue/50 p-2 rounded-full mr-3">
                        {memory.icon}
                      </span>
                      <h4 className="font-medium">{memory.title}</h4>
                    </div>
                    <p className="text-sm md:text-base text-primary/80">{memory.description}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
        
        <p className="letter-paragraph mt-8 italic text-center">
          These moments, and so many more, have shaped our story—a story with so much light.
        </p>
      </div>
    </Layout>
  );
};

export default Memories;
