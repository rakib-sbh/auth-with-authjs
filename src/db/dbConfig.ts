import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.once("connected", () => {
      console.log("MongoDB connected");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure db is up and running ",
        err
      );

      process.exit();
    });
  } catch (error: any) {
    console.log("Something went wrong in connecting to DB");
    console.log(error);
  }
}
