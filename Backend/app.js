import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://Dinuka:dinuka@cluster0.lmf46j3.mongodb.net/blog-app"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected To Database and Listening To Localhost 5000")
  )
  .catch((err) => console.log(err));
