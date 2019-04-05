import * as express from "express";

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

export default app;
