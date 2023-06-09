import mongoose, { Document, Schema } from "mongoose";

//interfaces
import Restaurant from "./restaurant.interface";

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["restaurant", "cafe", "bakery"],
  },
  logo: {
    type: String,
  },
  location: {
    type: String,
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  open_time: {
    type: String,
  },
  full_name: {
    type: String,
    required: true,
  },
  close_time: {
    type: String,
  },
  owner_name: {
    type: String,
    required: true,
  },
  owner_email: {
    type: String,
    required: true,
  },
  owner_phone: {
    type: String,
    required: true,
  },
  restaurant_phone: {
    type: String,
    required: true,
  },
});

const restaurantModel = mongoose.model<Restaurant & Document>(
  "Restaurant",
  restaurantSchema
);

export default restaurantModel;
