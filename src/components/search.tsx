import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="relative w-82">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
      <input
        type="text"
        className="w-full bg-stone-800 rounded-full py-2 pl-9 pr-3 font-medium"
        placeholder="What do you want to play?"
      />
    </div>
  );
}
