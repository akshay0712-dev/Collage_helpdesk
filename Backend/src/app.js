import express from "express";
import cors from "cors";
import trackRoute from "./routes/track.route.js";
import galleryRoutes from "./routes/gallery.routes.js"
// import cookieParser from "cookie-parser";

const app = express()


// CORS configuration
// Allowed origins for CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://collage-helpdesk.vercel.app",
];


// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
// app.use(cookieParser())


// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is running",
  });
});

app.use("/api/v1/track", trackRoute)
app.use("/api/v1/gallery", galleryRoutes);





export { app }