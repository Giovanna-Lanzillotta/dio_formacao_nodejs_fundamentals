import { repositoryPocast } from "../repositories/podcast-repository";


export const serviceListEpisodes =  async () => {

    const data = await repositoryPocast() ;

return data;

}