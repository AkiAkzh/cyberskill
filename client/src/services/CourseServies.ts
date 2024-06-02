import { AxiosResponse } from "axios";
import $api from "../http";
import { IUser } from "../models/IUser";
import { CourseInfo } from "../models/CourseInfo";


export default class CourseService{
   static async submitAnswer(code: string,Prolanguage: string):Promise<AxiosResponse<IUser>>{
       return $api.post('/submit', {code,Prolanguage})
   }
   static async getCourseInfo(courseTitle:string):Promise<AxiosResponse<CourseInfo>>{
        return $api.get(`/courses/${courseTitle}`);
   }
   static async getAllCourses():Promise<AxiosResponse<CourseInfo[]>>{
        return $api.get<CourseInfo[]>(`/courses`);
   }
   static async info():Promise<void>{
     return $api.get('/info');
   }
}