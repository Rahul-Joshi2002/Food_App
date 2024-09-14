import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//api endpoint

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send(`Application live at: ${https://food-app-frontend-k4tp.onrender.com}`);
});

app.listen(port, () => {
  console.log(`Sever started on http://localhost:${port}`);
});

// mongodb+srv://rahul432002:wQ1cvlKgQpyVKmrE@cluster0.dbcrf.mongodb.net/?
