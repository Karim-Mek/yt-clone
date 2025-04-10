import { useEffect, useState } from "react";

import "./App.css";
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import Home from "./pages/Home";

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

      <Home />
    </>
  );
}

export default App;
