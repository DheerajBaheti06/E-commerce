import dotenv from "dotenv";
import {app} from "./app.js";

dotenv.config({
    path: "./config/config.env",
});

app.listen(process.env.PORT, () => {
      console.log(`server is runnning at port : ${process.env.PORT}`);
});