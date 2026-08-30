import express from "express";
import {
  getAllMonitors,
  getMonitor,
  createMonitor,
  updateMonitor,
  deleteMonitor,
} from "../controllers/monitorController";

const router = express.Router();

router.get("/monitors", getAllMonitors);
router.get("/monitors/:id", getMonitor);
router.post("/monitors", createMonitor);
router.patch("/monitors/:id", updateMonitor);
router.delete("/monitors/:id", deleteMonitor);

export default router;
