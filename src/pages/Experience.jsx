import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import SectionScrollHint from '../components/SectionScrollHint';

const EXPERIENCES = [
  {
    company: 'Picogrid',
    websiteLabel: 'https://www.picogrid.com',
    websiteUrl: 'https://www.picogrid.com',
    dates: 'June 2025 - August 2025',
    title: 'Software Engineering Intern',
    summary:
      'Built React/TypeScript features for Orion—camera controls, live video, maps, and auth—plus an internal admin tool that cut repeated DB requests for client orgs.',
  },
  {
    company: 'Vetrail',
    websiteLabel: 'https://www.vetrail.app',
    websiteUrl: 'https://www.vetrail.app',
    dates: 'April 2025 - December 2025',
    title: 'Fullstack Software Engineer',
    summary:
      'Shipped a full-stack veterinary clinic web app (React, Node, Supabase) with secure auth, scheduling, billing, messaging, and AI summaries of clinical PDFs.',
  },
  {
    company: 'Gravity Platforms',
    websiteLabel: 'https://www.gravityplatforms.com',
    websiteUrl: 'https://www.gravityplatforms.com',
    dates: 'July 2023 - July 2024',
    title: 'Software Engineering Intern',
    summary:
      'Built reusable React UI for auth, feeds, and messaging, and Flask REST APIs for CRUD, feeds, and publishing on a production social platform.',
  },
  {
    company: 'Coding Mind',
    websiteLabel: 'https://codingmind.com',
    websiteUrl: 'https://codingmind.com',
    dates: 'June 2023 - Present',
    title: 'Computer Science Tutor',
    summary:
      'Tutor students in programming fundamentals, projects, and problem-solving across languages and CS coursework.',
  },
];

function ChevronIcon({ expanded }) {
  return (
    <svg
      className={`experience-entry__chevron ${expanded ? 'experience-entry__chevron--open' : ''}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Experience() {
  const [openCompany, setOpenCompany] = useState(null);
  const [introVisible, setIntroVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const sectionRef = useRef(null);
  const baseId = useId();

  const toggle = (company) => {
    setOpenCompany((prev) => (prev === company ? null : company));
  };

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const inView = rect.top < vh * 0.92 && rect.bottom > vh * 0.06;
    if (inView) {
      setIntroVisible(true);
    }
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (introVisible) {
      return;
    }
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true);
          ob.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [introVisible]);

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className={`page experience page-viewport-min page-viewport-min--scroll-hint${
        introVisible ? ' experience--intro-visible' : ''
      }`}
    >
      <h1 className="experience-heading">Experience</h1>
      <div className="experience-list" aria-label="Resume-style experience list">
        {EXPERIENCES.map((item, index) => {
          const panelId = `${baseId}-panel-${index}`;
          const isOpen = openCompany === item.company;

          return (
            <article
              className={`experience-entry ${isOpen ? 'experience-entry--expanded' : ''}`}
              key={item.company}
            >
              <span className="experience-entry__marker" aria-hidden="true">
                <span className="experience-entry__marker-dot" />
              </span>
              <header className="experience-entry__top">
                <h2 className="experience-entry__company">{item.company}</h2>
                <div className="experience-entry__meta">
                  <p className="experience-entry__dates">{item.dates}</p>
                  <button
                    type="button"
                    className="experience-entry__expand"
                    id={`${baseId}-btn-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.company)}
                  >
                    <span className="experience-entry__expand-label">
                      {isOpen ? 'Hide details' : 'Show details'}
                    </span>
                    <ChevronIcon expanded={isOpen} />
                  </button>
                </div>
              </header>

              <a
                className="experience-entry__website"
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.company} website (opens in new tab)`}
              >
                {item.websiteLabel}
              </a>

              <p className="experience-entry__title">{item.title}</p>

              <div
                id={panelId}
                className={`experience-entry__details${isOpen ? ' experience-entry__details--open' : ''}`}
                role="region"
                aria-labelledby={`${baseId}-btn-${index}`}
                aria-hidden={!isOpen}
              >
                <div className="experience-entry__details-inner">
                  <p className="experience-entry__summary">{item.summary}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <SectionScrollHint href="#contact" label="Contact" ariaLabel="Scroll to Contact" />
    </section>
  );
}
