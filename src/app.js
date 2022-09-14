import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Bora Estudar - novo curso de node');
});

export default app;