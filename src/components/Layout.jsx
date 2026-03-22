import { useLayoutEffect, useRef } from 'react';
import Header from './Header';

export default function Layout({ children }) {
  const layoutRef = useRef(null);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const layout = layoutRef.current;
    const header = headerRef.current;
    if (!layout || !header) return;

    const syncHeaderHeight = () => {
      const h = Math.ceil(header.getBoundingClientRect().height);
      layout.style.setProperty('--layout-header-height', `${h}px`);
    };

    syncHeaderHeight();
    const ro = new ResizeObserver(syncHeaderHeight);
    ro.observe(header);
    window.addEventListener('resize', syncHeaderHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncHeaderHeight);
    };
  }, []);

  return (
    <div className="layout" ref={layoutRef}>
      <Header ref={headerRef} />
      <main className="main">
        {children}
      </main>
    </div>
  );
}
