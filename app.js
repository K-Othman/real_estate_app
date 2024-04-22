import express from "express";

const app = express();

app.use("/api/test", (req, res) => {
  res.send("it is Working");
});

app.listen(8800, () => {
  console.log("Server Is Running!");
});
