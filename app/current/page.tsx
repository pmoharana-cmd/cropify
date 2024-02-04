import Link from "next/link";
import { getConnection } from "../api/connection";
import { CropData } from "../models/crop";
import fs from "fs";

export default async function Current() {
  const mongoose = await getConnection();

  const cropSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    time: Date,
    humidity: Number,
    temperature: Number,
    water_level: Number,
    height: Number,
    image: String,
  });

  const Crops = mongoose.model("crop_data", cropSchema);

  // @ts-ignore
  const results: CropData[] = await Crops.find({})
    .sort({ time: -1 })
    .limit(100);

  console.log(results[0].image);

  fs.writeFile(
    "./public/currPlant.png",
    results[0].image,
    { encoding: "base64" },
    function (err) {
      console.log("File created");
    }
  );

  return (
    <div>
      <h1>
        Put current page information here (try to create visualizations that
        will update as data changes)
      </h1>

      <button>
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}
