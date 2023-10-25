import { Router } from "express";
const router = Router();

import {
    createVideo,
    deleteVideo,
    getVideo,
    getVideos,
    updateVideo
} from "../controllers/videos.controller";

router.get("/videos", getVideos);

router.get("/videos/:id", getVideo);

router.post("/videos", createVideo);

router.delete("/videos/:id", deleteVideo);

router.put("/videos/:id", updateVideo);

export default router;