import mongoose from "mongoose";

const { Schema } = mongoose;
const locationSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    coordinates: { lat: Number, lng: Number },
    image: {
      url: { type: String },
      width: { type: Number },
      height: { type: Number },
    },
    isApproved: { type: Boolean },
  },
  { timestamps: true }
);
const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;
