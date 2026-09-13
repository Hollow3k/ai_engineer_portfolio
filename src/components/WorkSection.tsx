interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

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
  {
    name: "Gemini Clone",
    description:
      "A working clone of Gemini.com with GEMINI API integration focused at frontend development with ReactJS.",
    tech: ["React.js", "Gemini API"],
    liveUrl: "https://geminiclone-beryl.vercel.app/",
    githubUrl: "https://github.com/Hollow3k/Gemini-clone",
  },
];

const skills = {
  languages: "TypeScript, JavaScript, Java, C++, Python, SQL",
  frontend: "React.js, Tailwind CSS, Three.js, HTML, CSS",
  backend: "Node.js, Express.js, FastAPI, MongoDB, PostgreSQL, Supabase, Git",
  ai: "Langchain, LangGraph, Chroma DB, GenAI, Activepieces",
};

export default function WorkSection() {
  return (
    <section id="work" className="px-4 md:px-16 py-3 md:py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 max-w-6xl mx-auto text-center md:text-left">
        {/* Left Column - Current Work */}
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span>Currently working as :</span>
          </div>
          <p><b>AI Agent Builder at Gravity.fast</b></p>
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
                  className="text-xs border border-gray-600 px-3 py-1 text-gray-300 hover:border-rose-muted hover:text-rose-muted transition-colors rounded-sm"
                >
                  Live Site
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs border border-gray-600 px-3 py-1 text-gray-300 hover:border-rose-muted hover:text-rose-muted transition-colors rounded-sm"
                >
                  Github
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
            <li>
              <span className="font-semibold text-white">AI</span> : {skills.ai}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
