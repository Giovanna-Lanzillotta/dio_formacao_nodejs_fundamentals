import { HttpResponse } from "../models/http-response-model";

// sempre que usa async precisa retorna uma Promise
export const ok = async (data:any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    };
};

export const noContent = async():Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    };
};