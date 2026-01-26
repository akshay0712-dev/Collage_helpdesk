import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";

/* ================== MOTION CONSTANTS ================== */
const SWIPE_DISTANCE = 120;
const MAX_DRAG = 320;
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

  /* ---------- Swipe animation state ---------- */
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

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

  /* ================== INFINITE SCROLL ================== */
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        fetchGallery();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [photos, hasMore, loading]);

  /* ================== NAVIGATION ================== */
  const goNext = () => {
    if (selectedIndex < photos.length - 1) {
      setSelectedIndex((i) => i + 1);
    }
  };

  const goPrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((i) => i - 1);
    }
  };

  /* ================== PRELOAD ================== */
  useEffect(() => {
    if (selectedIndex === null) return;

    const preload = (i) => {
      if (photos[i]) {
        const img = new Image();
        img.src = photos[i].full;
      }
    };

    preload(selectedIndex + 1);
    preload(selectedIndex - 1);
  }, [selectedIndex, photos]);

  /* ================== KEYBOARD ================== */
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  /* ================== SWIPE ================== */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    let delta = e.touches[0].clientX - startX.current;

    /* resistance at edges */
    if (
      (selectedIndex === 0 && delta > 0) ||
      (selectedIndex === photos.length - 1 && delta < 0)
    ) {
      delta *= 0.35;
    }

    delta = Math.max(-MAX_DRAG, Math.min(MAX_DRAG, delta));
    setDragX(delta);
  };

  const onTouchEnd = () => {
    setIsDragging(false);

    if (dragX < -SWIPE_DISTANCE) {
      slideTo(-window.innerWidth, goNext);
    } else if (dragX > SWIPE_DISTANCE) {
      slideTo(window.innerWidth, goPrev);
    } else {
      setDragX(0);
    }
  };

  const slideTo = (value, callback) => {
    setDragX(value);
    setTimeout(() => {
      callback();
      setDragX(0);
    }, 260);
  };

  /* ================== RENDER ================== */
  return (
    <div className="!mt-10 w-[80vw] !mx-auto">
      <h2 className="text-2xl font-semibold !mb-6">📸 {heading}</h2>

      {/* MASONRY */}
      <div className="flex gap-4">
        {columns.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-4">
            {col.map((photo) => (
              <img
                key={photo.id}
                src={photo.thumbnail || photo.full}
                alt={photo.name}
                loading="lazy"
                className="rounded-lg shadow cursor-pointer hover:opacity-80 transition"
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

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] overflow-hidden flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: `translateX(${dragX}px)`,
              transition: isDragging ? "none" : `transform 0.26s ${EASE}`,
            }}
          >
            {/* PREVIOUS */}
            {photos[selectedIndex - 1] && (
              <img
                src={photos[selectedIndex - 1].full}
                className="absolute left-[-100%] max-h-[90vh] opacity-60 scale-95"
              />
            )}

            {/* CURRENT */}
            <img
              src={photos[selectedIndex].full}
              className="max-h-[90vh] rounded-lg shadow-2xl"
              style={{
                transform: `scale(${isDragging ? 0.97 : 1})`,
                transition: "transform 0.25s ease",
              }}
            />

            {/* NEXT */}
            {photos[selectedIndex + 1] && (
              <img
                src={photos[selectedIndex + 1].full}
                className="absolute right-[-100%] max-h-[90vh] opacity-60 scale-95"
              />
            )}
          </div>

          {/* BUTTONS */}
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
