import { PodcastTransferModel } from "../models/podacast-transfer-model";
import { repositoryPocast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodes =  async ():Promise<PodcastTransferModel> => {

        // define contrato
        let responseFormat: PodcastTransferModel = {
            statusCode: 0,
            body: [],
        };          
    
    // busco meus dados
    const data = await repositoryPocast() ;

    // verifico o tipo de resposta
    responseFormat = {
         statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
         body: data
    }

    // responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent

//        responseFormat.body = data;

// return data;

return responseFormat;

}