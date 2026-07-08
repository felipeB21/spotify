import AboutPlayedSong from "./components/about-played-song";
import Library from "./components/library";
import MainContent from "./components/main-content";
import { useLibraryStore } from "./stores/library-store";

export default function App() {
  const isCollapsed = useLibraryStore((state) => state.isCollapsed);
  const isMaximized = useLibraryStore((state) => state.isMaximized);

  const gridCols = isMaximized
    ? "grid-cols-[1fr_280px]"
    : isCollapsed
      ? "grid-cols-[80px_1fr_280px]"
      : "grid-cols-[280px_1fr_280px]";

  return (
    <div
      className={`grid gap-2 h-full transition-all duration-300 ${gridCols}`}
    >
      <Library />
      {!isMaximized && <MainContent />}
      <AboutPlayedSong />
    </div>
  );
}
