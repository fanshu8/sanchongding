import React, { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';

type Easing = string;

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: Easing;
  splitType?: 'chars' | 'words';
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className,
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  onLetterAnimationComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parts = useMemo(() => {
    if (splitType === 'words') {
      return text.split(' ').map((w) => w + ' ');
    }
    return Array.from(text);
  }, [text, splitType]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = el.querySelectorAll<HTMLElement>('[data-split-letter]');
            gsap.set(targets, from);
            gsap.to(targets, {
              ...to,
              ease,
              stagger: delay / 1000,
              duration,
              onComplete: () => {
                if (onLetterAnimationComplete) onLetterAnimationComplete();
              },
            });
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  return (
    <div ref={containerRef} className={className} style={{ textAlign }}>
      {parts.map((p, i) => (
        <span
          key={i}
          data-split-letter
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
        >
          {p === ' ' ? '\u00A0' : p}
        </span>
      ))}
    </div>
  );
}

