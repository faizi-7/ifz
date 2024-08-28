import mongoose from 'mongoose';

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_STRING || "");
    console.log("Connected to Database");
  } catch (err) {
    console.error("Error connecting to database:", err);
  }
}