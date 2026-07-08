import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Song } from "../types/song";
import { songs, getSongById } from "../data/songs";

interface SongState {
  isPlaying: boolean;
  toggleIsPlaying: (id: number) => void;
  currentSong: Song;
}

export const useSongStore = create<SongState>()(
  persist(
    (set) => ({
      isPlaying: false,
      currentSong: songs[0],
      toggleIsPlaying: (id: number) => {
        set((state) => {
          if (state.currentSong.id === id) {
            return { isPlaying: !state.isPlaying };
          } else {
            return { currentSong: getSongById(id), isPlaying: true };
          }
        });
      },
    }),
    {
      name: "song-storage",
    },
  ),
);
