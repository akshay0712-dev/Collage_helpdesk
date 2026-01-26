import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";

/* ================== CONSTANTS ================== */
const SWIPE_DISTANCE = 120;
const DURATION = 420;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const EventGallery = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const heading = location.state?.heading || "Event Gallery";

  const [photos, setPhotos] = useState([]);
  const [columns, setColumns] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(null);

  /* cube animation */
  const [direction, setDirection] = useState(0); // -1 prev, +1 next
  const isAnimating = useRef(false);

  /* pointer */
  const startX = useRef(0);
  const dragX = useRef(0);

  /* ================== MASONRY ================== */
  const getColumnCount = () => {
    if (window.innerWidth >= 768) return 5;
    if (window.innerWidth >= 640) return 2;
    return 2;
  };

  const distributeImages = (images, count) => {
    const cols = Array.from({ length: count }, () => []);
    images.forEach((img, i) => cols[i % count].push(img));
    return cols;
  };

  /* ================== FETCH ================== */
  const fetchGallery = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/v1/gallery/${eventId}?page=${page}&limit=50`
      );
      const data = await res.json();

      if (data.success) {
        const updated = [...photos, ...data.images];
        setPhotos(updated);
        setColumns(distributeImages(updated, getColumnCount()));
        setHasMore(data.hasMore);
        setPage((p) => p + 1);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  /* ================== NAVIGATION ================== */
  const changeIndex = (nextIndex, dir) => {
    if (
      nextIndex < 0 ||
      nextIndex >= photos.length ||
      isAnimating.current
    )
      return;

    isAnimating.current = true;
    setDirection(dir);
    setSelectedIndex(nextIndex);

    setTimeout(() => {
      isAnimating.current = false;
      setDirection(0);
    }, DURATION);
  };

  const goNext = () =>
    changeIndex(selectedIndex + 1, 1);

  const goPrev = () =>
    changeIndex(selectedIndex - 1, -1);

  /* ================== PRELOAD ================== */
  useEffect(() => {
    if (selectedIndex === null) return;

    [selectedIndex - 1, selectedIndex + 1].forEach((i) => {
      if (photos[i]) {
        const img = new Image();
        img.src = photos[i].full;
      }
    });
  }, [selectedIndex, photos]);

  /* ================== KEYBOARD ================== */
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  /* ================== POINTER (DRAG) ================== */
  const onPointerDown = (e) => {
    startX.current = e.clientX;
    dragX.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    dragX.current = e.clientX - startX.current;
  };

  const onPointerUp = () => {
    if (dragX.current < -SWIPE_DISTANCE) goNext();
    if (dragX.current > SWIPE_DISTANCE) goPrev();
  };

  /* ================== RENDER ================== */
  return (
    <div className="!mt-10 w-[80vw] !mx-auto">
      <h2 className="text-2xl font-semibold mb-6">📸 {heading}</h2>

      {/* Masonry */}
      <div className="flex gap-4">
        {columns.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-4">
            {col.map((photo) => (
              <img
                key={photo.id}
                src={photo.thumbnail || photo.full}
                className="rounded-lg shadow cursor-pointer hover:opacity-80"
                onClick={() =>
                  setSelectedIndex(
                    photos.findIndex((p) => p.id === photo.id)
                  )
                }
              />
            ))}
          </div>
        ))}
      </div>

      {/* ================== LIGHTBOX ================== */}
      {selectedIndex !== null && (
  <div
    className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
    onClick={() => setSelectedIndex(null)}
  >
    {/* VIEWPORT (CLIPS EVERYTHING) */}
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
      style={{ perspective: "1400px" }}
    >
      {/* 3D STAGE */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
        }}
      >
        {/* PREVIOUS FACE */}
        {photos[selectedIndex - 1] && direction !== 0 && (
          <img
            src={photos[selectedIndex - 1].full}
            className="absolute max-h-[90vh] opacity-40"
            style={{
              transform: "rotateY(-90deg) translateZ(45vw)",
              backfaceVisibility: "hidden",
            }}
          />
        )}

        {/* CURRENT FACE */}
        <img
          src={photos[selectedIndex].full}
          className="max-h-[90vh] rounded-lg shadow-2xl z-10"
          style={{
            transform:
              direction === 0
                ? "rotateY(0deg)"
                : `rotateY(${-direction * 90}deg)`,
            transformOrigin:
              direction === 1 ? "right center" : "left center",
            transition: `transform 420ms cubic-bezier(0.22,1,0.36,1)`,
            backfaceVisibility: "hidden",
          }}
        />

        {/* NEXT FACE */}
        {photos[selectedIndex + 1] && direction !== 0 && (
          <img
            src={photos[selectedIndex + 1].full}
            className="absolute max-h-[90vh] opacity-40"
            style={{
              transform: "rotateY(90deg) translateZ(45vw)",
              backfaceVisibility: "hidden",
            }}
          />
        )}
      </div>
    </div>

    {/* NAV BUTTONS */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        goPrev();
      }}
      className="absolute left-6 text-white text-5xl opacity-70 hover:opacity-100"
    >
      ‹
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        goNext();
      }}
      className="absolute right-6 text-white text-5xl opacity-70 hover:opacity-100"
    >
      ›
    </button>
  </div>
)}

    </div>
  );
};

export default EventGallery;
