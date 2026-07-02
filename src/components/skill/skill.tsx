import type { JSX } from "react/jsx-runtime";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaCheck,
  FaCheckCircle,
  FaDocker
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiJavascript,
  SiReact,
  SiDocker,
} from "react-icons/si";

export default function Skill(): JSX.Element {
  return (
    <section id="skills" className="py-20 bg-transparent">
  <div className="container mx-auto px-6">
    {/* Section header */}
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="inline-block text-white/90 font-semibold tracking-wide text-sm uppercase bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30">
        Tech arsenal
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-white">
        My developer toolkit
      </h2>
      <p className="text-white/70">
        From frontend finesse to database design — all the modern tools I
        master daily.
      </p>
    </div>

    {/* Skill badges – glassmorphism style */}
    <div className="flex flex-wrap justify-center gap-4 md:gap-5">
      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <FaHtml5 className="text-orange-300 text-xl" />
        <span className="font-medium text-white/90">HTML5</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <FaCss3 className="text-sky-300 text-xl" />
        <span className="font-medium text-white/90">CSS3</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <SiJavascript className="text-yellow-300 text-xl" />
        <span className="font-medium text-white/90">JavaScript (ES6+)</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <SiTailwindcss className="text-teal-300 text-xl" />
        <span className="font-medium text-white/90">Tailwind CSS</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <SiReact className="text-cyan-300 text-xl" />
        <span className="font-medium text-white/90">React</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <FaNodeJs className="text-green-300 text-xl" />
        <span className="font-medium text-white/90">Node.js</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <SiExpress className="text-white/80 text-xl" />
        <span className="font-medium text-white/90">Express.js</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <SiMongodb className="text-emerald-300 text-xl" />
        <span className="font-medium text-white/90">MongoDB</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <SiPostgresql className="text-indigo-300 text-xl" />
        <span className="font-medium text-white/90">PostgreSQL</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <SiGit className="text-rose-300 text-xl" />
        <span className="font-medium text-white/90">Git</span>
      </div>

      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <SiGithub className="text-white/80 text-xl" />
        <span className="font-medium text-white/90">GitHub</span>
      </div>
      <div className="skill-badge bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md hover:bg-white/20 transition-all duration-300">
        <FaDocker className="text-white/80 text-xl" />
        <span className="font-medium text-white/90">Docker</span>
      </div>
    </div>

    {/* Bottom capabilities strip – also glassy */}
    <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm">
      <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 text-white/90 shadow-sm">
        <FaCheckCircle className="text-green-300" /> REST APIs
      </span>
      <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 text-white/90 shadow-sm">
        <FaCheckCircle className="text-green-300" /> JWT Auth
      </span>
      <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 text-white/90 shadow-sm">
        <FaCheckCircle className="text-green-300" /> Prisma / Mongoose
      </span>
    </div>
  </div>
</section>
  );
}
