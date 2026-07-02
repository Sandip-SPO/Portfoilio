import type { JSX } from "react";
import { FaUserAstronaut ,FaGithub} from "react-icons/fa";


export default function Hero(): JSX.Element {
  return (
    <section className="relative  rounded-4xl overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background blob – subtle glowing circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Freelance badge – glass effect */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm font-medium border border-white/20 mb-6">
              <i className="fas fa-code"></i>{" "}
              <span>Available for freelance</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Crafting{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                digital products
              </span>
              <br /> with full-stack mastery
            </h1>

            {/* Description – light gray for readability */}
            <p className="text-white/80 text-lg mt-6 max-w-xl mx-auto lg:mx-0">
              I'm Sandip, a MERN & PostgreSQL developer who turns ideas into
              robust, scalable web applications. I bridge beautiful frontends
              with powerful backends.
            </p>

            {/* CTA Buttons – dark glass & outline white */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <a
                href="#projects"
                className="bg-white/20 backdrop-blur-sm text-white px-7 py-3 rounded-full font-semibold border border-white/30 shadow-md hover:bg-white/30 hover:shadow-lg transition-all flex items-center gap-2"
              >
                <i className="fab fa-github"></i> View work
              </a>
              <a
                href="#contact"
                className="border-2 border-white/50 bg-transparent text-white px-7 py-3 rounded-full font-semibold hover:border-white hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <i className="far fa-envelope"></i> Contact me
              </a>
            </div>

            {/* Tech stack strip – light icons on dark */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-10 text-sm text-white/70">
              <span className="flex items-center gap-1">
                <i className="fab fa-react text-cyan-300"></i> React
              </span>
              <span className="flex items-center gap-1">
                <i className="fab fa-node-js text-green-300"></i> Node.js
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-database text-amber-300"></i> MongoDB
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-database text-sky-300"></i> PostgreSQL
              </span>
            </div>
          </div>

          {/* Right profile image circle */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400/30 to-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/30">
              <FaUserAstronaut className="text-white/90 text-7xl md:text-8xl" />
              <div className="absolute -bottom-3 -right-3 bg-white/20 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/40">
                <FaGithub className="fab fa-github text-3xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade – now to transparent (not white) */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none"></div>
    </section>
  );
}
