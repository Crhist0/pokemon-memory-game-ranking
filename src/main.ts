import express from "express";
import cors from "cors";
import { initConnection } from "./database/connection";
import { route } from "./routes";

const app = express();
app.use(express.json(), cors(), route);

initConnection()
    .then(() => app.listen(process.env.PORT || 8081, () => console.log("Server rodando...")))
    .catch((err) => {
        console.log("erro na comunicação com BD");
        console.log({ err });
    });
