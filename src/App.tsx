/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import PillNav from './components/PillNav';
import Orbit from './components/Orbit';
import MiniModal from './components/MiniModal';

interface Song {
  id: string;
  title: string;
  label: string;
  mood: string;
  cover: string;
  context: string;
  audio: string;
}

const SONGS: Song[] = [
  { 
    id: '1', 
    title: 'Sarah\'s Day', 
    label: 'Birthday', 
    mood: 'Upbeat Indie Pop',
    cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400', 
    context: 'This was made for Sarah’s birthday',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  { 
    id: '2', 
    title: 'Golden Years', 
    label: 'Anniversary', 
    mood: 'Warm Acoustic Soul',
    cover: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=400', 
    context: 'Celebrating 50 years of love',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  { 
    id: '3', 
    title: 'Wild Hearts', 
    label: 'Adventure', 
    mood: 'Folk / Americana',
    cover: 'https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80&w=400', 
    context: 'For their cross-country road trip',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  { 
    id: '4', 
    title: 'New Chapter', 
    label: 'Wedding', 
    mood: 'Cinematic Piano',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400', 
    context: 'The perfect first dance song',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  { 
    id: '5', 
    title: 'Little Star', 
    label: 'Baby Shower', 
    mood: 'Lullaby / Ambient',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400', 
    context: 'Welcoming baby Leo to the world',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
  { 
    id: '6', 
    title: 'Modern Soul', 
    label: 'Gift', 
    mood: 'Lo-fi Beats',
    cover: 'https://images.unsplash.com/photo-1453090927415-5f45085b65c0?auto=format&fit=crop&q=80&w=400', 
    context: 'A surprise for his graduation',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
];

export default function App() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (song: Song) => {
    setSelectedSong(song);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-black selection:text-white">
      <PillNav />

      {/* Main Experience Section */}
      <section className="pt-24 pb-20 px-6 flex flex-col items-center overflow-hidden min-h-screen">
        
        {/* Orbit Component (Now Above Text) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="w-full flex justify-center mb-12"
        >
          <Orbit songs={SONGS.slice(0, 4)} onCardClick={handleCardClick} />
        </motion.div>

        {/* Hero Text (Now Below Orbit) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center z-20"
        >
          <span className="text-muted text-base mb-4 block font-normal tracking-tight">
            Personalised songs in minutes
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Turn moments into music.
          </h1>
        </motion.div>
      </section>

      {/* Mini Modal */}
      <MiniModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        song={selectedSong} 
      />

      {/* Footer / Bottom Content */}
      <footer className="fixed bottom-12 left-0 right-0 px-12 flex justify-between items-end pointer-events-none">
        <div className="max-w-xs space-y-2 pointer-events-auto">
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">The Experience</p>
          <p className="text-sm text-muted leading-relaxed">
            Every song is unique. Every lyric is personal. Every melody is composed from scratch using state-of-the-art AI, tailored exactly to your story.
          </p>
        </div>
        
        <div className="text-right pointer-events-auto">
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Available Globally</p>
          <div className="flex gap-4 mt-2">
            <span className="text-xs font-medium border-b border-zinc-200 cursor-pointer hover:border-black transition-colors">Spotify</span>
            <span className="text-xs font-medium border-b border-zinc-200 cursor-pointer hover:border-black transition-colors">Apple Music</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

