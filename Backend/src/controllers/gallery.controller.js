import { getImagesFromParentFolder } from "../utils/googleDrive.js";

// cache PER EVENT
const cachedImages = {};

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

    // fetch once per event
    if (!cachedImages[eventId]) {
      console.log(`Fetching images for event: ${eventId} ${folderId}`);
      cachedImages[eventId] = await getImagesFromParentFolder(folderId);
    }

    const images = cachedImages[eventId];

    const start = (page - 1) * limit;
    const end = start + limit;

    res.status(200).json({
      success: true,
      eventId,
      page,
      limit,
      total: images.length,
      hasMore: end < images.length,
      images: images.slice(start, end),
    });
  } catch (error) {
    console.error("Gallery Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery images",
    });
  }
};
