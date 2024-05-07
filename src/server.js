import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
// import bodyParser from "body-parser";
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;
//config view Engine
configViewEngine(app)




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init web routes
initWebRoutes(app);


app.listen(PORT, () => {
    console.log('JWT backend is running on the port=' + PORT);
})