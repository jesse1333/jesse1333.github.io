import SectionScrollHint from '../components/SectionScrollHint';

export default function Experience() {
  return (
    <section
      id="experiences"
      className="page experience page-viewport-min page-viewport-min--scroll-hint"
    >
      <h1>Experiences</h1>
      <p>Add your experience here.</p>
      <SectionScrollHint href="#contact" label="Contact" ariaLabel="Scroll to Contact" />
    </section>
  );
}
