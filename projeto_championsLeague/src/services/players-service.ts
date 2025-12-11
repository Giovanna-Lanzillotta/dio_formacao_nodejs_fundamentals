import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, FindPlayerById, insertPlayer } from "../repositories/player-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-models";

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

   response = await created();

  }else {
    response = await badRequest();
  }
  
  return response;
};

export const deletePlayerService = async(id:number) => {
  let response = null;
  const isDeleted = await deleteOnePlayer(id);

  if(isDeleted){
    response = await ok({message: "deleted"});
  }else{
    response = await badRequest();
  }

  
  return response;

};


export const UpdatePlayerService = async(id: number, statistics:StatisticsModel) => {
  const data = await findAndModifyPlayer(id,statistics);

  let response = null;

  if(Object.keys(data).length === 0){
    response = await badRequest();
  }else{
  response = await ok(data);
  }
  return response;
}