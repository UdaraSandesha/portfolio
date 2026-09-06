'use client';
import { useEffect, useState } from 'react';
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
  { id: 'work', label: 'Selected work' },
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
        <span className="avatar-initials" aria-hidden="true">
          {item.initials}
        </span>
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
          <DialogTitle className="text-xl">{item.name}</DialogTitle>
          <DialogDescription>
            {item.role} · {item.relationship}
          </DialogDescription>
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
  return (
    <section
      id="recommendations"
      className="recommendations"
      aria-label="Recommendations"
    >
      <p className="eyebrow">06 / Recommendations</p>
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
      <div className={`marquee-window ${paused ? 'paused' : ''}`}>
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
