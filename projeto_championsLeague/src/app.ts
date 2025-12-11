// Aqui fica o que diz respeito a aplicação
import express from "express";
import router from "./routers/routers";
import cors from "cors";

function createApp() {
 
const app = express();

app.use(express.json());
app.use("/api", router);

const corsOptions = {
    origin: ["http://felipao.sistem.com","http://gov.br"],
    methods: ['GET','UPDATE'],
}

app.use(cors(corsOptions));

return app;

}

//Vai ser exportavel
export default createApp;