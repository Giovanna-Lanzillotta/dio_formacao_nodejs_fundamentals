import { IncomingMessage } from "http";
import { repositoryPocast } from "../repositories/podcast-repository";

export const serviceFilterEpisodes = async (podcastName: string | undefined ) => {

    // localhost:3333/api/episode?p=flow     
    const queryString = podcastName?.split("?p=")[1] ?? ""  //Pode fazer assim tambem || ""

    const data = await repositoryPocast(queryString);

    return data;
}