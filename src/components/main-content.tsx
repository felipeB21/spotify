import { useSongStore } from "../stores/song-store";
import { songs } from "../data/songs";
import { Clock, AudioLines, Play, Pause } from "lucide-react";
import { formatTime } from "../lib/format-time";

export default function MainContent() {
  const isPlaying = useSongStore((state) => state.isPlaying);
  const currentSong = useSongStore((state) => state.currentSong);
  const toggleIsPlaying = useSongStore((state) => state.toggleIsPlaying);

  const categorySongs = songs.filter((song) => song.category === "main");

  return (
    <main className="rounded-lg p-6 bg-linear-to-b from-purple-700 via-purple-950 to-stone-900">
      <div className="flex items-end gap-5">
        <img
          src={categorySongs[0].image}
          alt={`${categorySongs[0].name} Image Cover`}
          className="rounded-lg w-60 h-60 object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="font-bold text-sm">For You</p>
          <h1 className="text-5xl font-extrabold">
            The {categorySongs.length} Greatest {categorySongs[0].artist.name}{" "}
            Songs
          </h1>
        </div>
      </div>

      <div className="mt-5 text-sm font-medium text-stone-300 border-b border-stone-500 pb-2 flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <span>#</span>
          <h5>Title</h5>
        </div>
        <Clock className="w-4 h-4" />
      </div>

      <div className="p-2">
        <ul className="flex flex-col gap-3">
          {categorySongs.map((song, i) => {
            const isCurrent = currentSong.id === song.id;
            const isCurrentlyPlaying = isCurrent && isPlaying;

            return (
              <button
                key={song.id}
                className={`group w-full hover:bg-purple-900 p-2 rounded-lg flex items-center justify-between ${isCurrent && "bg-purple-800"}`}
                onClick={() => toggleIsPlaying(song.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="relative w-4 h-4 flex items-center justify-center text-sm">
                    {isCurrentlyPlaying ? (
                      <>
                        <AudioLines className="w-3 h-3 fill-green-500 group-hover:opacity-0 transition-opacity" />
                        <Pause className="w-3 h-3 fill-white absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    ) : (
                      <>
                        <span className="group-hover:opacity-0 transition-opacity">
                          {i + 1}
                        </span>
                        <Play className="w-3 h-3 fill-white absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      src={song.image}
                      alt={`${song.name} Image Cover`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-sm">{song.name}</h3>
                      <h5 className="font-medium text-xs text-stone-300">
                        {song.artist.name}
                      </h5>
                    </div>
                  </div>
                </div>
                <span className="text-sm font-medium">
                  {formatTime(song.duration / 1000)}
                </span>
              </button>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
