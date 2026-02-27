import pfp from '../assets/pfp.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import email from '../assets/google.svg';
import resume from '../assets/resume.svg';

export default function Home() {
  return (
    <section id="home" className="page home">

      <div className="home-splash-content" style={{display: 'flex', flexDirection: 'row'}}>
        {/* Main Splash Screen Text */}
        <div className="home-splash-content-text" style={{display: 'flex', flexDirection: 'column'}}>
          <h1>Hi, I'm Jesse.</h1>
          <p>I'm a current senior at the University of Southern California studying Computer Science.</p>
          <p>Here's a little bit about some of the work I've done: </p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '100px', marginTop: '50px' }}>
          {/* Profile Picture */}
          <div style={{ flexShrink: 0}}>
            <img className="pfp-img" src={pfp} alt="Profile" />
          </div>

          {/* Group of Links */}
          <div className="home-splash-content-links" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '8px'}}>
            <button className="icon-button" onClick={() => window.open('https://github.com/jesse1333', '_blank')}>
              <img style={{width: 25}} src={github} alt="GitHub" />
            </button>
            <button className="icon-button" onClick={() => window.open('https://www.linkedin.com/in/jesse-tzo', '_blank')}>
              <img style={{width: 25}} src={linkedin} alt="LinkedIn" />
            </button>

            <button className="icon-button" onClick={() => window.location.href = 'mailto:tzojesse@gmail.com'}>
              <img style={{width: 25}} src={email} alt="Email" />
            </button>

            

            <button className="icon-button" onClick={() => window.open('https://drive.google.com/file/d/1234567890/view?usp=sharing', '_blank')}>
              <img style={{width: 25}} src={resume} alt="Resume" />
            </button>
          </div>
        </div>
      </div>

      
    </section>
  );
}
