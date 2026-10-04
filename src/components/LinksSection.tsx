import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

export default function LinksSection() {
  return (
    <section id="links" className="px-4 md:px-16 py-6 md:py-10">
      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {/* Email */}
          <a
            href="mailto:angadbajaj301206@gmail.com"
            className="group flex items-center gap-3 border border-gray-800 rounded-lg px-4 py-3 hover:border-rose-muted/50 transition-colors"
          >
            <FiMail className="text-rose-muted text-lg shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Email</p>
              <p className="text-xs text-gray-300 group-hover:text-white transition-colors truncate">
                angadbajaj301206@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919999189766"
            className="group flex items-center gap-3 border border-gray-800 rounded-lg px-4 py-3 hover:border-rose-muted/50 transition-colors"
          >
            <FiPhone className="text-rose-muted text-lg shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Phone</p>
              <p className="text-xs text-gray-300 group-hover:text-white transition-colors">
                +91 9999189766
              </p>
            </div>
          </a>

          {/* Github */}
          <a
            href="https://github.com/hollow3k"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-gray-800 rounded-lg px-4 py-3 hover:border-rose-muted/50 transition-colors"
          >
            <FiGithub className="text-rose-muted text-lg shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Github</p>
              <p className="text-xs text-gray-300 group-hover:text-white transition-colors">
                hollow3k
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/angadbajaj23/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-gray-800 rounded-lg px-4 py-3 hover:border-rose-muted/50 transition-colors"
          >
            <FiLinkedin className="text-rose-muted text-lg shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">LinkedIn</p>
              <p className="text-xs text-gray-300 group-hover:text-white transition-colors">
                angadbajaj23
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
