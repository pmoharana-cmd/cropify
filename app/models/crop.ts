import mongoose from "mongoose";

export interface CropData {
  _id: mongoose.Types.ObjectId;
  time: Date;
  humidity: number;
  temperature: number;
  water_level: number;
  height: number;
  image: any;
}
