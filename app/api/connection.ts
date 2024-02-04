import mongoose, { Mongoose } from "mongoose";

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
let connection: Mongoose;
const cropSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  time: Date,
  humidity: Number,
  temperature: Number,
  water_level: Number,
  height: Number,
  image: String,
});
let cropCollection: any | undefined;

const getConnection = async () => {
  if (connection) {
    return connection;
  }

  connection = await mongoose.connect(
    `mongodb+srv://${username}:${password}@cropdata.mdv0mdr.mongodb.net/?retryWrites=true&w=majority`
  );

  return connection;
};

const setCrops = (collection: any) => {
  cropCollection = collection;
};

export { cropSchema, cropCollection, getConnection, setCrops };
