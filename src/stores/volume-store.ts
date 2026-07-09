import { create } from "zustand";
import { persist } from "zustand/middleware";

interface VolumeState {
  isMuted: boolean;
  volume: number;
  setVolume: (newValue: number) => void;
  toggleIsMuted: () => void;
}

export const useVolumeStore = create<VolumeState>()(
  persist(
    (set) => ({
      isMuted: false,
      volume: 0.3,
      setVolume: (newValue: number) => {
        set(() => ({
          volume: newValue,
          isMuted: newValue < 0.01,
        }));
      },
      toggleIsMuted: () => {
        set((state) => {
          if (state.isMuted && state.volume === 0) {
            return { isMuted: false, volume: 0.01 };
          } else {
            return { isMuted: !state.isMuted };
          }
        });
      },
    }),
    {
      name: "volume-storage",
    },
  ),
);
