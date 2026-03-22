/**
 * Same look/behavior as the hero “scroll” cue; use on full-height sections (not Contact).
 */
export default function SectionScrollHint({ href, label, ariaLabel }) {
  return (
    <div className="home-scroll-hint-wrap home-scroll-hint-wrap--animate">
      <a
        href={href}
        className="home-scroll-hint"
        aria-label={ariaLabel}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      >
        <span className="home-scroll-hint__label">{label}</span>
        <span className="home-scroll-hint__chevron-wrap" aria-hidden="true">
          <span className="home-scroll-hint__chevron" />
        </span>
      </a>
    </div>
  );
}
