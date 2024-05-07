//import { Request, Response } from "express";
//import express = require("express");
//import mongoose from "mongoose";

//const app = express();
//const PORT = process.env.PORT || 5000;

//// Middleware
//app.use(express.json());

//// Routes
//app.get("/", (req: Request, res: Response) => {
//  res.send("Hello from Express server!");
//});

//// Start the server
//app.listen(PORT, () => {
//  console.log(`Server is running on port ${PORT}`);
//});

//// Connect to MongoDB
//mongoose
//  .connect("mongodb://localhost:27017/my_database", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  } as mongoose.ConnectOptions)
//  .then(() => {
//    console.log("Connected to MongoDB");
//  })
//  .catch((err) => {
//    console.error("Error connecting to MongoDB:", err.message);
//  });
