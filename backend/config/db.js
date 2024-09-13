import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rahul432002:wQ1cvlKgQpyVKmrE@cluster0.dbcrf.mongodb.net/food_app"
    )
    .then(() => console.log("DB Connected"));
};
