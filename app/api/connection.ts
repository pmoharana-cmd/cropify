import mongoose, { Mongoose } from "mongoose";

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
let connection: Mongoose;

export const getConnection = async () => {
  if (connection) {
    return connection;
  }

  connection = await mongoose.connect(
    `mongodb+srv://${username}:${password}@cropdata.mdv0mdr.mongodb.net/?retryWrites=true&w=majority`
  );

  return connection;
};
