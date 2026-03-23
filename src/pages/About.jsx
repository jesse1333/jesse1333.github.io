import { useId, useState } from 'react';
import uscVillage from '../assets/usc-village.png';
import techAws from '../assets/tech-aws.svg';
import techC from '../assets/tech-c.svg';
import techNodejs from '../assets/tech-nodejs.svg';
import techPostgresql from '../assets/tech-postgresql.svg';
import techPython from '../assets/tech-python.svg';
import techReact from '../assets/tech-react.svg';
import techTypescript from '../assets/tech-typescript.svg';
import SectionScrollHint from '../components/SectionScrollHint';
import Switch from '../components/Switch';

function AboutUscLink() {
  return (
    <a
      href="https://www.usc.edu/"
      target="_blank"
      rel="noopener noreferrer"
      className="about-usc-link"
      aria-label="University of Southern California (opens in new tab)"
    >
      USC
      <span className="about-usc-link__preview" aria-hidden="true">
        <img src={uscVillage} alt="" width={640} height={360} loading="lazy" decoding="async" />
      </span>
    </a>
  );
}

const ABOUT_SWITCH_TRACK = {
  off: 'rgba(241, 245, 249, 0.14)',
  on: 'rgba(53, 129, 184, 0.48)',
};

const TECH_STACK = [
  { id: 'react', name: 'React', icon: techReact },
  { id: 'typescript', name: 'TypeScript', icon: techTypescript },
  { id: 'nodejs', name: 'Node.js', icon: techNodejs },
  { id: 'python', name: 'Python', icon: techPython },
  { id: 'c', name: 'C++', icon: techC },
  { id: 'postgresql', name: 'PostgreSQL', icon: techPostgresql },
  { id: 'aws', name: 'AWS', icon: techAws },
];

const personalIntro = (
  <>
    <p className="about-lead">
      I&apos;m a final-year Computer Science student at <AboutUscLink />. I work across the stack—React and modern
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

const technicalIntro = (
  <>
    <p className="about-lead">
      I&apos;m Jesse, a Computer Science senior at <AboutUscLink /> and I turn problems into products.
      <br/><br/>
      
      I&apos;ve shipped real projects
      end to end, and I work product-first: understand the problem, then write code that adheres to
      principles I care about—clarity, correctness, and maintainability.

      <br/><br/>

      I bring a lot of frontend experience, and lately I&apos;ve been digging into
      backend-heavy work, building APIs, databases, and the services behind the UI. 
    </p>
    <p className="about-tech-label about-tech-label--belt">Some tech I&apos;ve worked with</p>
    <div
      className="about-tech-belt"
      aria-label={`Technologies: ${TECH_STACK.map((t) => t.name).join(', ')}`}
    >
      <ul className="about-tech-belt__track" aria-hidden="true">
        {[...TECH_STACK, ...TECH_STACK].map(({ id, name, icon }, index) => (
          <li key={`${id}-${index}`} className="about-tech-chip">
            <img
              src={icon}
              alt=""
              className="about-tech-chip__icon"
              width={18}
              height={18}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            {name}
          </li>
        ))}
      </ul>
    </div>
    <p className="about-body about-body--segue">
      Check out some of the stuff I&apos;ve been working on below.
    </p>
  </>
);

export default function About() {
  const [introType, setIntroType] = useState(true);
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
          key={introType ? 'technical' : 'personal'}
          id="about-heading"
          className="about-heading about-reveal-item"
        >
          {introType ? 'A little bit about me…' : 'More about me!'}
        </h1>
        <div className="about-header-row__switch">
          <Switch
            id={switchId}
            aria-labelledby={labelId}
            value={!introType}
            onPress={() => setIntroType((v) => !v)}
            duration={400}
            trackColors={ABOUT_SWITCH_TRACK}
          />
          <p id={labelId} className="about-intro-toggle__label">
            {introType ? 'More about me!' : 'A little about me...'}
          </p>
        </div>
      </div>

      <div
        className="about-copy about-reveal-item"
        key={introType ? 'technical' : 'personal'}
        aria-live="polite"
      >
        {introType ? technicalIntro : personalIntro}
      </div>

      <SectionScrollHint
        href="#projects"
        label="Projects"
        ariaLabel="Scroll to Projects"
      />
    </section>
  );
}
