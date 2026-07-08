import {
  PanelLeftClose,
  PanelLeftOpen,
  Maximize2,
  Minimize2,
  Logs,
  Volume2,
} from "lucide-react";
import { Tooltip } from "./tooltip";
import { useLibraryStore } from "../stores/library-store";
import { useSongStore } from "../stores/song-store";
import { songs } from "../data/songs";

export default function Library() {
  const isCollapsed = useLibraryStore((state) => state.isCollapsed);
  const isMaximized = useLibraryStore((state) => state.isMaximized);
  const toggleCollapse = useLibraryStore((state) => state.toggleCollapse);
  const toggleMaximize = useLibraryStore((state) => state.toggleMaximize);
  const isPlaying = useSongStore((state) => state.isPlaying);
  const currentSong = useSongStore((state) => state.currentSong);
  const toggleIsPlaying = useSongStore((state) => state.toggleIsPlaying);

  return (
    <section className="bg-stone-900 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <Tooltip
          content={
            isCollapsed ? "Expand Your Library" : "Collapse Your Library"
          }
        >
          <button
            onClick={toggleCollapse}
            className={
              isCollapsed
                ? "group flex items-center justify-center cursor-pointer"
                : "group flex items-center gap-1 cursor-pointer"
            }
          >
            {isCollapsed ? (
              <PanelLeftOpen className="w-auto h-auto" />
            ) : (
              <PanelLeftClose className="w-4 h-4 opacity-0 scale-90 -ml-5 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-0 transition-all duration-200 ease-out" />
            )}
            {!isCollapsed && <h2 className="font-bold">Your Library</h2>}
          </button>
        </Tooltip>

        {!isCollapsed && (
          <Tooltip
            content={isMaximized ? "Restore layout" : "Expand your library"}
          >
            <button
              onClick={toggleMaximize}
              className="cursor-pointer p-2 rounded-full hover:bg-stone-800"
            >
              {isMaximized ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </Tooltip>
        )}
      </div>
      <div className="mt-5">
        <button className="hover:scale-105 text-xs flex items-center gap-2 cursor-pointer text-stone-200 hover:text-white font-medium">
          <Logs className="w-5 h-5" />
          Alphabetical
        </button>
      </div>
      <nav className="mt-10">
        <ul>
          {songs.map((song) => (
            <button
              key={song.id}
              className={`flex gap-4 items-center hover:bg-stone-800 p-2 rounded-lg w-full cursor-pointer transition-colors ${currentSong.id === song.id ? "bg-green-950 text-green-500" : ""}  `}
              onClick={() => toggleIsPlaying(song.id)}
            >
              <img
                src={song.image}
                alt={`${song.name} Image Cover`}
                className="h-15 w-15 rounded-lg"
              />
              <div className="flex flex-col items-start">
                <h2 className="font-bold">{song.name}</h2>
                <h5 className="text-stone-400 text-xs font-medium">
                  {song.artist.name}
                </h5>
              </div>
              {currentSong.id === song.id && isPlaying ? (
                <Volume2 className="ml-3 h-5 w-5" />
              ) : null}
            </button>
          ))}
        </ul>
      </nav>
    </section>
  );
}
