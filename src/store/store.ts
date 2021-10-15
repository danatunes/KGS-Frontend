import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import UserService from "../service/UserService";

export default class Store{
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool:boolean){
        this.isAuth = bool;
    }

    setUser(user:IUser){
        console.log(user.id);
        this.user.id = user.id;
        this.user.email = user.email;
        this.user.last_name = user.last_name;
        this.user.role = user.role;
        this.user.phone = user.phone;
        this.user.photoUrl = user.photoUrl;
        this.user.first_name = user.first_name;
        console.log(this.user.id);
    }

    setIsLoading(bool : boolean){
        this.isLoading = bool;
    }

    async login(email:string,password:string){
        try {
            const response = await AuthService.login(email,password);
            console.log(response)
            // @ts-ignore
            localStorage.setItem('token',response.data.access_token);
            this.me();
            this.setAuth(true);
        }
        catch (e){
            // @ts-ignore
            alert(e.response?.data?.detail);
        }
    }

    async me(){
        try {
            const token = localStorage.getItem('token');
            const response = await UserService.me(token);
            this.setUser(response.data);
        }catch (e){
            // @ts-ignore
            console.log(e.response?.data?.detail);
        }
    }

    async registration(email:string,password:string){
        try {
            const response = await AuthService.registration(email,password);
            localStorage.setItem('token',response.data.access_token);
            this.setAuth(true);
            this.setUser(response.data.user);
        }
        catch (e){
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }


    async logout(){
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
    }

    async checkAuth(){
        this.setIsLoading(true);
        try {
            const response = await AuthService.check();
            console.log(response)
            this.setAuth(true);
            // @ts-ignore
            this.setUser(response.data);
        }catch (e) {
            // @ts-ignore
            console.log(e.response?.data)
        }finally {
            this.setIsLoading(false);
        }
    }

}