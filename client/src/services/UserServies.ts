import { AxiosResponse } from "axios";
import $api from "../http";
import { IUser } from "../models/IUser";


export default class UserService{
   static fetchUsers():Promise<AxiosResponse<IUser[]>>{
       return $api.get<IUser[]>('/users')
   }

   static async profileUser():Promise<AxiosResponse<IUser>>{
        return $api.get<IUser>(`/profile`)
   }

   static async updatedProges(email :String){
        return $api.post('/updatedprogess', {email});
   }
}