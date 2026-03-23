import { useState } from 'react';

const EMAIL = 'tzojesse@gmail.com';

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = message.trim() || 'Hi Jesse,';
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="page contact" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <h1 id="contact-heading" className="contact-heading">
          Contact
        </h1>
        <p className="contact-lead">Let&apos;s chat! Shoot me a message:</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <textarea
            id="contact-message"
            name="message"
            className="contact-textarea"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write something…"
            autoComplete="off"
          />
          <div className="contact-actions">
            <button type="submit" className="contact-submit">
              Send message
            </button>
          </div>
        </form>

        <p style={{marginBottom: "2rem"}} className="contact-links-line">
          <a className="contact-inline-link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <span className="contact-links-sep" aria-hidden="true">
            {' '}
            ·{' '}
          </span>
          <a
            className="contact-inline-link"
            href="https://github.com/jesse1333"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="contact-links-sep" aria-hidden="true">
            {' '}
            ·{' '}
          </span>
          <a
            className="contact-inline-link"
            href="https://www.linkedin.com/in/jesse-tzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="contact-links-sep" aria-hidden="true">
            {' '}
            ·{' '}
          </span>
          <a
            className="contact-inline-link"
            href="https://drive.google.com/file/d/1yW8mey11HTEaAMGkkS9Z92zqzsGh5NLP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </p>
      </div>
    </section>
  );
}
