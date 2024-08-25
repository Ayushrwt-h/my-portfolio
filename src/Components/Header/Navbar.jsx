import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-950 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between h-20 px-6 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <a
            className="text-3xl md:text-4xl font-bold transition-transform transform hover:scale-105"
            href="#hero"
          >
            Abhishek <span className="text-slate-400">Rawat</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#skill">Skills</NavItem>
          <NavItem href="#contact">Contact Me</NavItem>
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <SocialLink href="https://www.instagram.com/rawatabhishek_786?igsh=MWhnZjExbzc4dTg1dA==" icon={faInstagram} />
          <SocialLink href="https://www.linkedin.com/in/abhishek-rawat-%F0%9F%94%8A-92962a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={faLinkedin} />
          <SocialLink href="https://wa.link/p8sfrj" icon={faWhatsapp} />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl p-2 transition-transform transform hover:scale-105" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center py-4 space-y-4">
          <NavItem href="#about" onClick={toggleMenu}>About</NavItem>
          <NavItem href="#skill" onClick={toggleMenu}>Skills</NavItem>
          <NavItem href="#contact" onClick={toggleMenu}>Contact Me</NavItem>
          <div className="flex space-x-4">
            <SocialLink href="https://www.instagram.com/rawatabhishek_786?igsh=MWhnZjExbzc4dTg1dA==" icon={faInstagram} />
            <SocialLink href="https://www.linkedin.com/in/abhishek-rawat-%F0%9F%94%8A-92962a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={faLinkedin} />
            <SocialLink href="https://wa.link/p8sfrj" icon={faWhatsapp} />
          </div>
        </div>
      )}
    </header>
  );
}

const NavItem = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="transition duration-300 ease-in-out text-lg hover:text-gray-300 active:text-blue-400"
  >
    {children}
  </a>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-400 transition duration-300"
  >
    <FontAwesomeIcon icon={icon} size="2x" />
  </a>
);

export default Navbar;
