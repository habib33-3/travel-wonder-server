import express from "express";
import cors from "cors";
import morgan from "morgan";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`Server at ${port}`);
});
