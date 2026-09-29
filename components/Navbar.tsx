"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="luxury-nav fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center"
        >
          <Image
            src="/Logo.png"
            alt="Reyhane Alizadeh"
            width={150}
            height={45}
            className="h-auto w-[120px] object-contain sm:w-[140px]"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-wide text-white/55 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Resume Button */}
        <div className="hidden lg:block">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
          >
            Download Resume

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-sm text-white/65 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-5 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              Download Resume

              <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}