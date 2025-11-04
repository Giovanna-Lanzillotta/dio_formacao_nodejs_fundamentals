import { IncomingMessage } from "http";
import { repositoryPocast } from "../repositories/podcast-repository";
import { PodcastTransferModel } from "../models/podacast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined ):Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };


    // BUSCANDO OS DADOS
    // localhost:3333/api/episode?p=flow     
    const queryString = podcastName?.split("?p=")[1] ?? ""  //Pode fazer assim tambem || ""
    const data = await repositoryPocast(queryString);

    //VERIFICO SE TENHO CONTEÚDO
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent

    // if (data.length !== 0) {
    //     responseFormat.statusCode = StatusCode.OK;
    // }else{
    //     responseFormat.statusCode = StatusCode.NoContent;
    // }

    responseFormat.body = data;
    return responseFormat;
}