'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Pause, Play, Quote } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { recommendations } from './recommendations';
const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'recommendations', label: 'Kind words' },
];
export function Navigation() {
  const [active, setActive] = useState('about');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-5% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <nav className="section-nav" aria-label="Sections">
      {sections.map((section) => (
        <a
          href={`#${section.id}`}
          key={section.id}
          className={active === section.id ? 'active' : ''}
          aria-current={active === section.id ? 'location' : undefined}
          onClick={() => setActive(section.id)}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
function ProfilePhoto({ item }: { item: (typeof recommendations)[number] }) {
  // Preserve the exact screenshot pixels; the circular viewport reveals only its avatar.
  return (
    <span className="recommendation-avatar">
      <Image
        src={item.avatar.src}
        alt={`${item.name} profile photo`}
        width={item.avatar.width}
        height={item.avatar.height}
        loading="lazy"
        unoptimized
        style={{
          width: item.avatar.width,
          height: item.avatar.height,
          left: -item.avatar.x,
          top: -item.avatar.y,
        }}
      />
    </span>
  );
}
function QuoteCard({
  item,
  duplicate = false,
}: {
  item: (typeof recommendations)[number];
  duplicate?: boolean;
}) {
  return (
    <article className="quote-card">
      <Quote className="quote-mark" aria-hidden="true" />
      <blockquote>“{item.excerpt}”</blockquote>
      <div className="quote-person">
        <ProfilePhoto item={item} />
        <div>
          <strong>{item.name}</strong>
          <p>{item.role}</p>
        </div>
      </div>
      <Dialog>
        <DialogTrigger
          tabIndex={duplicate ? -1 : undefined}
          className="quote-read"
          aria-label={`Read full recommendation from ${item.name}`}
        >
          Read full recommendation <ArrowUpRight aria-hidden="true" />
        </DialogTrigger>
        <DialogContent className="quote-modal sm:max-w-2xl">
          <div className="quote-person quote-modal-person">
            <ProfilePhoto item={item} />
            <div>
              <DialogTitle className="text-xl">{item.name}</DialogTitle>
              <DialogDescription className="mt-2">
                {item.role}
              </DialogDescription>
            </div>
          </div>
          <blockquote className="quote-modal-text">{item.text}</blockquote>
          <div className="quote-modal-source">
            LinkedIn recommendation · {item.date}
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}
export function Recommendations() {
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    startX: number;
    startScrollLeft: number;
    hasMoved: boolean;
  } | null>(null);

  useEffect(() => {
    if (paused || isDragging || isHovered) return;

    const marquee = windowRef.current;
    if (!marquee || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;

    let frameId = 0;
    let lastTimestamp = 0;

    const move = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = Math.min(timestamp - lastTimestamp, 40);
      lastTimestamp = timestamp;
      const firstGroup = marquee.firstElementChild?.firstElementChild;
      const loopWidth = firstGroup?.getBoundingClientRect().width ?? 0;

      if (loopWidth && marquee.scrollLeft >= loopWidth) {
        marquee.scrollLeft -= loopWidth;
      }

      marquee.scrollLeft += elapsed * 0.03;
      frameId = requestAnimationFrame(move);
    };

    frameId = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frameId);
  }, [isDragging, isHovered, paused]);

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (
      event.target instanceof Element &&
      event.target.closest('a, button, input, select, textarea')
    )
      return;

    const marquee = windowRef.current;
    if (!marquee) return;

    dragRef.current = {
      startX: event.clientX,
      startScrollLeft: marquee.scrollLeft,
      hasMoved: false,
    };
  };

  const drag = (event: React.PointerEvent<HTMLDivElement>) => {
    const marquee = windowRef.current;
    const start = dragRef.current;
    if (!marquee || !start) return;

    const distance = event.clientX - start.startX;
    if (!start.hasMoved && Math.abs(distance) < 6) return;

    if (!start.hasMoved) {
      start.hasMoved = true;
      marquee.setPointerCapture(event.pointerId);
      setIsDragging(true);
    }

    marquee.scrollLeft = start.startScrollLeft - distance;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const marquee = windowRef.current;
    const hasMoved = dragRef.current?.hasMoved;
    if (hasMoved && marquee?.hasPointerCapture(event.pointerId)) {
      marquee.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
    if (hasMoved) setIsDragging(false);
  };

  return (
    <section
      id="recommendations"
      className="recommendations"
      aria-label="Recommendations"
    >
      <p className="eyebrow">05 / Recommendations</p>
      <div className="recommendation-heading">
        <div>
          <h2>Good code. Great people.</h2>
          <p>A few words from the people I’ve worked with.</p>
        </div>
        <div className="recommendation-actions">
          <button
            type="button"
            className="icon-button"
            aria-label={
              paused
                ? 'Play recommendation animation'
                : 'Pause recommendation animation'
            }
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <Play aria-hidden="true" />
            ) : (
              <Pause aria-hidden="true" />
            )}
          </button>
          <a
            href="https://www.linkedin.com/in/udarasandesha/details/recommendations/"
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            aria-label="View recommendations on LinkedIn"
          >
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div
        ref={windowRef}
        className={`marquee-window ${paused ? 'paused' : ''} ${isDragging ? 'is-dragging' : ''}`}
        aria-label="Recommendations carousel. Drag or scroll horizontally to browse."
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <div className="marquee-track">
          <div className="marquee-group">
            {recommendations.map((item) => (
              <QuoteCard key={item.name} item={item} />
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {recommendations.map((item) => (
              <QuoteCard key={item.name} item={item} duplicate />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
