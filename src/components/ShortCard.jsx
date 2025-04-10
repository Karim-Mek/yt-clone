export default function ShortCard({ thumb, title, views }) {
  return (
    <div className="short-card">
      <div className="thumb h-[22rem]">
        <img src={thumb} alt="Short Thumb" className="rounded-lg h-[100%]" />
      </div>

      <div className="short-into">
        <h4 className="font-bold">{title}</h4>
        <p className="text-[#606060] text-xs mt-1">{views}</p>
      </div>
    </div>
  );
}
