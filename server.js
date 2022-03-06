// import { express } from "express";
const express = require("express");

//declaring object
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to My First Web Application");
});
app.get("/courses", (req, res) => {
  res.send("Welcome to Courses");
});
// post method (Not Clear)
app.post("/courses", (req, res) => {
  res.send("Welcome to Courses");
});
//this should be the last statement in the code.
app.listen(5000, () => {
  console.log("Server is running!");
});
