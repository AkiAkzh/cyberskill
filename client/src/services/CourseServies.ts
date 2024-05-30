import { AxiosResponse } from "axios";
import $api from "../http";
import { IUser } from "../models/IUser";


export default class CourseService{
   static async submitAnswer(code: string,Prolanguage: string):Promise<AxiosResponse<IUser>>{
       return $api.post('/submit', {code,Prolanguage})
   }
}