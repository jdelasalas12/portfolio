"use client";
import { useState } from "react";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-mono text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase"
        >
          {"<Jayson/>"}
          <span className="text-[#c8ff00]">.</span>DEV
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Work", "About", "Skills", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className=" font-mono text-sm font-bold uppercase tracking-[0.15em] text-white/50 transition hover:text-[#c8ff00]"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#47aa84] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-[#5cff33] md:block"
          style={{ color: "black" }}
        >
          Let&apos;s talk
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-[#080808] px-6 py-6 md:hidden">
          <nav className="flex flex-col">
            {["Work", "About", "Skills", "Experience", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="border-b border-white/[0.06] py-4 text-sm uppercase tracking-[0.15em] text-white/70"
                >
                  {item}
                </a>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
