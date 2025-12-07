import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { deleteOnePlayer, findAllPlayers, FindPlayerById, insertPlayer } from "../repositories/player-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

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

export const createPlayerService = async (player:PlayerModel) => {
  let response = null;

  //verifica se esta vazio
  if(Object.keys(player).length !== 0){
   await insertPlayer(player);

   response = created();

  }else {
    response = badRequest();
  }
  
  return response;
};

export const deletePlayerService = async(id:number) => {
  let response = null;

  await deleteOnePlayer(id);

  response = ok({message: "deleted"})

  return response;

};