import { Connection } from "mongoose";

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

console.log(username, password);

const connection: Connection | undefined = undefined;

export default connection;
