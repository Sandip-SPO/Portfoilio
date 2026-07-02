import { type JSX } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { project, type Project } from "./project_data";

export default function Project(): JSX.Element {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-white/90 font-semibold tracking-wide text-sm uppercase bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30">
            Real-world builds
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-white">
            Featured projects
          </h2>
          <p className="text-white/70">
            Each project reflects my full‑stack skills and attention to modern
            web practices.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cards */}

          {project.map((details: Project,idx) => {
            return (
            
                <div key={`${details.id}`} className="project-card bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/15">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <i className="fas fa-cart-shopping text-white text-5xl"></i>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-white">
                        {details.name}
                      </h3>

                      <a
                        href={`${details.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="bg-green-500/20 text-green-200 text-xs font-medium px-3 py-1 rounded-full border border-green-400/30 hover:bg-green-500/30 transition-colors">
                          Git Hub
                        </span>
                      </a>
                    </div>

                    <p className="text-white/80 text-sm mt-3 leading-relaxed">
                      {details.details}
                    </p>

                    <div className="flex flex-wrap gap-2 my-4">
                      {details.techStack.map((tech: String) => {
                        return (
                          <span key={`${tech}`} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full border border-white/10">
                            {tech}
                          </span>
                        );
                      })}
                    </div>

                    <Link to={`/project/${idx}`}>
                      <div className="flex items-center gap-2 mt-4 text-white font-medium hover:text-blue-300 transition-colors">
                        <span>Details</span>
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              
            );
          })}
        </div>
      </div>
    </section>
  );
}
