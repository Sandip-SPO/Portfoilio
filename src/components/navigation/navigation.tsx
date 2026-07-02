import { type JSX } from "react/jsx-runtime";

export default function Nav_section(): JSX.Element {
  return (
    <>
   <nav className="sticky rounded-2xl top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center flex-wrap gap-4">
    {/* Brand – white text with soft gradient accent */}
    <a
      href="#"
      className="text-2xl font-bold tracking-tight text-white drop-shadow-sm"
    >
      Sandip Porey
    </a>

    {/* Nav links – white/light with hover effect */}
    <div className="flex gap-6 text-white/90 font-medium text-sm md:text-base">
      <a href="#skills" className="hover:text-white transition-all duration-200 hover:scale-105">
        Skills
      </a>
      <a href="#projects" className="hover:text-white transition-all duration-200 hover:scale-105">
        Projects
      </a>
      <a href="#contact" className="hover:text-white transition-all duration-200 hover:scale-105">
        Contact
      </a>
    </div>

    {/* CTA button – white with semi‑transparent background and glow */}
    <a
      href="#contact"
      className="hidden md:inline-flex bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold border border-white/30 shadow-md hover:bg-white/30 hover:shadow-lg transition-all duration-300"
    >
      Let's talk
    </a>
  </div>
</nav>
    </>
  );
}
