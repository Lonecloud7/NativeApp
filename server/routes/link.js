
const express = require("express");

const router = express.Router();

const { createLink, readLink, removeLink, updateLink } = require("../controllers/link");

const { requireSignin } = require("../controllers/auth");


router.post("/create-link", requireSignin, createLink);
router.get("/read-link", readLink);
router.delete("remove-link",requireSignin, removeLink);
router.put("/update-link",requireSignin, updateLink);

export default router;
