import { useEffect, useState } from "react";

import "./App.css";
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import VideoCard from "./components/VideoCard";
import ShortCard from "./components/ShortCard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarClass, setSidebarClass] = useState("sidebar-hidden");

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("no-scroll");
      setSidebarClass("sidebar-visible");
    } else {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = "";
      setSidebarClass("sidebar-hidden");
    }
  }, [sidebarOpen]);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} />

      {sidebarOpen && (
        <>
          <div
            className="overlay fixed top-0 left-0 w-full h-full bg-black/50"
            onClick={toggleSidebar}
          ></div>
        </>
      )}

      <Sidebar sidebarClass={sidebarClass} onToggleSidebar={toggleSidebar} />

      <main className="mt-15 p-4">
        <div className="flex gap-2">
          <ShortCard
            thumb="/src/assets/images/shorts/short-1-thumb.png"
            title="How to Escape the Kimura #bjj"
            views="344K views"
          />
          <ShortCard
            thumb="/src/assets/images/shorts/short-1-thumb.png"
            title="How to Escape the Kimura #bjj"
            views="344K views"
          />
        </div>

        {/* <VideoCard
          thumb="/src/assets/images/video/thumb1.png"
          logo="/src/assets/images/video/flograppling-logo.png"
          title="THESE KIDS ARE BLACK BELTS | Daniel Galvão vs Icaro Moreno | 2024 ADCC Youth Championship"
          channel="FloGrappling"
          views="161K views • 1 month ago"
        /> */}
      </main>
    </>
  );
}

export default App;
