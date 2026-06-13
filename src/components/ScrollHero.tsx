import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollHero.css';
import appStoreIcon from '../assets/App Store Icon.svg';
import phoneImg from '../assets/iPhone Mockup Hero.png';

gsap.registerPlugin(ScrollTrigger);

/* ── Step data ─────────────────────────────────────────────── */
const STEPS = [
  { id: 1, label: '01', lines: ['Choose', 'presets.'] },
  { id: 2, label: '02', lines: ['Personalise', 'the song.'] },
  { id: 3, label: '03', lines: ['Gift them', 'a song.'] },
];

/* ── Swap these paths once you have 3 different screenshots ── */
const MOCKUP_IMAGES = [phoneImg, phoneImg, phoneImg];

export default function ScrollHero() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const textRefs      = useRef<(HTMLDivElement | null)[]>([]);
  const mockupRefs    = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Initial state: only step 1 visible ─────────────── */
      textRefs.current.slice(1).forEach(el => {
        if (el) gsap.set(el, { opacity: 0, y: 44, filter: 'blur(8px)' });
      });
      mockupRefs.current.slice(1).forEach(el => {
        if (el) gsap.set(el, { opacity: 0, scale: 0.97 });
      });

      /* ── Master timeline scrubbed to scroll ─────────────── */
      /*
       *  Timeline duration = 4 units
       *  Scroll 0–50vh  → positions 0–1  (step 1 holds)
       *  Scroll 50–100vh → positions 1–2  (1→2 transition)
       *  Scroll 100–150vh → positions 2–3 (step 2 holds)
       *  Scroll 150–200vh → positions 3–4 (2→3 transition)
       */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
        defaults: { ease: 'power2.inOut' },
      });

      tl
        /* ── Step 1 → Step 2 ─────────────────────────────── */
        // Text 1 exits (upward blur-out)
        .to(textRefs.current[0],  { opacity: 0, y: -44, filter: 'blur(8px)', duration: 1 }, 1)
        // Text 2 enters (upward blur-in)
        .to(textRefs.current[1],  { opacity: 1, y: 0,   filter: 'blur(0px)', duration: 1 }, 1)
        // Mockup 1 fades out
        .to(mockupRefs.current[0], { opacity: 0, scale: 1.03, duration: 0.8 }, 1)
        // Mockup 2 fades in
        .to(mockupRefs.current[1], { opacity: 1, scale: 1,    duration: 0.8 }, 1.2)

        /* ── Step 2 → Step 3 ─────────────────────────────── */
        .to(textRefs.current[1],  { opacity: 0, y: -44, filter: 'blur(8px)', duration: 1 }, 3)
        .to(textRefs.current[2],  { opacity: 1, y: 0,   filter: 'blur(0px)', duration: 1 }, 3)
        .to(mockupRefs.current[1], { opacity: 0, scale: 1.03, duration: 0.8 }, 3)
        .to(mockupRefs.current[2], { opacity: 1, scale: 1,    duration: 0.8 }, 3.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-hero-container" ref={containerRef}>
      <div className="scroll-hero-sticky">

        {/* ── Left: step copy ─────────────────────────────── */}
        <div className="scroll-hero-left">
          <div className="scroll-steps-wrapper">
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                className="scroll-step-text"
                ref={el => { textRefs.current[i] = el; }}
              >
                <span className="scroll-step-label">{step.label}</span>
                <h2 className="scroll-step-headline">
                  {step.lines.map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </h2>
              </div>
            ))}
          </div>

          <a href="#" className="scroll-hero-btn" id="scroll-get-app" aria-label="Get the Made Songs app">
            <span className="scroll-hero-btn-text">Get the app</span>
            <img src={appStoreIcon} alt="" className="scroll-hero-btn-icon" aria-hidden="true" />
          </a>
        </div>

        {/* ── Right: mockup stack ──────────────────────────── */}
        <div className="scroll-hero-right">
          <div className="scroll-mockup-stack">
            {MOCKUP_IMAGES.map((img, i) => (
              <div
                key={i}
                className="scroll-mockup-wrap"
                ref={el => { mockupRefs.current[i] = el; }}
              >
                <img
                  src={img}
                  alt={`Made Songs app — step ${i + 1}`}
                  className="scroll-mockup-img"
                  draggable={false}
                />
              </div>
            ))}
            <div className="scroll-mockup-shadow" />
          </div>
        </div>

      </div>
    </div>
  );
}
