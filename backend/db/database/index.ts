import { connect, set } from "mongoose";

const CONNECTION_STRING: string =
  "mongodb+srv://zoloAdmin:freelancePass@freelance.xznekcd.mongodb.net/";

export const connectDb = async () => {
  set("strictQuery", false);
  try {
    await connect(CONNECTION_STRING);
    console.log("Database connected");
  } catch (err) {
    console.log("Connection Unsuccessful");
  }
};
