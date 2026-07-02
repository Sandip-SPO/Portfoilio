// ProjectDescription.tsx
import React from "react";
import {type Project} from "../project/project_data";

interface ProjectDescriptionProps {
  project: Project;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  project,
}) => {
  return (
    <div className="max-w-full mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl overflow-hidden">
      
      {/* Header */}
      <div className="border-b border-white/10 p-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {project.name}
        </h2>
      </div>

      <div className="p-6 md:p-8 text-gray-300 space-y-8">

        {/* Overview */}
        <section>
          <h3 className="text-lg font-semibold text-white mb-3">
            Project Overview
          </h3>
          <p className="leading-relaxed text-gray-400">
            {project.details}
          </p>
        </section>

        {/* Features */}
        <section>
          <h3 className="text-lg font-semibold text-white mb-3">
            Key Features
          </h3>

          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-400"
              >
                <span className="text-purple-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section>
          <h3 className="text-lg font-semibold text-white mb-3">
            Technology Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-sm text-gray-200 hover:bg-white/15 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section>
          <h3 className="text-lg font-semibold text-white mb-3">
            What I Learned
          </h3>

          <ul className="space-y-2">
            {project.learnings.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-400"
              >
                <span className="text-cyan-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProjectDescription;