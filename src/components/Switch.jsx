import { useLayoutEffect, useRef, useState } from 'react';

export default function Switch({
  value,
  onPress,
  style,
  duration = 400,
  trackColors = {
    off: 'rgba(241, 245, 249, 0.14)',
    on: 'rgba(53, 129, 184, 0.48)',
  },
  className = '',
  ...rest
}) {
  const trackRef = useRef(null);
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);

  const isOn = value === true || value === 1;
  const ms = reduceMotion ? 0 : duration;

  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        setLayout({ width: r.width, height: r.height });
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pad = 2;
  const thumbSize =
    layout.height > pad * 2 ? Math.round(layout.height - pad * 2) : 0;
  const maxTravel =
    layout.width > 0 && thumbSize > 0
      ? Math.max(0, layout.width - pad * 2 - thumbSize)
      : 0;
  const translateX = isOn ? maxTravel : 0;

  const trackStyle = {
    backgroundColor: isOn ? trackColors.on : trackColors.off,
    transition: `background-color ${ms}ms ease`,
    borderRadius: layout.height > 0 ? layout.height / 2 : 999,
    ...(style && typeof style === 'object' ? style : null),
  };

  const thumbStyle = {
    width: thumbSize || undefined,
    height: thumbSize || undefined,
    borderRadius: thumbSize ? thumbSize / 2 : undefined,
    transform: `translate(${translateX}px, -50%)`,
    transition: `transform ${ms}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      className={`switch-root ${className}`.trim()}
      {...rest}
      onClick={onPress}
    >
      <div ref={trackRef} className="switch-track" style={trackStyle}>
        <span className="switch-thumb" style={thumbStyle} aria-hidden="true" />
      </div>
    </button>
  );
}
