// Header Icons:
import { MdMic } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GrAdd } from "react-icons/gr";
import { IoNotificationsOutline, IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";

import YtLogo from "../assets/images/yt-logo.png";

export default function Header({ onToggleSidebar }) {
  const [openNotif, setOpenNotif] = useState(false);

  return (
    <>
      <header className="py-2 px-4 flex justify-between items-center fixed top-0 left-0 w-full">
        {/* fixed top-0 left-0 w-full */}
        <div className="flex items-center gap-4">
          <button
            className="sidebar-button p-2 flex rounded-4xl hover:bg-gray-tag-hover-bg active:bg-gray-tag-active-bg"
            onClick={onToggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
            </svg>
          </button>
          <a className="logo w-[90px]">
            <img className="w-[100%]" src={YtLogo} alt="Youtube Logo" />
          </a>
        </div>
        <div className="flex">
          <button className="search-button flex p-2 rounded-4xl hover:bg-gray-tag-hover-bg sm:hidden  active:bg-gray-tag-active-bg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="search-container hidden border-2 border-red-300 sm:flex">
            <input type="text" />
            <button className="search-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <button className="vocal-search flex p-2 rounded-4xl hover:bg-gray-tag-hover-bg  active:bg-gray-tag-active-bg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
            </svg>
          </button>
        </div>
        <div className="flex sm:gap-2">
          <button className="create-button flex gap-2 items-center py-0 pl-2 pr-4 rounded-4xl bg-gray-tag-bg hover:bg-gray-tag-hover-bg active:bg-gray-tag-active-bg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z"></path>
            </svg>
            <span className="text-sm font-bold">Create</span>
          </button>
          <button
            className="notification-button flex p-2 rounded-4xl hover:bg-gray-tag-hover-bg active:bg-gray-tag-active-bg"
            onClick={() => {
              setOpenNotif(!openNotif);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              {openNotif ? (
                <path
                  clip-rule="evenodd"
                  d="M18.001 10a6.003 6.003 0 00-4.025-5.667 2 2 0 10-3.945-.002A6.003 6.003 0 006.001 10v3.988a.044.044 0 01-.006.022L3.91 17.485A1 1 0 004.767 19h14.468a1 1 0 00.857-1.515l-2.085-3.475a.044.044 0 01-.006-.022V10Zm-6 12a3.001 3.001 0 002.83-2H9.17A3.001 3.001 0 0012 22Z"
                  fill-rule="evenodd"
                ></path>
              ) : (
                <path
                  clip-rule="evenodd"
                  d="m13.497 4.898.053.8.694.4C15.596 6.878 16.5 8.334 16.5 10v2.892c0 .997.27 1.975.784 2.83L18.35 17.5H5.649l1.067-1.778c.513-.855.784-1.833.784-2.83V10c0-1.666.904-3.122 2.256-3.902l.694-.4.053-.8c.052-.78.703-1.398 1.497-1.398.794 0 1.445.618 1.497 1.398ZM6 10c0-2.224 1.21-4.165 3.007-5.201C9.11 3.236 10.41 2 12 2c1.59 0 2.89 1.236 2.993 2.799C16.79 5.835 18 7.776 18 10v2.892c0 .725.197 1.436.57 2.058l1.521 2.535c.4.667-.08 1.515-.857 1.515H15c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879s-1.559-.316-2.121-.879C9.316 20.56 9 19.796 9 19H4.766c-.777 0-1.257-.848-.857-1.515L5.43 14.95c.373-.622.57-1.333.57-2.058V10Zm4.5 9c0 .398.158.78.44 1.06.28.282.662.44 1.06.44s.78-.158 1.06-.44c.282-.28.44-.662.44-1.06h-3Z"
                  fill-rule="evenodd"
                ></path>
              )}
            </svg>
          </button>
          <button className="avatar ml-2">
            <RxAvatar size={36} />
          </button>
        </div>
      </header>
    </>
  );
}
