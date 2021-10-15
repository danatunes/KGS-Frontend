import $api, {API_URL} from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        var bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);
        // @ts-ignore
        return $api.post<AuthResponse>('api/v1/login/access-token', bodyFormData)
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        // @ts-ignore
        return $api.post<AuthResponse>('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        // @ts-ignore
        return $api.post<AuthResponse>('/logout')
    }

    static async check(): Promise<AxiosResponse<AuthResponse>>{
        // @ts-ignore
        return $api.post<AuthResponse>(`${API_URL}/api/v1/login/test-token`)
    }

}