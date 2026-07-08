import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/header.tsx";
import NowPlayingBar from "./components/now-playing-bar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="mx-3 flex-1 overflow-y-auto">
        <App />
      </div>
      <NowPlayingBar />
    </div>
  </StrictMode>,
);
