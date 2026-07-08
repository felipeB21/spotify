import { Play, SkipForward, SkipBack, Volume2, Pause } from "lucide-react";
import { Tooltip } from "./tooltip";
import { useSongStore } from "../stores/song-store";
import { songs } from "../data/songs";
import { useEffect, useRef } from "react";

export default function NowPlayingBar() {
  const isPlaying = useSongStore((state) => state.isPlaying);
  const currentSong = useSongStore((state) => state.currentSong);
  const toggleIsPlaying = useSongStore((state) => state.toggleIsPlaying);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else audioRef.current.pause();
  }, [isPlaying, currentSong]);

  const nextSong = () => {
    const i = songs.findIndex((song) => song.id == currentSong.id);
    const nextIndex = (i + 1) % songs.length;
    const song = songs[nextIndex];
    return toggleIsPlaying(song.id);
  };

  const previousSong = () => {
    const i = songs.findIndex((song) => song.id == currentSong.id);
    const prevIndex = (i - 1 + songs.length) % songs.length;
    const song = songs[prevIndex];
    return toggleIsPlaying(song.id);
  };

  return (
    <div className="p-4 mx-3 h-20 flex items-center justify-between">
      <audio ref={audioRef} src={currentSong.play_url} />

      <div className="flex gap-4">
        <img
          src={currentSong.image}
          alt="Artist- song"
          className="w-12 h-12 rounded-lg"
        />
        <div>
          <h2 className="font-bold">{currentSong.name}</h2>
          <h5 className="text-stone-400 text-xs font-medium">
            {currentSong.artist.name}
          </h5>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-5">
          <Tooltip content="Previous">
            <button className="cursor-pointer" onClick={previousSong}>
              <SkipBack className="w-5 h-5 hover:fill-white" />
            </button>
          </Tooltip>
          <Tooltip content={isPlaying ? "Pause" : "Play"}>
            <button
              className="bg-white p-1.5 rounded-full cursor-pointer hover:scale-105"
              onClick={() => toggleIsPlaying(currentSong.id)}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-black" />
              ) : (
                <Play className="w-5 h-5 fill-black " />
              )}
            </button>
          </Tooltip>
          <Tooltip content="Next">
            <button className="cursor-pointer" onClick={nextSong}>
              <SkipForward className="w-5 h-5 hover:fill-white" />
            </button>
          </Tooltip>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span>0:00</span>
          <input
            type="range"
            className="range accent-white focus:accent-green-500 h-1 w-100"
          />
          <span>3:32</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="cursor-pointer">
          <Volume2 className="w-5 h-5" />
        </button>
        <input
          type="range"
          className="range accent-white focus:accent-green-500 h-1"
        />
      </div>
    </div>
  );
}
