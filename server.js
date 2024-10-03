import { handler } from "./build/handler.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // default port if none is specified in .env
const host = process.env.HOST || "0.0.0.0"; // default host if none is specified in .env

app.use(handler);

app.listen(port, host, () => {
  console.log('prod server start')
  console.log('')
  console.log('hey there! :)')
  console.log(`listening on ${host}:${port}`);
});