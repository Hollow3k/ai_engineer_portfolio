import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import LinksSection from "./components/LinksSection";
import ResumeSection from "./components/ResumeSection";

type Section = "home" | "about" | "work" | "resume" | "links";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [displayedSection, setDisplayedSection] = useState<Section>("home");
  const [contentVisible, setContentVisible] = useState(false);
  const isFirstNav = useRef(true);

  const isHome = activeSection === "home";

  const handleNavigate = (section: string) => {
    const next = section as Section;

    if (next === "home") {
      // Going home — hide content, then switch
      setContentVisible(false);
      setActiveSection(next);
      setDisplayedSection(next);
    } else if (activeSection === "home") {
      // Coming from home — slide hero up, then fade in content
      setActiveSection(next);
      setDisplayedSection(next);
      setTimeout(() => setContentVisible(true), 400);
    } else {
      // Switching between non-home pages — fade out, swap, fade in
      setContentVisible(false);
      setTimeout(() => {
        setDisplayedSection(next);
        setActiveSection(next);
        setTimeout(() => setContentVisible(true), 50);
      }, 300);
    }
  };

  // Handle initial load
  useEffect(() => {
    if (isFirstNav.current) {
      isFirstNav.current = false;
    }
  }, []);

  const renderSection = () => {
    switch (displayedSection) {
      case "about":
        return <AboutSection />;
      case "work":
        return <WorkSection onNavigate={handleNavigate} />;
      case "links":
        return <LinksSection />;
      case "resume":
        return <ResumeSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="pt-14 overflow-hidden">
        {/* Hero wrapper */}
        <div
          className="transition-[padding] duration-[800ms] ease-in-out"
          style={{
            paddingTop: isHome ? "calc(50vh - 14rem)" : "0px",
          }}
        >
          <Hero />
        </div>

        {/* Content area */}
        {displayedSection !== "home" && (
          <div
            className={`transition-opacity duration-300 ease-in-out ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {renderSection()}
          </div>
        )}
      </main>
    </div>
  );
}
