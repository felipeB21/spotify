import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LibraryState {
  isCollapsed: boolean;
  isMaximized: boolean;
  toggleCollapse: () => void;
  toggleMaximize: () => void;
}

export const useLibraryStore = create<LibraryState>()(
  persist(
    (set) => ({
      isCollapsed: false,
      isMaximized: false,
      toggleCollapse: () =>
        set((state) => ({
          isCollapsed: !state.isCollapsed,
          isMaximized: false,
        })),
      toggleMaximize: () =>
        set((state) => ({
          isMaximized: !state.isMaximized,
          isCollapsed: false,
        })),
    }),
    {
      name: "library-storage",
    },
  ),
);
