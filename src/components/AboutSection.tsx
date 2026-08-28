import { useState } from "react";

interface Track {
  title: string;
  artist: string;
  youtubeId: string;
}

const topTracks: Track[] = [
  { title: "LIL DEMON", artist: "Future", youtubeId: "ayWwfGtGpBQ" },
  { title: "Borderline", artist: "Tame Impala", youtubeId: "2g5xkLqIElU" },
  { title: "Back Home", artist: "Yeat ft. Joji", youtubeId: "HIg0HJeLdJ8" },
  { title: "Get Lucky", artist: "Daft Punk", youtubeId: "5NV6Rdv1a3I" },
  { title: "Novacane", artist: "Frank Ocean", youtubeId: "gMRJ9jpbavU" },
  { title: "Phantom", artist: "EsDeeKid & Rico Ace", youtubeId: "hmdzniMJOZs" },
  { title: "Evil Ways", artist: "Drake ft. J. Cole", youtubeId: "wrhDUwYbTkI" },
  { title: "No More Parties in LA", artist: "Kanye West ft. Kendrick Lamar", youtubeId: "NnMuFqsmYSE" },
];

export default function AboutSection() {
  const [showMusic, setShowMusic] = useState(true);
  const [activeTrack, setActiveTrack] = useState<Track | null>(null);

  return (
    <section id="about" className="px-4 md:px-16 py-3 md:py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto text-center md:text-left">
        {/* Left Column - Bio */}
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>I'm a 19 y/o engineering student based in Delhi, India.</p>
          <p>
            I spend most of my time trying out new stuff. One moment I'll be
            making a full stack project, the other I'll be ideating on a new AI
            project or imma be randomly watching UI/UX videos.
          </p>
          <p>
            Picking up new things is fun and once I get to know about something,
            it's just a long ass rabbit hole I just have to go deep into.
          </p>
          <p>
            Fun fact : My favorite part about building a project is designing its
            landing page lmao
          </p>
        </div>

        {/* Middle Column - Setup */}
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            I love iterating on my setup and rebuilding the layout every once in
            a while, here's the current one :
          </p>
          <div className="w-full aspect-video rounded-md overflow-hidden">
            <img
              src="/setup.jpg"
              alt="My setup"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            I love to game on my free time, whether it is a story mode game like
            Blackmyth : Wukong, or a game of FIFA (FC) with my friends.
          </p>
        </div>

        {/* Right Column - Music */}
        <div className="text-sm text-gray-300">
          <p className="text-center md:text-right">
            You'll find me listening to{" "}
            <button
              onClick={() => {
                setShowMusic(!showMusic);
                if (showMusic) setActiveTrack(null);
              }}
              className="underline text-white hover:text-rose-muted transition-colors cursor-pointer"
            >
              music
            </button>{" "}
            99.9% of the time.
          </p>

          {/* Music Taste Reveal */}
          <div
            className={`mt-4 rounded-lg bg-black transition-all duration-300 ease-out origin-top ${
              showMusic
                ? "opacity-100 scale-y-100 max-h-[500px] border border-gray-900 p-4"
                : "opacity-0 scale-y-0 max-h-0 overflow-hidden pointer-events-none p-0 mt-0 border-0"
            }`}
          >
            {/* Now Playing */}
            {activeTrack && (
              <div className="mb-3 rounded overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${activeTrack.youtubeId}?autoplay=1&rel=0`}
                  title={activeTrack.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full aspect-video rounded"
                />
                <div className="flex items-center justify-between mt-2 px-1">
                  <div>
                    <p className="text-xs text-white">{activeTrack.title}</p>
                    <p className="text-[10px] text-gray-500">
                      {activeTrack.artist}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTrack(null)}
                    className="text-[10px] text-gray-600 hover:text-rose-muted transition-colors"
                  >
                    close
                  </button>
                </div>
              </div>
            )}

            {/* Track List Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full border border-rose-muted/60 flex items-center justify-center">
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-rose-muted ${
                    activeTrack ? "animate-pulse" : ""
                  }`}
                />
              </div>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                {activeTrack ? "Now Playing" : "On Repeat"}
              </span>
            </div>

            {/* Track List */}
            <div className="space-y-0.5 max-h-36 overflow-y-auto pr-1 scrollbar-thin">
              {topTracks.map((track, i) => (
                <button
                  key={track.title}
                  onClick={() => setActiveTrack(track)}
                  className={`flex items-center gap-3 py-1.5 px-2 rounded w-full text-left transition-colors group ${
                    activeTrack?.youtubeId === track.youtubeId
                      ? "bg-gray-900/80"
                      : "hover:bg-gray-900/40"
                  }`}
                >
                  <span className="text-[10px] text-gray-700 w-4 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span
                      className={`text-xs truncate transition-colors ${
                        activeTrack?.youtubeId === track.youtubeId
                          ? "text-rose-muted"
                          : "text-gray-200 group-hover:text-rose-muted"
                      }`}
                    >
                      {track.title}
                    </span>
                    <span className="text-[10px] text-gray-600 truncate">
                      {track.artist}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-700 group-hover:text-gray-400 transition-colors">
                    ▶
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
