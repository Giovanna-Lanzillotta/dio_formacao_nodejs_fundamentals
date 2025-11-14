// Aqui fica o que diz respeito a aplicação
import express from "express";
import router from "./routers/routers";

function createApp() {
 
const app = express();

app.use(express.json());
app.use("/api", router);

return app;

}

//Vai ser exportavel
export default createApp;