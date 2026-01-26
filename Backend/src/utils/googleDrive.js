import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_CREDENTIALS_PATH
    ? process.env.GOOGLE_CREDENTIALS_PATH
    : "/etc/secrets/google-credentials.json",
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const drive = google.drive({
  version: "v3",
  auth,
});

/**
 * Fetch ALL images from ONE folder (pagination-safe)
 */
const getAllImagesFromFolder = async (folderId, folderName) => {
  let images = [];
  let pageToken = null;

  do {
    const res = await drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/'`,
      fields:
        "nextPageToken, files(id, name, thumbnailLink)",
      pageSize: 100,
      pageToken,
    });

    images.push(
      ...res.data.files.map((file) => ({
        id: file.id,
        name: file.name,
        folderName,
        thumbnail: file.thumbnailLink
          ? file.thumbnailLink.replace("=s220", "=s400")
          : null,
        full: `https://lh3.googleusercontent.com/d/${file.id}`,
      }))
    );

    pageToken = res.data.nextPageToken;
  } while (pageToken);

  return images;
};

/**
 * Get ALL images from:
 * - parent folder
 * - ALL subfolders
 */
export const getImagesFromParentFolder = async (parentFolderId) => {
  let allImages = [];

  // 1️⃣ Images directly inside parent
  const parentImages = await getAllImagesFromFolder(
    parentFolderId,
    "parent"
  );
  allImages.push(...parentImages);

  // 2️⃣ Get subfolders
  let subFolders = [];
  let pageToken = null;

  do {
    const res = await drive.files.list({
      q: `'${parentFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder'`,
      fields: "nextPageToken, files(id, name)",
      pageSize: 100,
      pageToken,
    });

    subFolders.push(...res.data.files);
    pageToken = res.data.nextPageToken;
  } while (pageToken);

  // 3️⃣ Images from subfolders
  const subFolderImages = await Promise.all(
    subFolders.map((folder) =>
      getAllImagesFromFolder(folder.id, folder.name)
    )
  );

  allImages.push(...subFolderImages.flat());

  return allImages;
};