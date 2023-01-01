import express from "express";
import { connectDB } from "./db/connecctDB.js";
import dotenv from "dotenv";
import { join } from "path";
import web from "./routes/web.js";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || "3000";

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use("/student", web);
app.use("/student", express.static(join(process.cwd(), "public")));
app.use("/student/edit", express.static(join(process.cwd(), "public")));

app.listen(port, () => {
  console.log(`Server is Running at Port : http://localhost:${port}`);
  console.log(`Watch App on URL : http://localhost:${port}/student`);
});
