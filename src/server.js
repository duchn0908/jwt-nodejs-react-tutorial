import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8081;

configViewEngine(app);

initWebRoutes(app);


app.listen(PORT, () => {
    console.log('JWT backend is running on the port=' + PORT);
})