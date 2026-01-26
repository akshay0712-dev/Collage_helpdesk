import { getImagesFromParentFolder } from "../utils/googleDrive.js";

// cache PER EVENT
const cache = {};

const EVENT_FOLDER_MAP = {
  sportsFest2K25: "1qYuXP2IaGSyjLExK5R47Ei-QGmDp0NXP",
  freshers2K24: "1zZbCpJfw7hRMUCRckQr7UNBM6ntzsnPq",
};

export const getEventGallery = async (req, res) => {
  try {
    const { eventId } = req.params;   // ✅ from URL
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;

    const folderId = EVENT_FOLDER_MAP[eventId];
    if (!folderId) {
      return res.status(404).json({
        success: false,
        message: "Invalid event",
      });
    }

    if (!cache[eventId]) {
      console.log("Fetching from Google Drive:", eventId);
      cache[eventId] = await getImagesFromParentFolder(folderId);
    }

    const start = (page - 1) * limit;
    const end = start + limit;

    res.json({
      success: true,
      page,
      limit,
      total: cache[eventId].length,
      hasMore: end < cache[eventId].length,
      images: cache[eventId].slice(start, end),
    });
  } catch (err) {
    console.error("Gallery Error:", err);
    res.status(500).json({
      success: false,
      message: "Gallery fetch failed",
    });
  }
};