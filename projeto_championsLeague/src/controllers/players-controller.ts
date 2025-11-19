import { request, Request, Response } from "express";
import { getPlayerByIdServices, getPlayerService } from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {

    const HttpResponse = await getPlayerService();
    

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}; 

export const getPlayerById = async (req:Request, res: Response)  => {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdServices(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req:Request, res: Response) => {
    
};