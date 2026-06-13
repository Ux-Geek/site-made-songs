import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play, Volume2, VolumeX } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  label: string;
  mood?: string;
  cover: string;
  context: string;
  audio?: string;
}

interface OrbitProps {
  songs: Song[];
  onCardClick: (song: Song) => void;
}

export default function Orbit({ songs, onCardClick }: OrbitProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const radius = 240; // Slightly smaller radius for smaller cards
  const angleStep = (2 * Math.PI) / songs.length;

  // Handle Autoplay / Audio logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds for a slower, calmer feel

    return () => clearInterval(interval);
  }, [songs.length, activeIndex]);

  useEffect(() => {
    // Pause all audio
    Object.values(audioRefs.current).forEach((audio: HTMLAudioElement | null) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    // Play active audio if not muted and exists
    const activeSong = songs[activeIndex];
    if (!isMuted && activeSong?.audio) {
      const audio = audioRefs.current[activeSong.id];
      if (audio) {
        audio.play().catch(() => {
          setIsMuted(true);
        });
      }
    }
  }, [activeIndex, isMuted, songs]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % songs.length);
    setRotation((prev) => prev - 360 / songs.length);
  };

  return (
    <div className="relative w-full max-w-[900px] h-[500px] flex items-center justify-center -mt-10 overflow-visible perspective-[1200px]">
      {/* Background Decor */}
      <div className="absolute w-[500px] h-[500px] border border-zinc-100/40 rounded-full pointer-events-none opacity-50" />
      
      {/* Audio Toggle */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setIsMuted(!isMuted);
        }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/60 backdrop-blur-md border border-zinc-200/50 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:bg-white transition-all active:scale-95 text-[10px] font-bold uppercase tracking-wider"
      >
        {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
        {isMuted ? "Audio Off" : "Audio On"}
      </button>

      {/* Cards Container */}
      <motion.div
        animate={{ rotateY: rotation }}
        transition={{ 
          duration: 2.0, 
          ease: [0.22, 1, 0.36, 1] // Custom smooth quintic ease Out
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {songs.map((song, index) => {
          const angle = index * angleStep;
          const x = Math.sin(angle) * (radius * 1.2);
          const z = Math.cos(angle) * radius;
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={song.id}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                translateX: x - 90, // Halved from 180
                translateY: -115, // Halved from 230
                translateZ: z,
                width: '180px', // Halved from 360
              }}
              className="z-10"
              onClick={() => onCardClick(song)}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 0.8,
                  filter: isActive ? 'blur(0px)' : 'blur(2px)',
                  opacity: isActive ? 1 : 0.3,
                  rotateY: -rotation - (angle * 180 / Math.PI), 
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className={`w-full h-[230px] rounded-[20px] bg-white border border-zinc-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden cursor-pointer selection:hidden`}
              >
                {/* Audio Element Hidden */}
                {song.audio && (
                  <audio 
                    ref={el => audioRefs.current[song.id] = el}
                    src={song.audio}
                    loop
                  />
                )}

                {/* Album Cover */}
                <div className="h-[140px] bg-zinc-50 overflow-hidden relative group">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Visualizer when active */}
                  {isActive && !isMuted && (
                    <div className="absolute bottom-2 left-2 flex gap-[2px] items-end h-6 bg-black/10 backdrop-blur-md p-1.5 rounded-lg">
                      {[1, 2, 3].map(i => (
                        <motion.div
                          key={i}
                          animate={{ height: [3, 12, 5, 14, 4] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 0.5 + i * 0.1,
                            ease: "easeInOut"
                          }}
                          className="w-0.5 bg-white rounded-full"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Context */}
                <div className="p-4 leading-tight">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                      {song.label}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 tracking-tight mb-2 truncate">
                    {song.title}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white scale-75">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                    <div className="h-[1px] flex-1 bg-zinc-100 relative rounded-full overflow-hidden">
                      {isActive && (
                         <motion.div 
                           initial={{ x: "-100%" }}
                           animate={{ x: "0%" }}
                           transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                           className="absolute inset-0 bg-zinc-300"
                         />
                      )}
                    </div>
                  </div>
                </div>

                <motion.div 
                  className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" 
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Control Button - Adjusted for smaller layout */}
      <button
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-zinc-100 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-50 transition-all active:scale-95 group z-50"
      >
        <ChevronRight className="w-6 h-6 text-zinc-900 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Center Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-zinc-50/30 blur-3xl rounded-full" />
      </div>
    </div>
  );
}
