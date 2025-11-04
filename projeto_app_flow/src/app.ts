
import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podcast-controller';
import { Routers } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
   

    export const app = async (request: http.IncomingMessage, response:http.ServerResponse ) => {

         //queryString - texto para consulta
        // localhost:3333/api/episode?p=flow
        const baseUrl = request.url?.split("?")[0];

    if(request.method === HttpMethod.GET && baseUrl === Routers.LIST){

        // listar podcasts
       await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routers.EPISODE){
        await getFilterEpisodes(request, response);
    }
};