import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";

const SWIPE_THRESHOLD = 80;

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

  /* swipe animation state */
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef(0);

  /* ---------- Masonry helpers ---------- */
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

  /* ---------- Fetch gallery ---------- */
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
    } catch (err) {
      console.error("Gallery fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  /* ---------- Infinite scroll ---------- */
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

  /* ---------- Navigation ---------- */
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

  /* ---------- Preload next & prev ---------- */
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

  /* ---------- Keyboard ---------- */
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, photos]);

  /* ---------- Swipe handlers ---------- */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    setOffsetX(currentX - touchStartX.current);
  };

  const onTouchEnd = () => {
    setIsDragging(false);

    if (offsetX < -SWIPE_THRESHOLD) goNext();
    else if (offsetX > SWIPE_THRESHOLD) goPrev();

    setOffsetX(0);
  };

  /* ---------- Render ---------- */
  return (
    <div className="!mt-10 w-[80vw] !mx-auto">
      <h2 className="text-2xl font-semibold !mb-6">📸 {heading}</h2>

      {/* Masonry */}
      <div className="flex gap-4">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-4">
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

      {/* ---------- Lightbox ---------- */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedIndex(null)}
        >
          {/* LEFT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-6 text-white text-5xl font-bold opacity-80 hover:opacity-100"
          >
            ‹
          </button>

          {/* IMAGE WITH SWIPE ANIMATION */}
          <img
            src={photos[selectedIndex].full}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg select-none"
            style={{
              transform: `translateX(${offsetX}px)`,
              transition: isDragging ? "none" : "transform 0.25s ease",
            }}
          />

          {/* RIGHT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-6 text-white text-5xl font-bold opacity-80 hover:opacity-100"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
