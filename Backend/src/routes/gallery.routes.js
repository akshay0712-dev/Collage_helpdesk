import express from "express";
import { getEventGallery } from "../controllers/gallery.controller.js";

const router = express.Router();

router.get("/:eventId", getEventGallery);


export default router;
