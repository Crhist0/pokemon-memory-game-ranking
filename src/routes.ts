import express from "express";
import { PlayerController } from "./controllers/ranking";

var route = express.Router();

route.get("/listByPlays", async (req, res) => {
    try {
        const players = await new PlayerController().listByPlays();
        return res.status(200).send({
            message: "ok",
            data: players,
            count: players.length,
        });
    } catch (err) {
        return res.status(500).send({ err });
    }
});

route.get("/listByTime", async (req, res) => {
    try {
        const players = await new PlayerController().listByTime();
        return res.status(200).send({
            message: "ok",
            data: players,
            count: players.length,
        });
    } catch (err) {
        return res.status(500).send({ err });
    }
});

route.post("/", async (req, res) => {
    try {
        let { name, count, time, date, difficulty } = req.body;
        const player = await new PlayerController().create(name, count, time, date, difficulty);
        return res.status(201).send({
            message: "ok",
        });
    } catch (err) {
        return res.status(500).send({ err });
    }
});

export { route };
