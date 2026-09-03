import { FiDownload } from "react-icons/fi";

export default function ResumeSection() {
  return (
    <section id="resume" className="px-4 md:px-16 py-4 md:py-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-muted" />
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">
              Resume
            </span>
          </div>
          <a
            href="/Resume_Angad_Bajaj.pdf"
            download
            className="group flex items-center gap-2 text-xs text-gray-400 hover:text-rose-muted transition-colors"
          >
            <FiDownload className="text-sm" />
            <span>Download</span>
          </a>
        </div>

        {/* PDF Embed */}
        <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-950/30">
          <iframe
            src="/Resume_Angad_Bajaj.pdf"
            title="Resume"
            className="w-full h-[70vh] md:h-[75vh]"
            style={{ colorScheme: "dark" }}
          />
        </div>
      </div>
    </section>
  );
}
