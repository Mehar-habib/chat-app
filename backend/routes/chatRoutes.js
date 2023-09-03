import express from "express";
import protect from "../middleware/authMiddleware.js";
import accessChat from "../controller/chatController.js";
const router = express.Router();

router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchChats)
// router.route("/group").post(protect, createGroupChat)
// router.route("/rename").put(protect, renameGroup)
// router.route("/groupremove").delete(protect, removeFromGroup)
// router.route("/groupradd").delete(protect, addToGroup)

export default router;
