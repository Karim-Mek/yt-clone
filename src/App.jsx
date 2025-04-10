import { useEffect, useState } from "react";

import "./App.css";
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import VideoCard from "./components/VideoCard";
import ShortCard from "./components/ShortCard";

// SHORTS
import ShortThumb1 from "./assets/images/shorts/short-1-thumb.png";

// VIDEOS
import VideoThumb1 from "./assets/images/video/thumb1.png";
import Logo1 from "./assets/images/video/flograppling-logo.png";

const shorts = [
  {
    thumb: ShortThumb1,
    title: "How to Escape the Kimura #bjj",
    views: "344K views",
  },
];

const videos = [
  {
    thumb: VideoThumb1,
    logo: Logo1,
    title:
      "THESE KIDS ARE BLACK BELTS | Daniel Galvão vs Icaro Moreno | 2024 ADCC Youth Championship",
    channel: "FloGrappling",
    views: "161K views • 1 month ago",
  },
];

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
        <div className="shorts flex gap-2">
          <ShortCard
            thumb={shorts[0].thumb}
            title={shorts[0].title}
            views={shorts[0].views}
          />
          <ShortCard
            thumb={shorts[0].thumb}
            title={shorts[0].title}
            views={shorts[0].views}
          />
        </div>

        <br />
        <br />

        <div className="videos">
          <VideoCard
            thumb={videos[0].thumb}
            logo={videos[0].logo}
            title={videos[0].title}
            channel={videos[0].channel}
            views={videos[0].views}
          />
        </div>
      </main>
    </>
  );
}

export default App;
