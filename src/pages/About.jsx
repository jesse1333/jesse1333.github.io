import { useId, useState } from 'react';
import SectionScrollHint from '../components/SectionScrollHint';
import Switch from '../components/Switch';

const ABOUT_SWITCH_TRACK = {
  off: 'rgba(241, 245, 249, 0.14)',
  on: 'rgba(53, 129, 184, 0.48)',
};

const technicalIntro = (
  <>
    <p className="about-lead">
      I&apos;m a final-year Computer Science student at USC. I work across the stack—React and modern
      front ends, Node and Express services, and data layers like MongoDB—focusing on APIs, performance,
      and interfaces that stay maintainable as projects grow.
    </p>
    <p className="about-body">
      I care about clear architecture, sensible abstractions, and shipping features that scale. Most of
      my projects blend product thinking with solid engineering: from extensions and apps to full-stack
      tools people use day to day.
    </p>
  </>
);

const plainIntro = (
  <>
    <p className="about-lead">
      I&apos;m Jesse, finishing my CS degree at USC. I build websites and apps end to end—the parts you
      see on screen and the systems behind them that make everything work together.
    </p>
    <p className="about-body">
      I like turning ideas into something real people can use: fast, reliable, and easy to keep improving.
      If you skim my projects, you&apos;ll see everything from browser tools to mobile apps to full
      web products.
    </p>
  </>
);

export default function About() {
  const [lessTechnical, setLessTechnical] = useState(true);
  const switchId = useId();
  const labelId = `${switchId}-label`;

  return (
    <section
      id="about-me"
      className="page about page-viewport-min page-viewport-min--scroll-hint"
      aria-labelledby="about-heading"
    >
      <div className="about-header-row">
        <h1
          key={lessTechnical ? 'plain' : 'tech'}
          id="about-heading"
          className="about-heading about-reveal-item"
        >
          {lessTechnical ? 'A little bit about me…' : 'More about me!'}
        </h1>
        <div className="about-header-row__switch">
          <Switch
            id={switchId}
            aria-labelledby={labelId}
            value={!lessTechnical}
            onPress={() => setLessTechnical((v) => !v)}
            duration={400}
            trackColors={ABOUT_SWITCH_TRACK}
          />
          <p id={labelId} className="about-intro-toggle__label">
            {lessTechnical ? 'More about me!' : 'A little about me...'}
          </p>
        </div>
      </div>

      <div
        className="about-copy about-reveal-item"
        key={lessTechnical ? 'plain' : 'tech'}
        aria-live="polite"
      >
        {lessTechnical ? plainIntro : technicalIntro}
      </div>

      <SectionScrollHint
        href="#projects"
        label="Projects"
        ariaLabel="Scroll to Projects"
      />
    </section>
  );
}
