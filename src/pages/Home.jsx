import { useState } from 'react';
import pfp from '../assets/pfp.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import email from '../assets/google.svg';
import resume from '../assets/resume.svg';

export default function Home() {
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <section id="home" className="page home">

      <div className="home-splash-content">
        <div className="home-splash-content-text">
          <h1 className="home-splash-animate home-splash-animate--1">Hi, I'm <span style={{color: "#F05D5E"}}>Jesse</span>.</h1>
          <p className="home-splash-animate home-splash-animate--2">
            I build <br /> full-stack applications.
          </p>
        </div>

        <div className="home-splash-aside">
          <button
            type="button"
            className="pfp-wrap home-splash-animate home-splash-animate--3"
            onClick={() => setSocialOpen((open) => !open)}
            aria-expanded={socialOpen}
            aria-controls="home-social-links"
            aria-label={socialOpen ? 'Hide social links' : 'Show social links'}
          >
            <img className="pfp-img" src={pfp} alt="" draggable={false} aria-hidden="true" />
          </button>

          <div className="home-social-region">
            <p
              className={`home-social-hint ${socialOpen ? 'home-social-hint--hidden' : 'home-social-hint--visible'}`}
              aria-hidden="true"
            >
              Say hi.
            </p>
            <div
              id="home-social-links"
              className={`home-splash-content-links ${socialOpen ? 'home-social-links--open' : 'home-social-links--closed'}`}
              aria-hidden={!socialOpen}
            >
            <button
              type="button"
              className="icon-button home-social-button"
              aria-label="Open GitHub profile"
              tabIndex={socialOpen ? undefined : -1}
              onClick={() => window.open('https://github.com/jesse1333', '_blank')}
            >
              <img src={github} alt="" aria-hidden="true" draggable={false} />
            </button>
            <button
              type="button"
              className="icon-button home-social-button"
              aria-label="Open LinkedIn profile"
              tabIndex={socialOpen ? undefined : -1}
              onClick={() => window.open('https://www.linkedin.com/in/jesse-tzo', '_blank')}
            >
              <img src={linkedin} alt="" aria-hidden="true" draggable={false} />
            </button>
            <button
              type="button"
              className="icon-button home-social-button"
              aria-label="Send email"
              tabIndex={socialOpen ? undefined : -1}
              onClick={() => (window.location.href = 'mailto:tzojesse@gmail.com')}
            >
              <img src={email} alt="" aria-hidden="true" draggable={false} />
            </button>
            <button
              type="button"
              className="icon-button home-social-button"
              aria-label="Open resume"
              tabIndex={socialOpen ? undefined : -1}
              onClick={() => window.open('https://drive.google.com/file/d/1yW8mey11HTEaAMGkkS9Z92zqzsGh5NLP/view?usp=sharing', '_blank')}
            >
              <img src={resume} alt="" aria-hidden="true" draggable={false} />
            </button>
            </div>
          </div>
        </div>
      </div>

      <div className="home-scroll-hint-wrap home-scroll-hint-wrap--animate">
        <a
          href="#about-me"
          className="home-scroll-hint"
          aria-label="Scroll to About me"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        >
          <span className="home-scroll-hint__label">About me</span>
          <span className="home-scroll-hint__chevron-wrap" aria-hidden="true">
            <span className="home-scroll-hint__chevron" />
          </span>
        </a>
      </div>
    </section>
  );
}
