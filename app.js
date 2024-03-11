import express from "express";
import bodyParser from "body-parser";

const app = express();
import { config } from "dotenv";
config({
    path: "./config/config.env"
});
app.use(bodyParser.json());

import userRoutes from "./Routes/userRoutes.js";
import CreateEmpRoute from "./Routes/CreateEmpRoute.js";
app.use('/api', userRoutes);
app.use('/api', CreateEmpRoute);

export default app;