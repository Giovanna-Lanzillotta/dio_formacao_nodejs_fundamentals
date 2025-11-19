import { findAllPlayers, FindPlayerById } from "../repositories/player-repository";
import { noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await findAllPlayers();
    let response = null;

    if(data){
      response  = await ok(data);
    }else{
        response = await noContent();
    }

   
    return response;
};


export const getPlayerByIdServices = async (id:number) => {
  //Pedir para o repositório de dados
  const data = await FindPlayerById(id);
  let response = null;
  if(data){
    return response = ok(data);
  }else{
    response = noContent();
  }

  return response;
};