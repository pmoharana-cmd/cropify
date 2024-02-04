import mongoose, { Mongoose } from "mongoose";

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
let connection: Mongoose;
let cropSchema: any | undefined;
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

const setSchema = (schema: any) => {
  cropSchema = schema;
};

const setCrops = (collection: any) => {
  cropCollection = collection;
};

export { cropSchema, cropCollection, getConnection, setCrops, setSchema };
