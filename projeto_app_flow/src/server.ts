
import * as http from "http";

import {getFilterEpisodes, getListEpisodes} from './controllers/podcast-controller';
import { url } from "inspector";
import { Routers } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(
   async (request: http.IncomingMessage, response:http.ServerResponse ) => {

         //queryString - texto para consulta
        // localhost:3333/api/episode?p=flow
        const [baseUrl, queryString] = request.url?.split("?") ?? ["",""];

    if(request.method === HttpMethod.GET && baseUrl === Routers.LIST){

        // listar podcasts
       await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routers.EPISODE){
        await getFilterEpisodes(request, response);
    }

});

const port = process.env.PORT

server.listen(process.env.PORT, () => { 
    console.log(`servidor iniciado na porta ${port}`);  
});