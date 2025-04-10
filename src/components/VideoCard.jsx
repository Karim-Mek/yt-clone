import { useEffect, useRef } from "react";
import { RxAvatar } from "react-icons/rx";

export default function VideoCard({ thumb, logo, title, channel, views }) {
  const childRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const child = childRef.current;
    const parent = parentRef.current;

    if (!child || !parent) return;

    function changeToGray() {
      parent.style.backgroundColor = "#e5e5e5";
    }
    function changeToWhite() {
      parent.style.backgroundColor = "white";
    }

    child.addEventListener("mousedown", changeToGray);
    child.addEventListener("mouseup", changeToWhite);
    // child.addEventListener("mouseleave", changeToWhite);

    return () => {
      child.removeEventListener("mousedown", changeToGray);
      child.removeEventListener("mouseup", changeToWhite);
      // child.removeEventListener("mouseleave", changeToWhite);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className="video-card p-1 cursor-pointer border-gray-400 rounded"
    >
      <div className="video-thumb relative">
        <img className="rounded-xl" src={thumb} alt="" />
        <span className="absolute bg-[#000000c6] text-white text-sm py-[0.125rem] px-[0.25rem] rounded-lg bottom-2 right-2">
          5:01
        </span>
      </div>

      <div className="flex gap-2 items-start py-3">
        <div className="channel-logo w-[100px]">
          <img
            // className="w-[100px]"
            src={logo}
            alt="Channel Logo"
          />
        </div>

        <div ref={childRef} className="video-info">
          <h3 className="font-bold text-[#0f0f0f]">{title}</h3>

          <a className="text-sm text-[#606060] hover:text-[#0f0f0f]">
            {channel}
          </a>

          <p className="text-sm/4 text-[#606060]">{views}</p>
        </div>
      </div>
    </div>
  );
}
