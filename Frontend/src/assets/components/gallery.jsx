import React from "react";
import { useNavigate } from "react-router-dom";

const EVENTS = [
  {
    id: "freshers2K24",
    title: "Freshers Party 2024",
    cover:
      "https://lh3.googleusercontent.com/d/18UBBktdosSWHAVJixm4qqjSz4VfTHxep",
  },
  {
    id: "sportsFest2K25",
    title: "Sports Fest 2025",
    cover:
      "https://lh3.googleusercontent.com/d/1tDv2a3UXb33SRIS01wawsECed3mzXgqc",
  },
];


const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="!my-10 w-[80vw] min-h-[65vh] !mx-auto">
      <h2 className="text-2xl font-semibold !mb-6">📸 Campus Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {EVENTS.map((event) => (
          <div
            key={event.id}
            onClick={() =>
              navigate(`/gallery/${event.id}`, {
                state: { heading: event.title },
              })
            }
            className="cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={event.cover}
              alt={event.title}
              className="w-full !h-56 object-cover"
            />
            <div className="!p-4 bg-white">
              <h3 className="text-lg font-semibold">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
