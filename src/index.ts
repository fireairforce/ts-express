import express from "express";
import http from "http";
import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection();

const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
    res.json({ promise: "hello world" });
});

app.listen(3001);
