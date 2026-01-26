import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const EventGallery = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const heading = location.state?.heading || "Event Gallery";

  const [photos, setPhotos] = useState([]);
  const [columns, setColumns] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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

  const fetchGallery = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const res = await fetch(
      `http://localhost:8000/api/v1/gallery/${eventId}?page=${page}&limit=50`
    );
    const data = await res.json();

    if (data.success) {
      const updated = [...photos, ...data.images];
      setPhotos(updated);
      setColumns(distributeImages(updated, getColumnCount()));
      setHasMore(data.hasMore);
      setPage((p) => p + 1);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

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

  return (
    <div className="!mt-10 w-[80vw] !mx-auto">
      <h2 className="text-2xl font-semibold !mb-6">📸 {heading}</h2>

      <div className="flex gap-4">
        {columns.map((col, i) => (
          <div key={i} className="flex-1 flex flex-col gap-4">
            {col.map((photo) => (
              <img
                key={photo.id}
                src={photo.url}
                alt={photo.name}
                className="rounded-lg shadow cursor-pointer hover:opacity-80"
                onClick={() => setSelectedPhoto(photo.url)}
              />
            ))}
          </div>
        ))}
      </div>

      {loading && (
        <p className="text-center text-gray-500 py-4">
          Loading more photos…
        </p>
      )}

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <img
            src={selectedPhoto}
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default EventGallery;
