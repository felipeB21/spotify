import { House } from "lucide-react";
import Logo from "../assets/logo";
import Search from "./search";

export default function Header() {
  return (
    <header className="p-4 mx-3 flex items-center justify-between">
      <a href="/" className="w-max">
        <Logo />
      </a>
      <div className="flex items-center gap-2">
        <a
          href="/"
          className="p-2 rounded-full bg-stone-800 inline-flex items-center justify-center hover:bg-stone-700 transition-colors"
        >
          <House />
        </a>
        <Search />
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/felipeb21/spotify"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-white rounded-full p-2 text-black text-xs font-bold hover:bg-stone-200"
        >
          <img
            src="https://github.com/favicon.ico"
            alt="GitHub"
            className="rounded-full w-5 h-5"
          />
          Star on GitHub
        </a>
        <a
          href="https://github.com/felipeb21"
          target="_blank"
          rel="noreferrer"
          className="bg-stone-800 rounded-full hover:bg-stone-700 transition-colors"
        >
          <img
            src="https://avatars.githubusercontent.com/u/138345364?s=96&v=4"
            alt="Felipe"
            className="w-10 h-10 p-1 rounded-full  "
          />
        </a>
      </div>
    </header>
  );
}
