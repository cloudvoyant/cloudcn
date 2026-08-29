// apps/docs/src/components/HeroWord.tsx
// Cycles the hero headline's leading word (Customizable / Accessible /
// Composable) with a vertical roll, modeled on diffwiki's CyclingText: the
// current word rolls up out while the next rolls in from below, both stacked in
// a single grid cell ([grid-area:1/1]) inside an inline-grid sized to the
// active word. The cell's width transitions to the measured active-word width,
// so the rest of the headline glides smoothly — never separate columns, never a
// wide empty slot. SSR renders the first word statically; changes are announced
// via aria-live.
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const WORDS = ['Customizable', 'Accessible', 'Composable'] as const;
const HOLD = 2200;
const ROLL_MS = 300;

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function HeroWord() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState<number>();
  const activeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => {
        setPrev(i);
        return (i + 1) % WORDS.length;
      });
    }, HOLD);
    return () => window.clearInterval(id);
  }, []);

  // Drop the outgoing word once its roll-out finishes.
  useEffect(() => {
    if (prev == null) return;
    const t = window.setTimeout(() => setPrev(null), ROLL_MS + 20);
    return () => window.clearTimeout(t);
  }, [prev]);

  useIsoLayoutEffect(() => {
    if (activeRef.current) setWidth(activeRef.current.offsetWidth);
  }, [active, mounted]);

  // Server + first client render: the current word only (no mismatch).
  if (!mounted) {
    return <span className="text-primary">{WORDS[active]}</span>;
  }

  return (
    <span
      aria-live="polite"
      className="relative inline-grid align-baseline text-primary transition-[width] duration-300 ease-out [clip-path:inset(-0.06em_-120px)]"
      style={width != null ? { width } : undefined}
    >
      {prev != null && prev !== active && (
        <span
          key={`out-${prev}`}
          aria-hidden
          className="w-max whitespace-nowrap justify-self-start [grid-area:1/1]"
          style={{ animation: `hero-word-roll-out ${ROLL_MS}ms ease-out forwards` }}
        >
          {WORDS[prev]}
        </span>
      )}
      <span
        key={`in-${active}`}
        ref={activeRef}
        className="w-max whitespace-nowrap justify-self-start [grid-area:1/1]"
        style={prev != null ? { animation: `hero-word-roll-in ${ROLL_MS}ms ease-out` } : undefined}
      >
        {WORDS[active]}
      </span>
    </span>
  );
}
