export default function SidebarButton({ classes = "", styles = {}, children }) {
  return (
    <button
      className={`flex items-center gap-6 w-full p-2 rounded-xl hover:bg-gray-tag-bg active:bg-gray-tag-hover-bg ${classes}`}
      style={{ ...styles }}
    >
      {children}
    </button>
  );
}
