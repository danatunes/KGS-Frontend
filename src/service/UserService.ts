import $api from "../http";
import {AxiosResponse} from 'axios';
import {UserResponse} from "../models/response/UserResponse";

export default class UserService {

    static async me(token: string | null): Promise<AxiosResponse<UserResponse>> {
        // @ts-ignore
        return $api.get<UserResponse>('api/v1/users/me',token)
    }

}