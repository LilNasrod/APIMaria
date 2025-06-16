import http from "http";
import app from "./app.js";

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log("ta rodando")
});