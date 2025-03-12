import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
dotenv.config();
const port = process.env.PORT || 8080;
const app = express();
connectDB();

app.get("./", (res, req) => {
    res.send("Server is live!")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
