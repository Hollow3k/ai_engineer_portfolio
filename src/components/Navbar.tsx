import { HiHome } from "react-icons/hi";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const navItems = [
    { id: "about", label: "About me" },
    { id: "work", label: "Work" },
    { id: "home", label: "home", isIcon: true },
    { id: "resume", label: "Resume" },
    { id: "links", label: "Links" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm pt-2">
      <div className="flex items-center justify-center gap-5 md:gap-10 py-3 md:py-4">
        {navItems.map((item) =>
          item.isIcon ? (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xl transition-colors ${
                activeSection === item.id
                  ? "text-rose-muted"
                  : "text-white hover:text-rose-muted"
              }`}
              aria-label="Home"
            >
              <HiHome size={20} />
            </button>
          ) : (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs md:text-sm font-light transition-colors ${
                activeSection === item.id
                  ? "text-rose-muted"
                  : "text-white hover:text-rose-muted"
              }`}
            >
              {item.label}
            </button>
          )
        )}
      </div>
    </nav>
  );
}
