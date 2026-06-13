import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';

interface MiniModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: {
    title: string;
    context: string;
    cover: string;
  } | null;
}

export default function MiniModal({ isOpen, onClose, song }: MiniModalProps) {
  if (!song) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl z-[101] p-6 text-center"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-zinc-400" />
            </button>

            <img
              src={song.cover}
              alt={song.title}
              className="w-48 h-48 mx-auto rounded-2xl shadow-lg mb-6 object-cover"
              referrerPolicy="no-referrer"
            />

            <h3 className="text-2xl font-semibold mb-2">{song.title}</h3>
            <p className="text-zinc-500 mb-8 px-4">{song.context}</p>

            <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
              Create Yours
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
