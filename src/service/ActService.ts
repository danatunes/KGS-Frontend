import {AxiosResponse} from "axios";
import $api from "../http";
import {ActResponse} from "../models/response/ActResponse";

export default class ActService {

    static async getAll(skip:string): Promise<AxiosResponse<ActResponse>> {
        return $api.get<ActResponse>(`/api/v1/acts/?skip=${skip}&limit=10`)
    }

}