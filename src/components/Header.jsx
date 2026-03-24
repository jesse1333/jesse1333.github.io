import { forwardRef } from 'react';

const Header = forwardRef(function Header(_, ref) {
  return (
    <header ref={ref} className="header">
      <span className="logo">JT</span>
      <nav>
        <a href="#about-me">About Me</a>
        <a href="#projects">Work</a>
        <a href="#experiences">Experiences</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
});

export default Header;
