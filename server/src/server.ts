import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import { Request, Response } from "express";
import authRoute from "./routes/auth.route.ts";

const app = express();
app.use(express.json());
app.use(helmet());

mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/hachinosu`);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (req: Request, res: Response) => {
  res.json("hachinosu api");
});

app.use("/api/auth", authRoute);

app.listen(8800, () => {
  connect();
  console.log("listen at port  8800");
});
