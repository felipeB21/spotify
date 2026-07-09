import {
  Play,
  SkipForward,
  SkipBack,
  Volume2,
  Pause,
  VolumeX,
  Volume1,
} from "lucide-react";
import { Tooltip } from "./tooltip";
import { useSongStore } from "../stores/song-store";
import { songs } from "../data/songs";
import { useEffect, useRef, useState } from "react";
import { useVolumeStore } from "../stores/volume-store";
import { formatTime } from "../lib/format-time";

export default function NowPlayingBar() {
  const isPlaying = useSongStore((state) => state.isPlaying);
  const currentSong = useSongStore((state) => state.currentSong);
  const toggleIsPlaying = useSongStore((state) => state.toggleIsPlaying);
  const isMuted = useVolumeStore((state) => state.isMuted);
  const toggleIsMuted = useVolumeStore((state) => state.toggleIsMuted);
  const volume = useVolumeStore((state) => state.volume);
  const setVolume = useVolumeStore((state) => state.setVolume);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((e) => {
        console.log(e);
      });
    } else audioRef.current.pause();

    setCurrentTime(0);
  }, [isPlaying, currentSong]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = true;
    } else {
      audioRef.current.muted = false;
    }

    audioRef.current.volume = volume;
  }, [isMuted, volume]);

  const nextSong = () => {
    const songCategory = songs.filter(
      (song) => song.category === currentSong.category,
    );
    const i = songCategory.findIndex((song) => song.id == currentSong.id);
    const nextIndex = (i + 1) % songCategory.length;
    const song = songCategory[nextIndex];
    return toggleIsPlaying(song.id);
  };

  const previousSong = () => {
    const songCategory = songs.filter(
      (song) => song.category === currentSong.category,
    );
    const i = songCategory.findIndex((song) => song.id == currentSong.id);
    const prevIndex = (i - 1 + songCategory.length) % songCategory.length;
    const song = songCategory[prevIndex];
    return toggleIsPlaying(song.id);
  };

  return (
    <div className="p-4 mx-3 h-20 flex items-center justify-between">
      <audio
        ref={audioRef}
        src={currentSong.play_url}
        onTimeUpdate={() => setCurrentTime(audioRef.current!.currentTime)}
      />

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
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            className="range accent-white focus:accent-green-500 h-1 w-100"
            min={0}
            max={currentSong.duration / 1000}
            value={currentTime}
            onChange={(e) => {
              const newTime = Number(e.target.value);
              setCurrentTime(newTime);
              if (audioRef.current) {
                audioRef.current.currentTime = newTime;
              }
            }}
          />
          <span>{formatTime(currentSong.duration / 1000)}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Tooltip content={isMuted ? "Unmute" : "Mute"}>
          <button className="cursor-pointer" onClick={toggleIsMuted}>
            {isMuted || volume === 0 ? (
              <VolumeX className="w-5 h-5" />
            ) : volume < 0.4 ? (
              <Volume1 className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </Tooltip>
        <input
          type="range"
          className="range accent-white focus:accent-green-500 h-1"
          onChange={(e) => setVolume(Number(e.target.value))}
          defaultValue={volume}
          min={0}
          max={1}
          step={0.01}
        />
      </div>
    </div>
  );
}
