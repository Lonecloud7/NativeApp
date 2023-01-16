import mongoose from "mongoose";
const {Schema, ObjectId} = mongoose

const LinkSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    urlPreview: {},
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: [{ type: ObjectId, ref: "User" }],
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Link", LinkSchema);
