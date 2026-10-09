export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 md:px-6">
      <div className="flex items-end gap-3 md:gap-8">
        {/* Profile Image */}
        <div className="w-28 h-40 md:w-52 md:h-72 relative flex-shrink-0">
          <img
            src="/profile.png"
            alt="Angad"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col pb-1 md:pb-2">
          <p className="text-sm md:text-2xl font-light text-white mb-0.5 md:mb-1">
            Hi, I am
          </p>
          <h1 className="text-2xl md:text-6xl font-bold text-rose-muted leading-tight">
            Angad,
          </h1>
          <h2 className="text-xl md:text-5xl font-bold text-white leading-tight">
            A Full Stack,
          </h2>
          <h2 className="text-xl md:text-5xl font-bold text-white leading-tight">
            AI Engineer.
          </h2>
        </div>
      </div>
    </div>
  );
}
