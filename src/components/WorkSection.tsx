import { useState } from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";

interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

interface Agent {
  name: string;
  description: string;
  platform: string;
}

const agents: Agent[] = [
  {
    name: "Daily news digest agent",
    description: "curates and sends a personalized digest every morning",
    platform: "Activepieces",
  },
  {
    name: "GitHub release notes automator",
    description: "turns new releases into clean readable notes",
    platform: "Activepieces",
  },
  {
    name: "Receipt scanner",
    description: "scans receipts and generates a monthly expense report",
    platform: "Activepieces",
  },
  {
    name: "JD + resume match detector",
    description: "scores a resume against a job description with gaps and fixes",
    platform: "LangGraph",
  },
  {
    name: "Blogger scout",
    description:
      "scans Medium and other platforms to find bloggers for sponsored posts",
    platform: "LangGraph",
  },
];

const projects: Project[] = [
  {
    name: "Higenbot",
    description:
      "A multi-agent platform that turns a text prompt into a playable browser game through collaborating AI agents with real-time streaming and iterative editing.",
    tech: ["LangGraph", "FastAPI", "WebSockets", "Supabase"],
    liveUrl: "https://higenbot.vercel.app",
    githubUrl: "https://github.com/Hollow3k/higenbot",
  },
  {
    name: "Shay",
    description:
      "A platform for developers to design and generate database schemas, either manually or using the built in AI and export SQL queries.",
    tech: ["React Flow", "GenAI", "Supabase"],
    liveUrl: "https://shay-five.vercel.app",
    githubUrl: "https://github.com/Hollow3k/shay",
  },
  {
    name: "Pitch Perfect",
    description:
      "A platform for founders to practice their pitches against conversational voice based AI investors with different personas.",
    tech: ["React", "Node.js", "WebRTC", "GenAI"],
    liveUrl: "https://pitchperfect.angad.social",
    githubUrl: "https://github.com/Hollow3k/pitch-perfect",
  },
  // {
  //   name: "Gemini Clone",
  //   description:
  //     "A working clone of Gemini.com with GEMINI API integration focused at frontend development with ReactJS.",
  //   tech: ["React.js", "Gemini API"],
  //   liveUrl: "https://geminiclone-beryl.vercel.app/",
  //   githubUrl: "https://github.com/Hollow3k/Gemini-clone",
  // },
];

const skills = {
  languages: "TypeScript, JavaScript, Java, C++, Python, SQL",
  frontend: "React.js, Tailwind CSS, Three.js, HTML, CSS",
  backend: "Node.js, Express.js, FastAPI, MongoDB, PostgreSQL, Supabase, Git",
  ai: "Langchain, LangGraph, Chroma DB, GenAI, Activepieces",
};

interface WorkSectionProps {
  onNavigate: (section: string) => void;
}

export default function WorkSection({ onNavigate }: WorkSectionProps) {
  const [agentsOpen, setAgentsOpen] = useState(false);

  return (
    <section id="work" className="px-4 md:px-16 py-3 md:py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 max-w-6xl mx-auto text-center md:text-left">
        {/* Left Column - Experiences */}
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span><h3 className="text-white text-sm font-medium">Experiences :</h3></span>
          </div>
          <p><b>Agentic AI Intern @ Gravity.fast</b></p>
          <div className="space-y-2 text-center md:text-left text-xs text-gray-400">
            <p>
              I build AI agents and automation workflows that take manual work
              off people's plates - on Activepieces and LangGraph.
            </p>
            <div>
              <button
                type="button"
                onClick={() => setAgentsOpen((prev) => !prev)}
                aria-expanded={agentsOpen}
                className="flex items-center justify-center md:justify-start gap-1.5 w-full text-xs text-gray-300 hover:text-rose-muted transition-colors"
              >
                <span>Agents I've built</span>
                <svg
                  className={`w-3 h-3 transition-transform ${
                    agentsOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {agentsOpen && (
                <ul className="mt-3 md:mt-2 space-y-3 md:space-y-2 md:border-l md:border-gray-700 md:pl-3">
                  {agents.map((agent) => (
                    <li key={agent.name} className="leading-relaxed">
                      <span className="text-white font-medium">
                        {agent.name}
                      </span>{" "}
                      - {agent.description}
                      <span className="text-rose-muted/90"> - {agent.platform}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="space-y-2 text-center md:text-left">
              <p><b>Tech Team Member @ Hash Define</b></p>
              <p className="text-xs text-gray-400 leading-relaxed">
                I’ve taught DSA to 30+ students and helped run technical
                sessions, coding workshops, and a hackathon for the College
                Technical Society.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("links")}
            className="text-xs text-gray-400 pt-1 hover:text-rose-muted transition-colors"
          >
            Open to new opportunities.
          </button>
        </div>

        {/* Middle Column - Projects */}
        <div className="space-y-4">
          <h3 className="text-white text-sm font-medium">Projects :</h3>
          {projects.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                <span className="text-white font-semibold text-sm">
                  {project.name}
                </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live site`}
                  title="Live Site"
                  className="text-gray-300 hover:text-rose-muted transition-colors"
                >
                  <FiGlobe className="text-sm" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  title="GitHub"
                  className="text-gray-300 hover:text-rose-muted transition-colors"
                >
                  <FiGithub className="text-sm" />
                </a>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] text-rose-muted/90 bg-rose-muted/10 px-2 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Skills */}
        <div className="space-y-4">
          <h3 className="text-white text-sm font-medium">Skills :</h3>
          <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
            <li>
              <span className="font-semibold text-white">AI</span> : {skills.ai}
            </li>
            <li>
              <span className="font-semibold text-white">Languages</span> :{" "}
              {skills.languages}
            </li>
            <li>
              <span className="font-semibold text-white">Frontend</span> :{" "}
              {skills.frontend}
            </li>
            <li>
              <span className="font-semibold text-white">Backend and
              DevOps</span> : {skills.backend}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
