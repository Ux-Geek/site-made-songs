import { Music } from 'lucide-react';

export default function PillNav() {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[60]">
      <nav className="bg-white/80 backdrop-blur-xl border border-zinc-200/50 rounded-full px-2 py-2 flex items-center gap-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5">
        <div className="flex items-center gap-2 pl-3">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <Music className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-zinc-900">Made Songs</span>
        </div>
        
        <button className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-black/10">
          Create Your Song
        </button>
      </nav>
    </div>
  );
}
